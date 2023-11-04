import { Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation();
  return (
    <StyledDiv>
      <div style={{color: 'var(--white)'}}>
        <p>{t('Hero.Title')}</p>
        <h1>{t('Hero.Content')}</h1>
        <Button>{t('Hero.ActionLabel')}</Button>
      </div>
    </StyledDiv>
  )
}


const StyledDiv = styled('div')({
  backgroundImage: 'url("/assets/hero.jpg")',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  height: "90vh",
});

export default Home;