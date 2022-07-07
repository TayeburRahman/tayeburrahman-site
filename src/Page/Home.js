import React, { Fragment } from 'react'
import About from '../Componets/About/About'
import Banner from '../Componets/Banner/Banner'
import BlogPage from '../Componets/Blog/BlogPage'
import ContactEmail from '../Componets/Contact/Conatact.Email'
import Project from '../Componets/Protfolio.project/Protfolio.project'
import SubscribeMail from '../Componets/Subscribe/Subscribe.mail'


function  Home() {
    return (
        <Fragment> 
             <Banner></Banner>
             <About></About>
             {/* <Service></Service> */}
             <Project></Project>
             <SubscribeMail></SubscribeMail> 
             <BlogPage></BlogPage> 
             <ContactEmail></ContactEmail>
         </Fragment>
    )
}

export default  Home
