// ImgWrapper.tsx
import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';

interface ImgWrapperProps {
  imgPath: string;
}

const ImgWrapperStyled = styled('div')<ImgWrapperProps>(
  ({ imgPath }) => ({
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      width: '120%', // Adjust the size as needed
      position: 'fixed',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)', // Center the image and adjust the translation as needed
    },
  })
);

const ImgWrapper: React.FC<ImgWrapperProps> = ({ imgPath }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const imgRect = imgRef.current.getBoundingClientRect();
        const newScrollY = window.scrollY + imgRect.top;

        // Using requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          setScrollY(newScrollY);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ImgWrapperStyled imgPath={imgPath}>
      <img ref={imgRef} src={imgPath} alt="Your Image" style={{ transform: `translateY(-${scrollY * 0.5}px)` }} />
    </ImgWrapperStyled>
  );
};

export default ImgWrapper;
