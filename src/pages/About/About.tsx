import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../themes/theme';
import trainerResources from '../../assets/resources/images/trainers.json'

const AboutUs = () => {
  const { t } = useTranslation();

  const about = t('aboutUs', { returnObjects: true }) as {
    title: string;
    summary: string;
  };
  const trainers = t('trainers.list', { returnObjects: true }) as {
    name: string;
    specialty: string;
    greeting: string;
  }[];

  const trainerImagesURL = trainerResources.trainerImagesURL;

  return (
    <AboutWrapper>
      <Box sx={{ width: '100%', maxWidth: theme.breakpoints.values.lg, display: 'flex', flexDirection: 'column' }}>
        <h2>{about.title}</h2>
        <Typography variant="body1">{about.summary}</Typography>

        <ImageGrid>
          <Box
            sx={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA81QpVL1Res0qXX75vcs2e4-UH35oagmFiinwo4cQq5xdTNKq6CsQV9cUrOsK-0mMV77FWx51Kc5q42Sd57QcXD3DbgayzacCNjfklRYhqFrccC3q5SYpZc-L2kJWPtQ-tpG86GMZaEiaYAaEQBR1BZ-cltpoQgxnOPnqs8sb3EfpG4lb_lEr_HeoQxDxZcC9-nqobWbAZb_jh6YTieQj9Fy6UTjJ1lrGGvcFKQdyCidLvDPUYoEC90w3MWzekinu8BSuLukAJ0WkY")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              gridRow: '1 / span 2',
            }}
          />
          <Box
            sx={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY5LmuqviRZgH73X5ARyTEb2YRoaDbMVOnxn9m99bHxQRJhK3lODFqyiczXLtWOyu75gLTv31HIl5H3VTyVGN6WsbE-aarXmWWZf_0jEtqQC5LU-iD1VhrDsAMnF2tV_r1n0IDOXYGTW6ipFFMq79_lxAFy6pvfe4EfFT-CZBbQwHxvuIMWtWekCMP-Av4vwILiOHoplTytoDlwfrge1frTJ1cRw4NH012i-puAMfcp7YJBdtqA3YeNQwgkdLEo4VEX8Te8mC7qb0p")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              gridColumn: '2 / span 2',
            }}
          />
          <Box
            sx={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCLYmbIzfVTbj-IWZ-fpMV3qZ0nueqTz7urvnolOwEYW8PWunrCgNBBjWV9dOzxIlLLnUc8QqM0QA2lNoqPMHmCJr7d3TrO2tmcOnRhLVnIPoxdPHRAplmr6STLjHCvqCZ65sxRxmeWyFKHrH4mhZiEuTvLwm7kRuMGqCKJZ-E2GyyLgpHxqcxycxchwtnnyE5Up49kC1mqP5U48yij6e5Me9xq55t5T6D_4ZebFTgRjNUA9e468zeQ4nh4eelIeYpQAvKVR9QPKW8")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              gridColumn: '2 / span 2',
            }}
          />
        </ImageGrid>

        <Typography variant="h4" sx={{ px: 2, pt: 4, pb: 2 }}>
          Trainers
        </Typography>

        <TrainerGrid>
          {trainers.map((trainer, index) => (
            <TrainerCard key={index}>
              <TrainerImage src={trainerImagesURL[index].url} alt={trainer.name}  />
              <Typography variant="body1" fontWeight="medium">
                {trainer.name}
              </Typography>
              <Typography variant="body2">{trainer.greeting}</Typography>
            </TrainerCard>
          ))}
        </TrainerGrid>
      </Box>
    </AboutWrapper>
  );
};

export default AboutUs;


const AboutWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.customColors.neutralWhite,
  color: theme.customColors.neutralBlack,
}));

const ImageGrid = styled(Box)(() => ({
  width: '100%',
  padding: theme.spacing(2),
  backgroundColor: theme.customColors.neutralBlack,
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gridTemplateRows: 'auto auto',
  gap: theme.spacing(10),
  aspectRatio: '3 / 2',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
}));

const TrainerGrid = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(158px, 1fr))',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));

const TrainerCard = styled(Box)(() => ({
  textAlign: 'center',
  paddingBottom: theme.spacing(3),
}));

const TrainerImage = styled('img')(() => ({
  width: 200,
  height: 300,
  objectFit: 'cover',
  marginInline: 'auto',
  marginBottom: theme.spacing(2),
}));