import GitHubIcon from '@mui/icons-material/GitHub';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const ProjectCard = ({project, technology}) => { 
    return (
         <Box className="card-box">
             <CardActionArea className='textLeft'>
                 <CardMedia
                 className='image1p'
                   component="img"
                   height="160"
                   width='100%'
                   image={project.img1}
                   alt="green iguana"
                 />
                 <CardContent>
                   <Typography className='namePotfolio' gutterBottom variant="h6" component="div">
                     {project.name}
                   </Typography>
                   <Typography variant="body2">
                     {project.homeText}
                    </Typography> 
                 </CardContent>
                 <div className="tags ps-3 pe-2">
                   {technology?.map((tag, index) => (
                     <span key={index}>{tag}</span>
                   ))}
                 </div>
             </CardActionArea> 
                 <Box className="col-12 d-flex p-3 linkBox" style={{justifyContent: 'space-between'}}>
                    <a className="linkPotfolio" href={project.liveSite}  >Explore Demo</a>
                    <a className="linkPotfolio  githubLink" href={project.gitCode} >View Code <GitHubIcon/></a>
                 </Box> 
         </Box>
    );
};

export default ProjectCard;


// "liveSite": "https://objective-hugle-78dbd5.netlify.app/",
//     "gitCode": "https://github.com/TayeburRahman/HealthCare-Service-App",