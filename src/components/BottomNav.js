"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from "next/link";

export default function BottomNav() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>

<Box sx={{ flexGrow: 1 }}>
      <AppBar className="navBar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Career Spring
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>




        <h1>Click the number underneath the circle to test out routes.</h1>
            <div className="overflow-x-auto">
                <ul className="steps">
                    <li className="step underline"><Link href="/welcome">Career Interest Finder Assessment</Link></li>
                    <li className="step underline"><Link href="/enter-scores">Enter Scores</Link></li>
                    <li className="step underline"><Link href="/ending">Survey End</Link></li>
                    <li className="step underline"><Link href="/assessment/results/career">Career Interest Finder Results</Link></li>

                    <li className="step underline"><Link href="/user-agreement">User Agreement</Link></li>
                   
                    <li className="step underline"><Link href="/assessment/results/realistic">Realistic Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/investigative">Investigative Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/artistic">Artistic Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/social">Social Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/enterprising">Enterprising Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/conventional">Conventional Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones">Information About Job Zones</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones/job-zone-3">Job Zone 3</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones/job-zone-4">Job Zone 4</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones/job-zone-5">Job Zone 5</Link></li>
                </ul>
            </div>
        </>
    )
}