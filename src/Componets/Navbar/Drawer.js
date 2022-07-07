import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LayersIcon from '@mui/icons-material/Layers';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function OpenDrawer() {
  const [state, setState] = React.useState({
    left: false, 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      className='backgroundDower'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List> 
          <ListItem button as={HashLink} to="/home#banner" key='Home'>
            <ListItemIcon className='colorWhite'>
            <WaterDamageIcon  className='ColorMain'/>
            </ListItemIcon>
            <ListItemText className='colorWhite' primary="Home" />
          </ListItem>
          <ListItem button as={HashLink} to="/home#about" key='Home'>
            <ListItemIcon className='colorWhite'>
            <PersonIcon className='ColorMain'/>
            </ListItemIcon>
            <ListItemText className='colorWhite' primary="About" />
          </ListItem> 
           <ListItem className='colorWhite' button as={HashLink} to="/home#project"key='Portfolio'>
           <ListItemIcon className='colorWhite'>
           <ImportContactsIcon  className='ColorMain' />
           </ListItemIcon>
           <ListItemText className='colorWhite' primary='Portfolio' />
         </ListItem>
         <ListItem button as={HashLink} to="/home#banner" key='Home'>
            <ListItemIcon className='colorWhite'>
            <LayersIcon  className='ColorMain'/>
            </ListItemIcon>
            <ListItemText className='colorWhite' primary="Blog" />
          </ListItem>
          <ListItem button as={HashLink} to="/home#blog" key='Contact' className='d-flex'>
          <Link as={HashLink} to="/home#blog" className='linkButton'>
          <ListItemIcon>
          <TurnedInNotIcon  className='ColorMain' />
          </ListItemIcon >
          <ListItemText  className='colorWhite' primary='Contact' />
          </Link>
        </ListItem> 
      </List>
      <div className='footerIcon bottomNav mb-2 p-4'>
         <Link href='https://www.facebook.com/tayeb.rayhan/' className='footerIconLink'> <FacebookIcon/> </Link>
         <Link href='https://github.com/TayeburRahman' className='footerIconLink'> <GitHubIcon/></Link>
         <Link href="https://www.linkedin.com/in/md-tayebur-rahman-rayhan-95025b1b8/" className='footerIconLink'> <LinkedInIcon/> </Link> 
      </div>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='drawerIcon' onClick={toggleDrawer(anchor, true)}><ListIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

