import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Toolbar,
  AppBar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

interface NavItem {
  label: string;
  link: string;
}

const navigationItems: NavItem[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'Portfolio', link: '/portfolio' },
  { label: 'Contact', link: '/contact' },
  // Add more navigation items as needed
];

const ResponsiveOverflowMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const NavRef = useRef<HTMLDivElement>(null);
  const [primaryItems, setPrimaryItems] = useState<NavItem[]>(navigationItems); //init all
  const [overflowItems, setOverflowItems] = useState<NavItem[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const updateNavigation = () => {
      if(NavRef && NavRef.current){
        // Calculate the number of items to show in the primary menu
        const maxItemsInPrimaryMenu = calculateMaxItems(window.innerWidth);

        // Split the items into primary and overflow
        const primary = navigationItems.slice(0, maxItemsInPrimaryMenu);
        const overflow = navigationItems.slice(maxItemsInPrimaryMenu);

        setPrimaryItems(primary);
        setOverflowItems(overflow);
      }
    };

    updateNavigation();
    window.addEventListener('resize', updateNavigation);

    return () => {
      window.removeEventListener('resize', updateNavigation);
    };
  }, []);

  const calculateMaxItems = (width: number) => {
    // Determine the max items based on the available width
    const minWidthPerButton = 100; // Adjust as needed
    const maxItems = Math.floor(width / minWidthPerButton);

    return maxItems;
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div ref={NavRef} style={{ display: 'flex' }}>
            {primaryItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component="a"
                href={item.link}
                style={{
                  flex: '1 1 auto',
                  whiteSpace: 'nowrap',
                  minWidth: '100',
                  textAlign: 'left',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.label}
              </Button>
            ))}

            {overflowItems.length > 0 && (
              <Button
                color="inherit"
                aria-controls="overflow-menu"
                aria-haspopup="true"
                startIcon={<MenuIcon />}
                onClick={handleClick}
              />
            )}

            <Menu
              id="overflow-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {overflowItems.map((item) => (
                <MenuItem key={item.label} onClick={handleClose}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ResponsiveOverflowMenu;
