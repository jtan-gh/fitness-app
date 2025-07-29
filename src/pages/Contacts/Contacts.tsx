import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  const contact = t('contact', { returnObjects: true }) as {
    mapTitle: string;
    visitUs: string;
    address: string;
    businessHoursTitle: string;
    hours: Record<string, string>;
    contactUs: string;
    yourEmail: string;
    yourQuestion: string;
    send: string;
    referTitle: string;
    referDescription: string;
    referButton: string;
  };

  return (
    <PageWrapper>
      <ContainerBox>
        <TopSection>
          <MapBox>
            <iframe
              title={contact.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2604.9797847745876!2d-123.05862692318877!3d49.238872473855054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDE0JzE5LjkiTiAxMjPCsDAzJzIxLjgiVw!5e0!3m2!1sen!2sca!4v1753591138510!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </MapBox>

          <InfoBox>
            <Typography variant="h3" gutterBottom>
              {contact.visitUs}
            </Typography>
            <Typography variant="body1">{contact.address}</Typography>

            <Box>
              <Typography variant="h3" gutterBottom>
                {contact.businessHoursTitle}
              </Typography>
              {Object.values(contact.hours).map((hour, idx) => (
                <Typography key={idx} variant="body2">
                  {hour}
                </Typography>
              ))}
            </Box>
          </InfoBox>
        </TopSection>

        <BottomSection>
          <FormBox>
            <Typography variant="h6" gutterBottom>
              {contact.contactUs}
            </Typography>

            <TextField
              label={contact.yourEmail}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label={contact.yourQuestion}
              variant="outlined"
              fullWidth
              multiline
              margin="normal"
              sx={{
                flexGrow: 1,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
                '& .MuiInputBase-root': {
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                },
                '& textarea': {
                  flexGrow: 1,
                  height: 'auto !important',
                  overflow: 'auto',
                },
              }}
            />

            <Button variant="contained" color="primary" sx={{ mt: 2, width: 'unset' }}>
              {contact.send}
            </Button>
          </FormBox>

          <ReferBox>
            <Typography variant="h6" gutterBottom>
              {contact.referTitle}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {contact.referDescription}
            </Typography>
            <Button variant="contained" color="secondary">
              {contact.referButton}
            </Button>
          </ReferBox>
        </BottomSection>
      </ContainerBox>
    </PageWrapper>
  );
};

export default ContactPage;


const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.customColors?.neutralWhite ?? '#fff',
  display: 'flex',
  justifyContent: 'center',
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
}));

const TopSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '7fr 3fr',
  gap: theme.spacing(4),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const MapBox = styled(Box)(() => ({
  flex: 1,
  maxWidth: 800,
  height: 600,
  borderRadius: 12,
  overflow: 'hidden',
}));

const InfoBox = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 280,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}));

const BottomSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(10),
}));

const FormBox = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 300,
  display: 'flex',
  flexDirection: 'column',
}));

const ReferBox = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 280,
  minHeight: 560,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: 16,
  padding: theme.spacing(3),
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
