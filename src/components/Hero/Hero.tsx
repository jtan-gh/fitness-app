import { Button } from "@mui/material";
import { styled } from '@mui/system';

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CenterContent>
        <h1>{t('Hero.Title')}</h1>
        <h2>{t('Hero.Content')}</h2>
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

const CenterContent = styled('div')({
  padding: 'inherit',
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  '& h1, & h2': {
    color: 'var(--white)',
  },
});

export default Hero;