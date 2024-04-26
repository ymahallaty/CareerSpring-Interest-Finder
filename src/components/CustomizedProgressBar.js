"use client";
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  width: '70%', // Set container width to fill its parent
  height: '40px', // Set container height to a fixed value or adjust as needed
  position : "fixed"
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '100%', // Set progress bar height to fill its container
  width: '100%', // Set progress bar width to fill its container
  borderRadius: 5,
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export default function CustomizedProgressBar({ value }) {
  return (
    <Container>
      <BorderLinearProgress variant="determinate" value={value} />
    </Container>
  );
}
