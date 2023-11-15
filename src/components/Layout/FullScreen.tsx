import { Button } from "@mui/material";
import { styled } from '@mui/system';
import { reverse } from "dns";
import { ReactElement } from "react";

interface Props {
  content: React.ReactElement,
}

const FullScreen = (props : Props) => {
  return (
    <Wrapper>
      {props.content}
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '30vh',
});

export default FullScreen;
