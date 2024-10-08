import React, { useEffect } from "react";
import Header from '../includes/Header'
import HomeOne from './HomeOne'
import Status from './Status'
import TopCategories from './TopCategories'
import TopCourses from './TopCourses'
import TopInstructors from './TopInstructors'
import AboutUs from './AboutUs'
import Journy from './Journy'
import Footer from '../includes/Footer'


function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header/>
    <HomeOne/>
    <Status/>
    <TopCategories/>
    <TopCourses/>
    <TopInstructors/>
    <AboutUs/>
    <Journy/>
    <Footer/>
    </>
  )
}

export default MainPage