import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

function CourseDescription() {
        const [courseDetails, setCourseDetails] = useState(null); // Initialize with null
        const { courseId } = useParams(); // Assuming you have courseId from URL params
      
        useEffect(() => {
          // Replace with your API endpoint
          fetch(`/data.json`)
            .then(response => response.json())
            .then(data => {
              const course = data.topCourses.find(course => course.id == courseId);
              setCourseDetails(course);
              console.log(data.topCourses[0].id,courseId)
            })
            .catch(error => console.error('Error fetching course details:', error));
        }, [courseId]);
      
        if (!courseDetails) {
          return <div>Loading...</div>;
        }
      
  return (
    <>
      <Container>
        <TextWrapper>
          <TopSection>
            <Title>Course Description</Title>
            <Paraghraph>{courseDetails.description}</Paraghraph>
          </TopSection>
          <BottomSection>
            <Title>Certification</Title>
            <Paraghraph>{courseDetails.certification}</Paraghraph>
          </BottomSection>
        </TextWrapper>
      </Container>
    </>
  )
}
const Container = styled.div`
   font-family: inter;
`;

const TextWrapper = styled.div`
  width: 65%;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
    gap: 15px;
  }
`;

const TopSection = styled.div``;

const BottomSection = styled.div``;

const Title = styled.h4`
  font-family: Inter;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #0F172A;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Paraghraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  color: #334155;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.6px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export default CourseDescription