import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

interface EmailSubscribeFormProps {
  onSubscribe: (email: string) => void;
}

const EmailSubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add your subscription logic here, e.g., call onSubscribe callback
    console.log(email);
  };

  return (
    <Wrapper>
      <TextField
        label="Enter email here"
        size='small'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubscribe} variant='white' size='small'>Register</Button>
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  gap: '1rem',

  '.MuiInputBase-root' : {
    padding: '0 !important',
  }
})

export default EmailSubscribeForm;
