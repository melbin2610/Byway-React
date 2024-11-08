import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import { useParams } from "react-router-dom";

function Instructor() {
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
        <Wrapper>
          <Title>Instructor</Title>
          <Name>{courseDetails.instructor}</Name>
          <Profession>{courseDetails.instructorProfession}</Profession>
          <ProfileContainer>
            <ProfilePic>
              <Image
                src={courseDetails.instructorImage}
                alt="User profile image"
              />
            </ProfilePic>
            <DetailsContainer>
              <Points>
                <Ponit>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/achive.svg").default}
                      alt="Revies icon"
                    />
                  </IconSpan>
                  <Text>{courseDetails.reviews} Reviews</Text>
                </Ponit>
                <Ponit>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/cap.svg").default}
                      alt="Students icon"
                    />
                  </IconSpan>
                  <Text>{courseDetails.students} Students</Text>
                </Ponit>
                <Ponit>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/play.svg").default}
                      alt="Courses icon"
                    />
                  </IconSpan>
                  <Text>{courseDetails.courses} Courses</Text>
                </Ponit>
              </Points>
            </DetailsContainer>
          </ProfileContainer>
          <Paragraph>{courseDetails.aboutInstructor}</Paragraph>
        </Wrapper>
      </Container>
    </>
  )
}
const Container = styled.div`
   font-family: inter;
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
`;

const Wrapper = styled.div`
  width: 65%;
  border-bottom: 1px solid #e2e8f0;
  padding: 30px 0;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;


const Title = styled.h4`
  font-size: 20px;
  color: #0F172A;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const Name = styled.h4`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
  
`;

const Profession = styled.h6`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  color: #334155;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

const ProfilePic = styled.span`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

const DetailsContainer = styled.div``;

const Points = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Ponit = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconSpan = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #0F172A;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  color: 25.6px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export default Instructor