import DownloadIcon from '@mui/icons-material/Download';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";
import { Col, Row } from "react-bootstrap";
import imgI from "../../images/about.png";
import javascript from "../../images/javascript.png";
import node from "../../images/js.png";
import mongodb from "../../images/mongodb.png";
import react from "../../images/react1.png";
import "./About.css";


const About = () => {
  return (
    <div className="  about-main  text-left pb-5">
      <div className="container">
        <div className="d-grid about-main mt-2 pb-5  p-2 ">
          <div className="about-imgI d-flex mb-2">
            <img src={imgI} width="100%" alt="" />
          </div>
          <Typography
            className="about-text aboutHedText mb-4"
            sx={{fontFamily: "font-family: Poppins, sans-serif !important" }}
            component="h3"
            variant="h3"
          >
            About me
          </Typography> 
        </div>
        <div className='row'>
           <div className='col-md-6 col-lg-6 col-sm-12'>
              <img className="img-3" width='80%' src='https://i.ibb.co/w6p3mY6/about-aee0f771fbfc1e7b8fa8.png' alt="" />
           </div> 
           <div className='col-md-6 col-lg-6 col-sm-12'>
           <Typography
              className=" mb-2"
              sx={{fontSize:'16px' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             >  <span style={{fontWeight:'600', color:"#e94914"}}>Objective</span> -------------------
            </Typography>
             <Typography
              className=""
              sx={{fontSize:'16px', fontWeight:'500',fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             >
              I'm highly energetic and an enthusiastic person to learn new technology.I
              I have always been passionate about web development, This is why I'm studying for a Bachelor of Computer Science. I have created many different types of Websites. By doing course on Programming Hero & LEDP, I also gained valuable teamwork and communication skills that will make me a great asset to a Company.
            </Typography>
            <Typography
              className="mt-4"
              sx={{fontSize:'16px' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             >  <span style={{fontWeight:'600', color:"#e94914"}}>Skill</span> -------------------
            </Typography>
            <Typography
              className="mt-2"
              sx={{fontSize:'16px',fontWeight:'500' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             > <span style={{fontWeight:'600', color:"rgb(79, 94, 255)"}}>Comfortable:  </span> Html, CSS, JavaScript, Es6, ReactJS, React Router,Chart.Js, React Bootstrap, React-Hook Form, Axios,, NodeJS 
             , MongoDB, ExpressJs, Mongoose, Redux-Toolkit and CRUD Operations.
            </Typography>
            <Typography
              className="mt-2"
              sx={{fontSize:'16px', fontWeight:'500' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             > <span style={{fontWeight:'600', color:"rgb(79, 94, 255)"}}>Familiar:  </span>
             Material Ui, Tailwind CSS, Bootstrap, TypeScript, Google Map, JWT, OOP, MySQL .
            </Typography>
            <Typography
              className="mt-2"
              sx={{fontSize:'16px', fontWeight:'500' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             > <span style={{fontWeight:'600', color:"rgb(79, 94, 255)"}}>Tools:  </span>  
               Git, GitHub, VS Code, Chrome Dev Tool, Heroku, Netlify, Firebase.
            </Typography> 
           </div>
        </div>
        <div className="row about-main  p-2">
          <div className="col-md-6 col-ms-12 "> 
           <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-4 mt-2 pe-3"  width='130%' src='https://i.ibb.co/6ZgfQN7/images-5-removebg-preview-removebg-preview.png' alt="" /> 
            </Col> 
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-1 mt-1"  width='65%' src={javascript} alt="" /> 
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-2 mt-1 me-2"  width='90%' src={node} alt="" /> 
            </Col> 
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-6"  width='80%' src={mongodb} alt="" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-8 "  width='75%' src='https://i.ibb.co/7gS3MZ2/download-3-removebg-preview.png' alt="" /> 
            </Col> 
            <Col xs={4} md={2}  width='100%' className="tech-icons">
            <img className="img-3  "  width='75%' src={react} alt="" /> 
            </Col> 
            <Col xs={4} md={2}  width='100%' className="tech-icons">
            <img className="img-3 "  width='75%' src='https://i.ibb.co/PmFMB4G/logo-mysql-development-mysql-logo-code-icon-9-removebg-preview-removebg-preview.png' alt="" /> 
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-2"  width='80%' src='https://i.ibb.co/994GrgR/download-2-removebg-preview-removebg-preview.png' alt="" /> 
            </Col> 
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-4 mt-1"  width='60%' src='https://i.ibb.co/jWbDW8f/file-type-vscode-icon-130084-removebg-preview.png' alt="" /> 
            </Col> 
             <Col xs={4} md={2}  width='100%' className="tech-icons">
            <img className="img-3 pt-2"  width='65%' src='https://i.ibb.co/6Z0S0nL/material-ui-removebg-preview.png' alt="" /> 
            </Col>  
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-7"  width='75%'  src='https://i.ibb.co/6Zm47R6/480px-Tailwind-CSS-Logo-svg-removebg-preview.png' alt="" />
            </Col> 
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-7 pt-1"  width='70%'  src='https://i.ibb.co/qBkKPTb/rb-removebg-preview.png' alt="" />
            </Col> 
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-4 pt-2"  width='60%' src='https://i.ibb.co/3sq0NHN/icon.png' alt="" /> 
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-4 mt-2"  width='70%' src='https://i.ibb.co/T44pnKT/git-bash-logo-B6475-E8359-seeklogo-com-removebg-preview.png' alt="" /> 
            </Col> 
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-7 mt-1"  width='60%'  src='https://i.ibb.co/f1kpZhy/31-317100-firebase-logo-png-transparent-png-removebg-preview.png' alt="" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <img className="img-4 "  width='85%' src='https://i.ibb.co/SxFN6JV/postman-icon-6-removebg-preview.png' alt="" /> 
            </Col>
          </Row>
          </div>
          <div className="col-md-6 col-sm-12 ">
          <Typography
              className="mt-4"
              sx={{fontSize:'16px' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             >  <span style={{fontWeight:'600', color:"#e94914"}}>Education</span> -------------------
            </Typography>
            <Typography
              className="mt-2"
              sx={{fontSize:'16px' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             > <span style={{fontWeight:'600', color:"rgb(79, 94, 255)"}}>Bachelor in Computer Science & Engineering:  </span>  
                University Global Village (UGV).
            </Typography>
            <Typography
              className="mt-4"
              sx={{fontSize:'16px' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             >  <span style={{fontWeight:'600', color:"#e94914"}}>Complete Course</span> -------------------
            </Typography>
            <Typography
              className="mt-2"
              sx={{fontSize:'16px',fontWeight:'500'  ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             > <span style={{fontWeight:'600', color:"rgb(79, 94, 255)"}}>Web Development:  </span>  
                Programming Hero.
            </Typography>
            <Typography
              className="mt-2 mb-3"
              sx={{fontSize:'16px',fontWeight:'500' ,fontFamily: "font-family: Poppins, sans-serif !important", color:"#dddddd"  }}
              component="h5"
              variant="h5"
             > <span style={{fontWeight:'600', color:"rgb(79, 94, 255)"}}>Web Development:  </span>  
               Learning and Earning Development Project (BD).
            </Typography>
            <Typography
              className=""
              sx={{fontSize:'18px' ,fontFamily: "font-family: Poppins, sans-serif !important", color:'#e94914' }}
              component="h5"
              variant="h5"
            >
              Personal Details <span style={{color:"white"}}>-----------------</span>
            </Typography>
            <div className="row d-flex mt-4">
              <div className="col-md-12 col-sm-12 rme-name">
                <h6>
                  Birthdate <span className="ms-5 rme-add">23-22-2000</span>
                </h6>
                <h6>
                  Phone &nbsp; &nbsp;{" "}
                  <span className="ms-5 rme-add">+880 32917294</span>
                </h6>
                <h6>
                  Email &nbsp; &nbsp; &nbsp;{" "}
                  <span className="ms-5 rme-add">tayebrayhan101@gmail.com</span>
                </h6>
                <h6>
                  Education &nbsp; &nbsp;{" "}
                  <span className="ms-4 rme-add font-wi">
                    CSE- 2019- 2023, Bsc
                  </span>{" "}
                </h6>
                <h6>
                  ADDRESS &nbsp; &nbsp;{" "}
                  <span className="ms-4 rme-add">Bangladesh, South Asia </span>
                </h6>
              </div>
            </div>
          </div>
          
        </div>
        <div className="d-grid d-grid-c">
          <Box>
          <Button className="button-36 p-3" role="button">
              <a
                href="https://drive.google.com/u/0/uc?id=1UdNGibiHpdXOF2PMolqJf0Nm9Kq94rxn&export=download"
                download
              >
                Download Resume 
                 <DownloadIcon/>
              </a> 
              </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default About;
