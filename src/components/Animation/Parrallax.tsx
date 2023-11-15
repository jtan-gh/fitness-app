// Parallax.tsx
import React, { useEffect, useRef, ReactNode } from 'react';
import { styled } from '@mui/system';

const ParallaxWrapperStyled = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
});

const ParallaxLayerStyled = styled('div')<{ depth: number }>(
  ({ depth }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: `translateZ(${depth}px) scale(1)`,
    zIndex: -1,
  })
);

interface ParallaxProps {
  children: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = parallaxRef.current.scrollTop;
        const layers = parallaxRef.current.getElementsByClassName('parallax-layer');
        for (let i = 0; i < layers.length; i++) {
          const depth = parseFloat(
            (layers[i] as HTMLElement).getAttribute('data-depth') || '0'
          );
          const translateY = -(scrollTop * depth);
          (layers[i] as HTMLElement).style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    if (parallaxRef.current) {
      parallaxRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (parallaxRef.current) {
        parallaxRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <ParallaxWrapperStyled ref={parallaxRef}>
      {React.Children.map(children, (child, index) => (
        <ParallaxLayerStyled key={index} className="parallax-layer" depth={(index + 1) * 50}>
          {child}
        </ParallaxLayerStyled>
      ))}
    </ParallaxWrapperStyled>
  );
};

export default Parallax;
