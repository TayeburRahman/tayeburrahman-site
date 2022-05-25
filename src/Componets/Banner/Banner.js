import TelegramIcon from '@mui/icons-material/Telegram';
import { Link, Typography } from "@mui/material";
import React from "react";
import { HashLink } from 'react-router-hash-link';
import imgBnr from "../../images/TayebRayhanBnrImg.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner bgBanner d-grid mb-5 pt-3" id="banner"
      style={{ backgroundColor: "white", justifyContent: "center" }}
    >
      <div className="container row d-flex pt-2 mt-5 " style={{ alignItems: "center" }}>
        <div className="text-left col-md-7 col-sm-12 banner-text mt-3">
          <Typography
            variant="h6"
            sx={{ letterSpacing: 4 }}
            style={{ color: "#e94914", marginBottom: '-10px' }}
            component="h6"
          >
            Hi,I am
          </Typography>
          <Typography
          className=" "
            variant="h3"
            className="mt-3 mb-3"
            sx={{ fontFamily: "Monospace" }}
            style={{ color: "black" }}
            component="h3"
          >
          Tayebur Rahman.
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500 }}
            style={{ color: "rgb(233, 73, 20)" }}
            component="h5"
          >
              Welcome to my online portfolio !
          </Typography>
           
          <Typography variant="h6" gutterBottom>
             I build things for the web. I would love to help you with the following technologies.
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500 }}
            style={{ color: "rgb(68 68 68)" }}
            component="h4"
          >
             HTML5, CSS, JavaScript, React JS, React-Redux, React Router, React Hooks, Node JS, Express JS, MongoDB, Tailwind, React Bootstrap, Material UI, Web Animations, Typescript, Heroku, Firebase, Netlify.
        </Typography>
        <Typography className='mt-2' variant="subtitle2" gutterBottom component="div">
        I'm taking on freelance work at the moment. Want some help building your software?
        </Typography>
        <Link as={HashLink}  to="/contact#email"> <button   className="button-62 mt-2" role="button"><TelegramIcon/> Hire me</button> </Link>
         </div>
        <div className="col-md-5 col-sm-12 mt-5">
          <img src={imgBnr} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
