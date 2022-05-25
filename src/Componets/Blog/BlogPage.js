import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotesIcon from '@mui/icons-material/Notes';
import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './BlogPage.css';

function BlogPage() {
    return (
        <div>
            <div className="dGrid pt-4 mb-3">
             <div className="portfolio-imgI d-flex mt-2 mb-2">
             <img src='https://i.ibb.co/47SrgXQ/Popular-social-media-Blogger-logo-on-transparent-PNG-removebg-preview.png' width="100%" alt="" />
             </div>
             <Typography
               className="PortfolioHedtex mb-2"
               sx={{ fontFamily: "Monospace" }}
               component="h3"
               variant="h3"
             >
              Blog Post
             </Typography> 
             <Typography className=' mb-4' variant="subtitle1" gutterBottom component="div">
               A Blog About Web Digine & Development And Life 
             </Typography>
            </div>
         <div className='d-grid mb-5' style={{justifyItems: 'center'}}>
          <div className='white95 row'>
              <div className='col-sm-6 col-md-3 col-lg-3 mt-2'>
              <Card className="boxShawdo" id='boxShawdo' sx={{ maxWidth: 345, padding: 0 }}> 
               <CardActionArea  className='textLeft '>
               <Link className='colorComo' href="https://blogs.soumya-jit.tech/">
                 <CardMedia 
                   component="img"
                   height="160"
                   width='100%'
                   image='https://i.ibb.co/j8fSpyP/blog-post-thumb-card-4.jpg'
                   alt="green iguana"
                 />
                 <CardContent>
                     <Box className="d-flex colorComo">
                         <NotesIcon className='BlogIcon'></NotesIcon>
                         <Typography variant="caption" display="block" gutterBottom>
                           February 1, 2022
                         </Typography>
                     </Box>
                   <Typography className='namePotfolio colorComo' gutterBottom variant="h6" component="div">
                   High Performance JavaScript
                   </Typography>
                   <Typography className='colorComo' variant="body2"  >
                   JavaScript is used by almost every website on the internet, so I embarked on a quest to find the best active JavaScript blogs. Each of these sites demonstrates technical expertise, is relatively easy to comprehend, publishes content consistently, and has stood the test of time.
                   </Typography>
                   <Link className="Readtheblog colorComo"  href='https://www.github.com'>Read the blog <ArrowForwardIcon className='ArrowForwardIcon'/></Link>
                 </CardContent>
                 </Link>
               </CardActionArea> 
                
             </Card>
              </div>
              <div className='col-sm-6 col-md-3 col-lg-3 mt-2'>
              <Card className="boxShawdo" id='boxShawdo' sx={{ maxWidth: 345, padding: 0 }}>
               <CardActionArea className='textLeft'>
               <Link className='colorComo' href="https://blogs.soumya-jit.tech/">
                 <CardMedia 
                   component="img"
                   height="160"
                   width='100%'
                   image='https://i.ibb.co/8NK3BMT/blog-post-thumb-card-5.jpg'
                   alt="green iguana"
                 />
                 <CardContent>
                     <Box className="d-flex">
                         <NotesIcon className='BlogIcon'></NotesIcon>
                         <Typography variant="caption" display="block" gutterBottom>
                           November 15, 2021
                         </Typography>
                     </Box>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                    The Famous JavaScript library React JS  
                   </Typography>
                   <Typography variant="body2"  >
                   Reactjs is an open-source JavaScript library used for building the Awesome User Interface for the website.ReactJS is famous for Declarative,component-based, and Learn Once, Write Anywhere in code.And Callback function will retrieve the data from the child component.                  
                    </Typography>
                   <Link className="Readtheblog"  href='https://www.github.com'>Read the blog <ArrowForwardIcon className='ArrowForwardIcon'/></Link>
                 </CardContent>
                 </Link>
               </CardActionArea> 
             </Card>
              </div>
              <div className='col-sm-6 col-md-3 col-lg-3 mt-2'>
              <Card className="boxShawdo" id='boxShawdo' sx={{ maxWidth: 345, padding: 0 }}>
               <CardActionArea className='textLeft'>
               <Link className='colorComo' href="https://blogs.soumya-jit.tech/">
                 <CardMedia 
                   component="img"
                   height="160"
                   width='100%'
                   image='https://i.ibb.co/NNBMvYZ/download.jpg'
                   alt="green iguana"
                 />
                 <CardContent>
                     <Box className="d-flex">
                         <NotesIcon className='BlogIcon'></NotesIcon>
                         <Typography variant="caption" display="block" gutterBottom>
                           October 11, 2021
                         </Typography>
                     </Box>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Highlights of Node.js Features
                   </Typography>
                   <Typography variant="body2">
                   Node.js 16 introduces version 9 of the V8 JavaScript Engine with Node Js 16. This version takes the place of V8 8.6 in Node.js 15. Initially, V8 has introduced a variety of new and unique features along with excellent performance enhancements between two consecutive releases.
                    </Typography>
                     
                   <Link className="Readtheblog"  href='https://www.github.com'>Read the blog <ArrowForwardIcon className='ArrowForwardIcon'/></Link>
                 </CardContent>
                 </Link>
               </CardActionArea> 
             </Card>
              </div>
              <div className='col-sm-6 col-md-3 col-lg-3 mt-2'>
              <Card className="boxShawdo" id='boxShawdo' sx={{ maxWidth: 345, padding: 0 }}>
               <CardActionArea className='textLeft'>
               <Link className='colorComo' href="https://blogs.soumya-jit.tech/">
                 <CardMedia 
                   component="img"
                   height="160"
                   width='100%'
                   image='https://i.ibb.co/H7XX9Cq/images-4.png'
                   alt="green iguana"
                 />
                 <CardContent>
                     <Box className="d-flex">
                         <NotesIcon className='BlogIcon'></NotesIcon>
                         <Typography variant="caption" display="block" gutterBottom>
                           August 30, 2021
                         </Typography>
                     </Box>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                   Firebase Realtime Database
                   </Typography>
                   <Typography variant="body2"  >
                     Firebase history is quite fascinating, and as many startups has a lot of ups and downs. It originated from Envolve, a startup company established in 2011 by Andrew Lee and James Tamplin. The company offered an API for developers to facilitate online chat integration for websites.
                     </Typography>
                   <Link className="Readtheblog"  href='https://www.github.com'>Read the blog <ArrowForwardIcon className='ArrowForwardIcon'/></Link>
                 </CardContent>
                 </Link>
               </CardActionArea> 
             </Card>
              </div>
              
          </div> 
         </div>
        </div>
    )
}

export default BlogPage
