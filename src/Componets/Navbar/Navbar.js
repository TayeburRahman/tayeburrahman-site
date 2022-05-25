import { Button, Link } from '@mui/material';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import OpenDrawer from './Drawer';
import './Navbars.css';

const Navbars = () => {
    const [focus, setFocuse] = useState(false)
    const onfocuse = () =>{
        setFocuse(true)
    }
    return (
        <div className='dashboardHeader'>
              <div className='dashboardHeader-div page__header'>
              
              <div className='d-flex p-1 header-left' style={{alignItems: 'center',width:'15%'}}>
                  <div className='OpenDrawer'>
                   <OpenDrawer/>
                  </div>
                  <img
                  className='logo'
                  src='https://i.ibb.co/nRVdYqR/logodevloper.png'
                  alt='up comming a new LOGO'
                  loading="lazy"
                  width='70%' 
                  />
            </div>
             <div className='page__header__auth header__link  gap-4'>
                 <Link className="ButtonHeder-m" as={HashLink} to="/home#banner"><button onMouseMove={onfocuse} className='ButtonHeder-m'>Home</button></Link>
                 <Link className="ButtonHeder-m" as={HashLink} to="/home#project"><button className="ButtonHeder-m">Portfolio</button> </Link>
                 <Link className="ButtonHeder-m" as={HashLink} to="/contact"><button className='ButtonHeder-m'>Contact</button></Link>
            </div>
         
            <div className='page__header__auth'> 
                  <Button variant=" " className='ButtonHeder-submit'>Let's Talk</Button>
            </div>
              </div>
        </div>
    );
};

export default Navbars;