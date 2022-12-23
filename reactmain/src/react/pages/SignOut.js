import React from 'react'
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

const SignOut = () => {
  return (
    <StyledContainer maxWidth='md'>
      <p>
        You have signed out.
      </p>
    </StyledContainer>
  );
}

export default SignOut;