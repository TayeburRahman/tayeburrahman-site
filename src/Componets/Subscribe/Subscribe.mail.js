import { Alert, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Subscribe.css';


function SubscribeMail() {
  const form = useRef();
  const { register, handleSubmit } = useForm();
  const [error, setError]=useState()
  const [data, setData]=useState()


  const onSubmit = (e) => { 
    setData(e)
    form.current.reset()
  };
  const onError = (errors) => {
    setError(errors) 
  };

    return (
        <div className='SubscribeMail'>
            <div className='tensorsites-container'>
                 <Typography className='SubscribeText' >
                 Subscribe And Get My Latest Blog Post <br></br> In Your Inbox !
                 </Typography>
               <div className='SubscribeLastDiv'>
                <form className='d-flex Subscribeform' ref={form} onSubmit={handleSubmit(onSubmit, onError)}>
                <input className='basic-slide' type="email" placeholder='Enter email' {...register("email")} />
                <input className='label' type="submit"  value="Subscribe" /> 
                </form>
               {data && <Alert className="alartMsg" severity="success">Subscribe Success — check it out!</Alert>}
                </div>
               <div className='tensorsite-lines'>   
               </div>
            </div>
        </div>
    )
}

export default SubscribeMail
