import React, { useEffect, useState } from 'react'; // Removed duplicate import
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "../screens/StarRating"; // Make sure this is the correct path

function TopCourses() {
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCourseDetails(data.topCourses || []); // Ensure topCourses exists
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <CourseContainer>
      <HeadinWrapper>
        <Heading>Top Courses</Heading>
        <SeeAllButton>See All</SeeAllButton>
      </HeadinWrapper>
      <Widgets>
        {courseDetails.map((item) => (
          <Card key={item.id} to={`/single/${item.id}`}>
            <ImageWrapper>
              <Image src={item.image} alt="course image" />
            </ImageWrapper>
            <Subheading>{item.subject}</Subheading>
            <Lecture>{item.instructor}</Lecture>
            <RatingStar>
              <StarRating rating={item.rating} />
              <Label>({item.ratingCounts})</Label>
            </RatingStar>
            <TimeDuration>{item.duration}</TimeDuration>
            <Price>${item.offerRate}</Price>
          </Card>
        ))}
      </Widgets>
    </CourseContainer>
  );
}

const CourseContainer = styled.div`
   font-family: inter;
   width: 90%;
    max-width: 1280px;
    margin-inline: auto;
  padding: 60px 0;
`;

const HeadinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Heading = styled.h3`
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  text-align: left;
  color: #0f172a;
`;

const SeeAllButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #3b82f6;
`;

const Widgets = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Added to handle overflow */
   /* Added to manage spacing */
  @media (max-width: 980px) {
   display: flex;
   justify-content: center;
  }
`;

const Card = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #e2e8f0; /* Specified border style */
  box-shadow: 0px 0px 8px 0px #3b82f61f;
  width: 100%; /* Added to handle responsive layout */
  max-width: 300px; /* Added to limit card size */
`;

const ImageWrapper = styled.div`
  width: 266px;
  height: 139px;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fits well */
`;

const Subheading = styled.h5`
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #0f172a;
  margin: 8px 0;
`;

const Lecture = styled.p`
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  margin-bottom: 8px;
`;

const RatingStar = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Label = styled.span`
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: left;
  color: #334155;
  margin-left: 8px;
`;

const TimeDuration = styled.p`
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  margin: 8px 0;
`;

const Price = styled.h4`
  font-family: Inter, sans-serif; /* Added fallback font */
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #0f172a;
`;

export default TopCourses;
