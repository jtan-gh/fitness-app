import {
  Button,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { IconValue, EmailSubscribeForm } from "../../components";

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Section>
        <h3>{t("Contact.Title")}</h3>
        <IconValue
          icon={<MapOutlinedIcon style={{ color: 'white' }} />}
          label={t("Contact.Location")}
        />
        <IconValue
          icon={<LocalPhoneOutlinedIcon style={{ color: 'white' }} />}
          label={t("Contact.Phone")}
        />
        <IconValue
          icon={<EmailOutlinedIcon style={{ color: 'white' }} />}
          label={t("Contact.Email")}
        />
      </Section>
      <Section>
        <h3>{t("Email Subscription.Title")}</h3>
        <p>{t("Email Subscription.Content")}</p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <p>{t("Email Subscription.Email")}</p>
          <EmailSubscribeForm />
        </div>
      </Section>
      <Section>
        <h3>{t("Media.Title")}</h3>
        <ul>
          <li>
            <IconValue
              icon={<FacebookOutlinedIcon style={{ color: 'white' }} />}
              label={t("Media.Facebook")}
            />
          </li>
          <li>
            <IconValue
              icon={<InstagramIcon style={{ color: 'white' }} />}
              label={t("Media.Instagram")}
            />
          </li>
          <li>
            <IconValue
              icon={<YouTubeIcon style={{ color: 'white' }} />}
              label={t("Media.Youtube")}
            />
          </li>
        </ul>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  justifyItems: 'center',
  alignItems: 'start',
  padding: '2.5rem',
  height: "max-content",
  backgroundColor: "rgb(129, 36, 148)",

  "& h1, & h2, & h3, & h4, & h5, & h6, & p, & ul": {
    color: 'var(--neutralWhite)',
  },
  "ul": {
    padding: 0,
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'flex',
      gap: '1rem',
      width: '100%',
      maxWidth: 'unset',
    },
  },
  "li": {
    listStyleType: 'none',
    listStylePosition: 'inside',
    margin: "1rem 0",
  },

  [theme.breakpoints.between('sm', 'md')]: {
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    "& > div:nth-child(1)": {
      gridColumn: 1,
      gridRow: 1,
    },
    "& > div:nth-child(2)": {
      gridColumn: 2,
      gridRow: 1,
    },
    "& > div:nth-child(3)": {
      gridColumn: '1 / span 2',
      gridRow: 2,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}))

const Section = styled('div')(({ theme }) => ({
  "> *": {
    marginBottom: "1.5rem"
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '50ch',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: 'unset',
  },
}))

export default Footer;
