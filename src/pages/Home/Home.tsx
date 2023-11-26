import { useTheme } from '@mui/material/styles';
import { Button, Stack, Theme } from "@mui/material"
import { styled } from '@mui/system'
import media from '../../assets/resources/images/homeMediaPath.json'

import { useTranslation } from "react-i18next";
import { Hero, SplitScreen, LanguageSwitch, FullScreen } from "../../components";

interface Translation {
  Title: string,
  Content?: string,
  ActionLabel?: string
}

const Home = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const translations = Object.values(t("HomeSections", { returnObjects: true }) as Record<string, Translation>)
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
          <Stack sx={ImgWrapper({ imgPath: mediaUrl[0].Image, reverse: true, theme })} />
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
          <Video loop autoPlay muted>
            <source src={mediaUrl[1].Video} type="video/mp4" />
          </Video>
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
          <Stack sx={ParallaxWrapper({ imgPath: mediaUrl[2].Image, reverse: true, theme })} />
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
          <Stack sx={ImgWrapper({ imgPath: mediaUrl[4].Image, reverse: false, theme })} />
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
          <Stack sx={ParallaxWrapper({ imgPath: mediaUrl[5].Image, reverse: true, theme })} />
        }
      />
    </>
  )
}

const Wrapper = styled("div")(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'flex-start',

  [theme.breakpoints.up('sm')]: {
    padding: '1rem',
  },

}))

const Content = styled("p")({
  maxWidth: '30rem',
})

const Video = styled("video")({
  objectFit: "fill",
  width: '100%',
  height: '100%',
})

const ImgWrapper = ({
  imgPath,
  reverse,
  theme,
}: {
  imgPath: string,
  reverse: boolean,
  theme: Theme
}) => ({
  width: '100%',
  height: '100%',
  background: `url(${imgPath}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: reverse ? 'inherit' : 'right',

  [theme.breakpoints.down('lg')]: {
    backgroundSize: 'cover',
    backgroundAttachment : 'unset',
  },

  [theme.breakpoints.down('sm')]: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 0',
  },
})

const ParallaxWrapper = ({
  imgPath,
  reverse,
  theme,
}: {
  imgPath: string,
  reverse: boolean,
  theme: Theme
}) => ({
  width: '100%',
  height: '100%',
  background: `url(${imgPath}) no-repeat`,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: reverse ? 'inherit' : 'right',

  [theme.breakpoints.down('lg')]: {
    backgroundSize: 'cover',
    backgroundAttachment : 'unset',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
  },
})

export default Home;
