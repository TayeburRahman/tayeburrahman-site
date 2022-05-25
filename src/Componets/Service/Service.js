import CastIcon from '@mui/icons-material/Cast';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import { Typography } from '@mui/material';
import React from 'react';
import service from "../../images/js-run.svg";
import learn from "../../images/learn-js-hero.svg";
import './Service.css';

function Service() {
    return (
        <div className='dGrid'>
           <div className="container dGrid ">
             <div className="portfolio-imgI d-flex mt-2 mb-2">
             <img src={service} width="100%" alt="" />
             </div>
             <Typography
               className="PortfolioHedtex mb-2"
               sx={{ fontFamily: "Monospace" }}
               component="h3"
               variant="h3"
             >
              What I do?
             </Typography> 
             <Typography className=' mb-4' variant="subtitle1" gutterBottom component="div">
                Below is a quick overview of my main technical skill sets and technologies I use. <br></br>
                 Want to find out more about my experience? Check out my online resume and project portfolio.
             </Typography>
          </div>
          <div className='container row mt-2 mb-5'>
            <div className='col-md-4 col-sm-6 col-lg-4  mt-2 mb-2'>
                <div className='p-3 cardDiv '>
                <CastIcon className='serviceIcon mt-2'/>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Business Strategy
                   </Typography>
                   <Typography variant="subtitle2" gutterBottom component="div">
                      I throw myself down among the tall grass by the stream as I lie close to the earth.
                   </Typography>
                </div>
            </div>
            <div className='col-md-4 mt-2 mb-2 col-sm-6 col-lg-4  mt-2 mb-2'>
                <div className='p-2 cardDiv'>
                <LanguageIcon className='serviceIcon mt-2'/>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Web Development
                   </Typography>
                   <Typography variant="subtitle2" gutterBottom component="div">
                   Ensure your vision for a perfect business website with a user-friendly design and appearance to catch emerging technologies and trends.                   </Typography>
                </div>
            </div>
            <div className='col-md-4 col-sm-6 mt-2 mb-2 col-lg-4  mt-2 mb-2'>
                <div className='p-2 cardDiv'>
                <PeopleAltIcon className='serviceIcon mt-2'/>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Marketing & Reporting
                   </Typography>
                   <Typography variant="subtitle2" gutterBottom component="div">
                   Marketing reporting is the process of gathering actionable data that help you to reach your goals.
                   </Typography>
                </div>
            </div>
            <div className='col-md-4 col-sm-6 col-lg-4  mt-2 mb-2'>
                <div className='p-2 cardDiv' >
                <TabletAndroidIcon className='serviceIcon mt-3 mb-1'/>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Mobile App Development
                   </Typography>
                   <Typography variant="subtitle2" gutterBottom component="div">
                   Start With Fully-Customizable Flutter Widgets To Develop Native Interfaces In Minutes.
                   </Typography>
                </div>
            </div>
            <div className='col-md-4 col-sm-6 col-lg-4  mt-2 mb-2'>
                <div className='p-2 cardDiv'>
                <SystemSecurityUpdateGoodIcon className='serviceIcon mt-3 '/>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Mobile-Optimised Website
                   </Typography>
                   <Typography variant="subtitle2" gutterBottom component="div">
                   A mobile optimized site is a far more advanced website. We make responsive website
                   </Typography>
                </div>
            </div>
            <div className='col-md-4 col-sm-6 col-lg-4  mt-2 mb-2'>
                <div className='p-2 cardDiv'>
                <ComputerIcon className='serviceIcon mt-3'/>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Membership System
                   </Typography>
                   <Typography variant="subtitle2" gutterBottom component="div">
                   Our Membership automates the management of membership within associations, organizations.
                   </Typography>
                </div>
            </div>
          </div>
          <img className='learnImage mb-5' src={learn} width="35%" alt="" />
        </div>
    )
}

export default Service
