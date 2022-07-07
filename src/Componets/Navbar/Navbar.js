import { Button, Link } from '@mui/material';
import React, { useState } from 'react';
import {
    AiFillStar
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { HashLink } from 'react-router-hash-link';
import OpenDrawer from './Drawer';
import './Navbars.css';



const Navbars = () => {
    const [focus, setFocuse] = useState(false)
    const onfocuse = () =>{
        setFocuse(true)
    }
    return (
        <div className='dashboardHeader' data-aos="fade-zoom-in">
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
                 <Link className="ButtonHeder-m" as={HashLink} to="/home#about"><button className="ButtonHeder-m">About</button> </Link>
                 <Link className="ButtonHeder-m" as={HashLink} to="/home#project"><button className="ButtonHeder-m">Portfolio</button> </Link>
                 <Link className="ButtonHeder-m" as={HashLink} to="/home#blog"><button className="ButtonHeder-m">Blog</button> </Link>
                 <Link className="ButtonHeder-m" as={HashLink} to="/home#contact"><button className='ButtonHeder-m'>Contact</button></Link>
            </div>
         
            <div className='page__header__auth'> 
            <Link href='https://github.com/TayeburRahman'>                  
              <Button className='ButtonHeder-submit'><CgGitFork style={{fontSize:"23px"}} /><AiFillStar style={{fontSize:"20px"}} /></Button>
            </Link>
             </div>
              </div>
        </div>
    );
};

export default Navbars;