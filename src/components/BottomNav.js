"use client"
import Link from "next/link";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function BottomNav() { 
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {[
            { text: 'Welcome page', href: '/' },
            { text: 'Career Interest Finder Assessment', href: '/assessment' },
            { text: 'Enter Scores', href: '/enter-scores' },
            { text: 'Career Interest Finder Results', href: '/assessment/results/career' },
            { text: 'Realistic Interest Information', href: '/assessment/results/realistic' },
            { text: 'Investigative Interest Information', href: '/assessment/results/investigative' },
            { text: 'Artistic Interest Information', href: '/assessment/results/artistic' },
            { text: 'Social Interest Information', href: '/assessment/results/social' },
            { text: 'Enterprising Interest Information', href: '/assessment/results/enterprising' },
            { text: 'Conventional Interest Information', href: '/assessment/results/conventional' },
            { text: 'Information About Job Zones', href: '/assessment/job-zones' },
            { text: 'Job Zone 3', href: '/assessment/job-zones/job-zone-3' },
            { text: 'Job Zone 4', href: '/assessment/job-zones/job-zone-4' },
            { text: 'Job Zone 5', href: '/assessment/job-zones/job-zone-5' }
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <Link href={item.href} passHref>
                <ListItemButton component="a">
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
              
                </ListItemButton>
              </Link>
            </ListItem>
            
          ))}
        </List>
      </Box>
    );
  
    return (
      <div>
         <div className="flex justify-center mt-10 ">
        <img className="w-[300px] h-[86px]" src="/assets/Logo.png"/>
        </div>
        <Button onClick={toggleDrawer(true)} className="bg-yellow-500 text-white hover:text-black">Click to test out routes</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        
      </div>
    );
}