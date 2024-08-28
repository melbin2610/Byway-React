import React from 'react'
import Header from '../includes/Header'
import HomeOne from './HomeOne'
import Status from './Status'
import TopCategories from './TopCategories'
import TopCourses from './TopCourses'
import TopInstructors from './TopInstructors'
import AboutUs from './AboutUs'

function MainPage() {
  return (
    <>
    <Header/>
    <HomeOne/>
    <Status/>
    <TopCategories/>
    <TopCourses/>
    <TopInstructors/>
    <AboutUs/>
    </>
  )
}

export default MainPage