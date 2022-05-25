import emailjs from '@emailjs/browser';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import imgc from '../../images/contact.png';
import "./contact.css";



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ContactEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const form = useRef();
  
  const onSubmit = (e) => { 
      emailjs.sendForm('service_t9xlzqn', 'template_h8kk5gx',form.current, 'CM4x5DwtVVnb1kl1W')
        .then((result) => {
            console.log('result',result.text);
        }, (error) => {
            console.log(error.text);
        });
        setOpen(true);
        form.current.reset()
       e.preventDefault();
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

 
  return (
    <div className="" id="email">
      <div className="contact pb-5 pt-3 d-grid d-grid-c">
          <img src={imgc} width="3%" alt="" />
          <h3>Get In Touch</h3>
        <Stack spacing={2} sx={{ width: '100%',alignItems: 'center' }}>
           <div className="col-md-8 col-lg-8 col-sm-12 p-4 text-left">
             <form ref={form} onSubmit={handleSubmit(onSubmit)}>
             <input
                 type="text"
                 name="name"
                 class="form-control input-div mt-2"
                   id="exampleFormControlInput1"
                   placeholder="Your Name"
                 {...register("name", { required: true, maxLength: 80 })}
               />
                 <input
                 type="tel"
                 name="mobile-number"
                 class="form-control input-div mt-2"
                 id="exampleFormControlInput1"
                 placeholder="mobile-number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} 
               />
               <input
                 type="text"
                 name="subject"
                 class="form-control input-div mt-2"
                 id="exampleFormControlInput1"
                 placeholder="Subject"
                 {...register("subject",{ required: true, maxLength: 80 })}
               />
               <textarea
                type="text"
                name="message"
                   placeholder="Message"
                   class="form-control input-div-m mt-2"
                   id="exampleFormControlTextarea1"
                   rows="3"
                   {...register("message", { required: true, maxLength: 80 })}
                 ></textarea>
     
                 <button class="button-48 mt-2" type="submit"><span class="text">Send Message  </span></button>
                 <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                   <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                     This is a success message!
                   </Alert>
                 </Snackbar>
             </form>
           </div>
        </Stack>
      </div>
    </div>
  );
};

export default ContactEmail;

