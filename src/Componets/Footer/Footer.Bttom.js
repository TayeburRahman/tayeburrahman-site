import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';

function FooterBttom() {
    return (
        <div className='footerBottom'>
            <div>
             <div className='pt-4 pb-2'>
             <div>
                 <Typography variant="subtitle2" gutterBottom >
                   FIND ME ON
                 </Typography><Typography variant="subtitle2" gutterBottom >
                  Feel free to connect with me
                 </Typography>
             </div> 
              <div className='footerIcon mb-2'>
                 <Link href='https://www.facebook.com/tayeb.rayhan/' className='footerIconLink'> <FacebookIcon/> </Link>
                 <Link href='https://github.com/TayeburRahman' className='footerIconLink'> <GitHubIcon/></Link>
                 <Link href="https://www.linkedin.com/in/md-tayebur-rahman-rayhan-95025b1b8/" className='footerIconLink'> <LinkedInIcon/> </Link> 
             </div>
             </div>
             <div className='container'>
              <hr/>
              </div>
            <div className='footerBottomText p-2'>
            <Typography variant="subtitle2" gutterBottom style={{color:'#ffefd0'}}>
             <span style={{color:'#5d5df0eb'}}>Copyright © 2021</span> Programmer Tayebur Rahman All Rights Reserved.
           </Typography>
            </div>
            </div>
        </div>
    )
}

export default FooterBttom
