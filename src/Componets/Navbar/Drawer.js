import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ListIcon from '@mui/icons-material/List';
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
 
          <ListItem button as={HashLink} to="/home#banner" key='Home'>
            <ListItemIcon>
            <WaterDamageIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

           <ListItem button as={HashLink} to="/home#project"key='Portfolio'>
           <ListItemIcon>
           <ImportContactsIcon/>
           </ListItemIcon>
           <ListItemText primary='Portfolio' />

         </ListItem>
          <ListItem button as={HashLink} to="/contact" key='Contact' className='d-flex'>
          <Link  as={HashLink} to="/contact" className='linkButton'>
          <ListItemIcon>
          <TurnedInNotIcon/>
          </ListItemIcon>
          <ListItemText primary='Contact' />
          </Link>
        </ListItem>
 
      </List>
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

