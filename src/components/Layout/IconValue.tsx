import { styled } from '@mui/material/styles';

interface props {
  icon: React.ReactElement,
  label: string,
}

const IconValue = (Props: props) => {
  return (
    <Wrapper>
      {Props.icon}
      <p>{Props.label}</p>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
})

export default IconValue;
