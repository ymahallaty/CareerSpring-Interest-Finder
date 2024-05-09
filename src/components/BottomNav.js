// "use client";
// import Link from "next/link";


// export default function BottomNav() {

//     return (
//         <>
//             <h1>Click the number underneath the circle to test out routes.</h1>
//             <div className="overflow-x-auto">
//                 <ul className="steps">
//                     <li className="step underline"><Link href="/welcome">Career Interest Finder Assessment</Link></li>
//                     <li className="step underline"><Link href="/assessment">Career Interest Finder Assessment Survey</Link></li>
//                     <li className="step underline"><Link href="/enter-scores">Enter Scores</Link></li>
//                     <li className="step underline"><Link href="/ending">Survey End</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/career">Career Interest Finder Results</Link></li>

//                     <li className="step underline"><Link href="/user-agreement">User Agreement</Link></li>

//                     <li className="step underline"><Link href="/assessment/results/realistic">Realistic Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/investigative">Investigative Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/artistic">Artistic Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/social">Social Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/enterprising">Enterprising Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/conventional">Conventional Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones">Information About Job Zones</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones/job-zone-3">Job Zone 3</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones/job-zone-4">Job Zone 4</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones/job-zone-5">Job Zone 5</Link></li>
//                 </ul>
//             </div>
//         </>
//     )
// }

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


// //routes are named in alphabetical order to make them easy to search for now. Will update
// //when we know what each route will be for
// export default function BottomNav() {
//     return (
//         <>
//         <h1>Click the number underneath the circle to test out routes.</h1>
//             <div className="overflow-x-auto">
        
//                 <ul className="steps">
//                     <li className="step underline"><Link href="/assessment">Career Interest Finder Assessment</Link></li>
//                     <li className="step underline"><Link href="/enter-scores">Enter Scores</Link></li>
//                     <li className="step underline"><Link href="/assessment/results">Career Interest Finder Results</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/realistic">Realistic Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/investigative">Investigative Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/artistic">Artistic Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/social">Social Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/enterprising">Enterprising Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/results/conventional">Conventional Interest Information</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones">Information About Job Zones</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones/job-zone-3">Job Zone 3</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones/job-zone-4">Job Zone 4</Link></li>
//                     <li className="step underline"><Link href="/assessment/job-zones/job-zone-5">Job Zone 5</Link></li>
//                 </ul>
//             </div>
//         </>
//     )
// }

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
        <Button onClick={toggleDrawer(true)} className="bg-yellow-500 text-white hover:text-black">Click to test out routes</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
}