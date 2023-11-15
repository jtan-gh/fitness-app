import { Button, Typography } from "@mui/material"
import { styled } from '@mui/system'
import media from '../../assets/resources/images/homeMediaPath.json'


import { useTranslation } from "react-i18next";
import { Hero, SplitScreen, LanguageSwitch, FullScreen, Parallax } from "../../components";


interface Translation {
  Title: string,
  Content?: string,
  ActionLabel?: string
}

const Home = () => {
  const { t } = useTranslation();
  const translations = Object.values(t("HomeSections", { returnObjects: true }) as Record<string, Translation>)
  console.log(Object.values(t("HomeSections", { returnObjects: true })))
  const mediaUrl = media.HomeSections

  return (
    <>
      <LanguageSwitch />
      <Hero />

      <SplitScreen
        reverseOrder={true}
        component1={
          <Wrapper>
            <h2>{translations[0]["Title"]}</h2>
            {translations[0]["Content"] && <Content>{translations["0"]["Content"]}</Content>}
            {translations[0]["ActionLabel"] && <Button size="medium" variant="contained">{translations["0"]["ActionLabel"]}</Button>}
          </Wrapper>
        }
        component2={
          <ImgWrapper imgPath={mediaUrl[0].Image} reverse={true} />
        }
      />

      <SplitScreen
        reverseOrder={false}
        component1={
          <Wrapper>
            <h2>{translations[1]["Title"]}</h2>
            {translations[1]["Content"] && <Content>{translations[1]["Content"]}</Content>}
            {translations[1]["ActionLabel"] && <Button size="medium" variant="contained">{translations[1]["ActionLabel"]}</Button>}
          </Wrapper>
        }
        component2={
          <video style={{ objectFit: "fill" }} width="100%" height="100%" loop autoPlay muted>
            <source src={mediaUrl[1].Video} type="video/mp4" />
          </video>
        }
      />

      <SplitScreen
        reverseOrder={true}
        component1={
          <Wrapper>
            <h2>{translations[2]["Title"]}</h2>
            {translations[2]["Content"] && <Content>{translations[2]["Content"]}</Content>}
            {translations[2]["ActionLabel"] && <Button size="medium" variant="contained">{translations[2]["ActionLabel"]}</Button>}
          </Wrapper>
        }
        component2={
          <ImgWrapper imgPath={mediaUrl[2].Image} reverse={true} />
        }
      />

      <FullScreen content={<h2>{translations[3]["Title"]}</h2>} />

      <SplitScreen reverseOrder={false} component1={
        <Wrapper>
          <h2>{translations[4]["Title"]}</h2>
          {translations[4]["Content"] && <Content>{translations[4]["Content"]}</Content>}
          {translations[4]["ActionLabel"] && <Button size="medium" variant="contained">{translations[4]["ActionLabel"]}</Button>}
        </Wrapper>
      }
        component2={
          <ImgWrapper imgPath={mediaUrl[4].Image} reverse={false} />
        }
      />

      <SplitScreen reverseOrder={true} component1={
        <Wrapper>
          <h2>{translations[5]["Title"]}</h2>
          {translations[5]["Content"] && <Content>{translations[5]["Content"]}</Content>}
          {translations[5]["ActionLabel"] && <Button size="medium" variant="contained">{translations[5]["ActionLabel"]}</Button>}
        </Wrapper>
      }
        component2={
          <ImgWrapper imgPath={mediaUrl[5].Image} reverse={true} />
        }
      />
    </>
  )
}

const Wrapper = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'flex-start',
})

const Content = styled("p")({
  maxWidth: '30rem',
})

const ImgWrapper = styled("div")<{ imgPath: string, reverse: boolean }>(
  ({ imgPath, reverse }) => ({
    width: '100%',
    height: '100%',
    background: `url(${imgPath}) no-repeat`,
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed',
    backgroundPosition: reverse ? 'inherit' : 'right',
    overflow: 'hidden',
  })
);

export default Home;