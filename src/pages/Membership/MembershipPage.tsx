import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

export default function MembershipPage() {
  const { t } = useTranslation();
  const content = t('membership', { returnObjects: true }) as {
    sectionTitle: string;
    choosePlan: string;
    getQuote: string;
    plans: {
      name: string;
      price: string;
      features: string[];
    }[];
    coursesTitle: string;
    courses: {
      title: string;
      image: string;
    }[];
  };

  return (
    <Container>
      <Content>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={3} p={2}>
          <Typography variant='h2'>{content.sectionTitle}</Typography>
        </Box>

        <PlanWrapper>
          <PlanGrid>
            {content.plans.map((plan) => (
              <PlanCard key={plan.name}>
                <Box>
                  <PlanTitle>{plan.name}</PlanTitle>
                  <PlanPrice>{plan.price}</PlanPrice>
                  <FeatureList>
                    {plan.features.map((feature, i) => (
                      <FeatureItem key={i}>• {feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </Box>
                <Button variant="contained" fullWidth>
                  {content.choosePlan}
                </Button>
              </PlanCard>
            ))}
          </PlanGrid>
        </PlanWrapper>

        <Typography variant='h2'>{content.coursesTitle}</Typography>

        <CoursesGrid>
          {content.courses.slice(0, 2).map((course) => (
            <CourseCard key={course.title} image={course.image}>
              <Typography color="white" fontSize={16} fontWeight="bold" width="80%">
                {course.title}
              </Typography>
            </CourseCard>
          ))}
        </CoursesGrid>

        <CoursesGrid>
          {content.courses.slice(2).map((course) => (
            <CourseCard key={course.title} image={course.image}>
              <Typography color="white" fontSize={16} fontWeight="bold" width="80%">
                {course.title}
              </Typography>
            </CourseCard>
          ))}
        </CoursesGrid>

        <Box display="flex" justifyContent="center" px={4} py={3}>
          <Button size='medium' variant='contained'>
            {content.getQuote}
          </Button>
        </Box>
      </Content>
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 10),
  display: 'flex',
  justifyContent: 'center',
}));

const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: theme.breakpoints.values.lg,
  width: '100%',
}));

const PlanWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  width: '100%',
  backgroundColor: theme.palette.background.default,
  margin: '0 auto',
}));

const PlanGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const PlanCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 320,
  border: `1px solid ${theme.palette.divider}`,
}));

const PlanTitle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  padding: 0,
  textAlign: 'center',
}));

const PlanPrice = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 800,
  marginBottom: theme.spacing(2),
}));

const FeatureList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const FeatureItem = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  padding: `${theme.spacing(2)} 0`,
  color: theme.palette.text.secondary,
}));

const CoursesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(158px, 1fr))',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));

const CourseCard = styled(Box)<{ image: string }>(({ theme, image }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  aspectRatio: '1',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `
    linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0)),
    url(${image})
  `,
}));