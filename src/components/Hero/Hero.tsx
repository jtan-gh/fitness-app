import { Button, colors } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CenterContent>
        <h1>{t('Hero.Title')}</h1>
        <h4>{t('Hero.Content')}</h4>
        <Button size="large" variant="contained">{t('Hero.ActionLabel')}</Button>
      </CenterContent>
    </Wrapper>
  )
}


const Wrapper = styled('div')({
  backgroundImage: 'url("/assets/hero.jpg")',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'right 0',
  height: "90vh",
  padding: '1rem',
  display: 'grid',
  placeItems: 'center',
});

const CenterContent = styled('div')(({ theme }) => ({
  padding: 'inherit',
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  '& h1': {
    color: theme.palette.primary.main,
  },
  '& h4': {
    color: theme.customColors.neutralWhite,
  },
}));

export default Hero;