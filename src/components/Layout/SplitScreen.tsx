import { styled } from '@mui/system';

interface Props {
  reverseOrder: boolean,
  component1: React.ReactElement,
  component2?: React.ReactElement,
}

const SplitScreen = (props: Props) => {
  return (
    <Wrapper reverse={props.reverseOrder}>
      <SideOne>
        {props.component1}
      </SideOne>
      <SideTwo>
        {props.component2}
      </SideTwo>
    </Wrapper>
  )
}


const Wrapper = styled('div')<{ reverse: boolean }>(
  ({ reverse }) => ({
    display: 'flex',
    flexDirection: reverse ? 'row-reverse' : 'row',
    minHeight: '40rem',
    perspective: '10px',
  })
);

const SideOne = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
});

const SideTwo = styled(SideOne)({
  margin: 'unset',
  width: '50%',
});

export default SplitScreen;
