"use client";
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  width: '70%', // Set container width to fill its parent
  height: '40px', // Set container height to a fixed value or adjust as needed
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '100%', // Set progress bar height to fill its container
  width: '100%', // Set progress bar width to fill its container
  borderRadius: '30px',
  backgroundColor:'white',
  border:'2px solid black', 

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    border: '10px solid white',
    borderRadius: '30px', 
    zIndex: 1, 
  },
  
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: '30px',
    margin: '9px',
    backgroundColor: '#ff9e1b', // Set background color to yellow
  },
}));

export default function CustomizedProgressBar({ value }) {
  return (
    <Container>
      <BorderLinearProgress variant="determinate" value={value} />
    </Container>
  );
}
