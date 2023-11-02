import { Button, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/system';
import heroImage from '../../assets/hero.jpg'


const Home = () => {
  return (
    <div>
      <StyledDiv>
        <Typography variant="h1">
          Base Fit
        </Typography>
        {/* <h1>Base Fit</h1> */}
        <h2>Where Fitness Becomes Your Lifestyle</h2>
        <Button>Book Now</Button>
      </StyledDiv>
      <div>
        <img src={heroImage} alt="pushup" />
        <img src={heroImage} alt="pushup" />
        <img src={heroImage} alt="pushup" />
      </div>
    </div>
  )
}


const StyledDiv = styled('div')({
  backgroundImage: 'url("/assets/hero.jpg")',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  height: "90vh",
})

export default Home;