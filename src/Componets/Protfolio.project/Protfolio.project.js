import AutorenewIcon from '@mui/icons-material/Autorenew';
import EastIcon from '@mui/icons-material/East';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React, { Fragment, useEffect, useState } from "react";
import imgW from '../../images/work.png';
import "./Project.css";
import ProjectCard from './ProjectCard';

function  Project() {
    const [projects, setProjects] = useState([]);
    const [isValue, setValue] = useState(false);
    console.log(isValue)


    useEffect(() => {
      fetch("/project.json")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);

    const handelChang =(data)=>{
      if(isValue === false){ 
        setValue(true) 
      }else{ 
        setValue(false) 
      }
    }
    return (
        <div className="col-12 project mb-5" id="project">
        <div className="container dGrid"> 
           <div className="portfolio-imgI d-flex mt-2 mb-2" data-aos="fade-zoom-in">
             <img src={imgW} width="100%" alt="" />
           </div>
          <Typography
          data-aos="fade-zoom-in"
            className="PortfolioHedtex mb-4"
            sx={{ fontFamily: "Monospace" }}
            component="h3"
            variant="h3"
          >
           Project Demos
          </Typography> 
          <div className='d-flex' style={{width: '100%', justifyContent:'space-between' }}>
           <Button onClick={()=> handelChang(true)} data-aos="fade-right" disabled={isValue == false} className="SeeLink" style={{color: isValue == false? "rgb(113 122 217)":"#e94914"}}> Close all<AutorenewIcon className='nextIcon'/> </Button> 

           <Button onClick={()=> handelChang(true)} data-aos="fade-left" disabled={isValue == true} className="SeeLink" style={{color: isValue == true? "rgb(113 122 217)":"#e94914"}} > See all project<EastIcon className='nextIcon'/> </Button>
           </div>
            <div className=" container row text-center justify-content pb-5 pt-5 gap-3" >
           {
             isValue? 
             <Fragment>
             {projects.map((project, index) => (
               <Card className="boxShawdo" data-aos="fade-down" id='boxShawdo' sx={{ maxWidth: 345, padding: 0 }}>
                  <ProjectCard key={index} technology={project.technology} project={project}/>
               </Card>
             ))}
              <button onClick={()=> handelChang(true)} className=" SeeLink mt-3" style={{color:'#425066'}}> Close all<KeyboardReturnIcon className='nextIcon ms-1'/> </button> 
             </Fragment>
         :
          <Fragment>
          {projects.slice(0, 3).map((project, index) => (
            <Card className="boxShawdo" data-aos="fade-down" id='boxShawdo' sx={{ maxWidth: 345, padding: 0 }}>
               <ProjectCard key={index} technology={project.technology} project={project}/>
            </Card>
          ))} 
          </Fragment>
 
           }
        </div>
        </div>
      </div>
    )
}

export default  Project
