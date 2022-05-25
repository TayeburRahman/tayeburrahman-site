import { Typography } from '@mui/material';
import React from 'react';
import ContactEmail from './Conatact.Email';


function Contact() {
    return (
        <div className='contactPage'>
             <div className='dGrid'>
             <div className='w-70 p-4'>
                 <Typography
                   className="mb-4"
                   sx={{ fontFamily: "Monospace",color:'white', fontWeight:'700' }}
                   component="h4"
                   variant="h4"
                 >
                   Contact
                 </Typography> 
                 <Typography variant="subtitle1" gutterBottom component="div">
                 Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <span style={{color:'rgb(71 71 82)', fontWeight:'500'}}>tayebrayhan101@gmail.com</span>
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom component="div">
                     Want to get connected? Follow me on the social channels below.
                 </Typography>
            </div>
             </div>
            <div>
                <ContactEmail></ContactEmail>
            </div>
        </div>
    )
}

export default Contact
