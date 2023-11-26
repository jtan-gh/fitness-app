import { styled } from '@mui/system';
import { Stack, Theme } from "@mui/material"
import { useTheme } from '@mui/material/styles';

interface Props {
  reverseOrder: boolean,
  component1: React.ReactElement,
  component2?: React.ReactElement,
}

const SplitScreen = (props: Props) => {
  const theme = useTheme()
  return (
    <Stack sx={Wrapper({ reverse: props.reverseOrder, theme })} >
      <SideOne>
        {props.component1}
      </SideOne>
      <SideTwo>
        {props.component2}
      </SideTwo>
    </Stack>
  )
}

const Wrapper = ({
  reverse,
  theme
}: {
  reverse: boolean,
  theme: Theme
}) => ({
  display: 'flex',
  flexDirection: reverse ? 'row-reverse' : 'row',
  minHeight: '40rem',
  perspective: '10px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
    paddingTop: '1rem',
    minHeight: 'auto',
  },
})

const SideOne = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'fit-content',
  width: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    alignItems: 'left',
    justifyContent: 'left',
  },
}))

const SideTwo = styled(SideOne)(({ theme }) => ({
  margin: 'unset',
  width: '50%',

  [theme.breakpoints.down('sm')]: {
    height:'60vw',
  },
}))

export default SplitScreen;
