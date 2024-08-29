import React, { useEffect } from "react";
import HeaderTwo from './HeaderTwo'
import Footer from '../includes/Footer'
import AboutUs from '../screens/AboutUs'
import MoreCourses from '../screens/MoreCourses'
import ExperienceDesign from './ExperienceDesign'
import Main from './Main'

function SinglePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <HeaderTwo/>
      <ExperienceDesign/>
      <Main/>
      <AboutUs/>
      <MoreCourses/>
      <Footer/>
    </>
    
  )
}

export default SinglePage