import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function Syllabus() {
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
          <Title>Syllabus</Title>
          <Table>
            {courseDetails.syllabus.map((item, index) => (
              <Row key={index}>
                <FirstColomn>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/svg/arrow-down.svg").default}
                      alt="Arrow icon"
                    />
                  </IconSpan>
                  <SubTitle>{item.title}</SubTitle>
                </FirstColomn>
                <SecondColumn>
                  <Lessons>{item.lessons} Lessons</Lessons>
                  <Hour>{item.duration}</Hour>
                </SecondColumn>
              </Row>
            ))}
          </Table>
        </Wrapper>
      </Container>
    </>
  )
}
const Container = styled.div`
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
`;

const Wrapper = styled.div`
  width: 65%;
  padding: 30px 0;
  border-bottom: 1px solid #e2e8f0;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;

const Title = styled.h4`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #0F172A;
  margin-bottom: 18px;
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const Table = styled.div`
 cursor: pointer;
  width: 95%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  border-top: none;
  padding: 24px;

  &:first-child {
    border-top: 1px solid #e2e8f0;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  @media (max-width: 320px) {
    padding: 10px;
  }
`;

const FirstColomn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 320px) {
    gap: 10px;
  }
`;

const IconSpan = styled.span`
 
  @media (max-width: 480px) {
    width: 11px;
  }

  @media (max-width: 320px) {
    width: 12px;
  }`;

const Icon = styled.img``;

const SubTitle = styled.h5`
  font-size: 18px;
  color: #0F172A;
  font-weight: 600;
  line-height: 28.8px;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
    width: 150px;
  }
`;

const SecondColumn = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 320px) {
    gap: 10px;
  }
`;

const Lessons = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #334155;

@media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }`;

const Hour = styled.p`
 font-size: 14px;
 font-weight: 400;
 line-height: 21px;
 color: #334155;
 @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }`;

export default Syllabus