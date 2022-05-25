import GitHubIcon from '@mui/icons-material/GitHub';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = ({project, technology}) => {
    console.log('tetx',technology)
    return (
         <Box>
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
                   <Typography variant="body2"  >
                   This is a completely MERN stack project. It is also a Niche related website. Here, customer/user dashboard and admin dashboard are included.
                   </Typography> 
                 </CardContent>
                 <div className="tags ps-3 pe-2">
                   {technology?.map((tag, index) => (
                     <span key={index}>{tag}</span>
                   ))}
                 </div>
                 </CardActionArea> 
                 <Box className="col-12 d-flex p-3 linkBox" style={{justifyContent: 'space-between'}}>
                    <Link className="linkPotfolio" href={project.liveSite}>Explore Demo</Link>
                    <Link className="linkPotfolio  githubLink" href={project.gitCode} >View Code <GitHubIcon/></Link>
                 </Box> 
         </Box>
    );
};

export default ProjectCard;