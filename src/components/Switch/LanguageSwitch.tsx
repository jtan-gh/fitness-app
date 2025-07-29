import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Wrapper>
      <LanguageLink
        onClick={() => changeLanguage('en')}
        selected={currentLang === 'en'}
      >
        English
      </LanguageLink>
      <LanguageLink
        onClick={() => changeLanguage('fr')}
        selected={currentLang === 'fr'}
      >
        French
      </LanguageLink>
    </Wrapper>
  );
};

export default LanguageSwitch;

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  alignItems: 'center',
  padding: theme.spacing(1),
  // width: '100%',
}));

const LanguageLink = styled('span')<{ selected?: boolean }>(({ theme, selected }) => ({
  cursor: 'pointer',
  fontWeight: selected ? 700 : 400,
  textDecoration: selected ? 'underline' : 'none',
  transition: 'color 0.2s ease',
  padding: `${theme.spacing(1)} ${theme.spacing(5)}`,

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));