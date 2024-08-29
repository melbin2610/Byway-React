import StarRating from "./StarRating";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function LearnerReviews() {
    const [courseDetails, setCourseDetails] = useState(null);

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
        <Title>Learner Reviews</Title>
        <Wrapper>
          <LeftWrapper>
            <Topline>
              <StarIcon>
                <Icon
                  src={require("../../assets/svg/star.svg").default}
                  alt="star"
                />
              </StarIcon>
              <SpanText>{courseDetails.rating}</SpanText>
              <ReviewsText>
                {courseDetails.leanersTotalReviews} reviews
              </ReviewsText>
            </Topline>
            <StarPyramid>
              <Starts>
                <StarRating />
              </Starts>
              <StarText></StarText>
            </StarPyramid>
          </LeftWrapper>
          <RightSection>
            {courseDetails.leanerReviews.map((item) => (
              <RightWrapper>
                <UserProfile>
                  <ProfilePic>
                    <Image src={item.LeanerImage} alt="User Profile" />
                  </ProfilePic>
                  <Name>{item.leanerName}</Name>
                </UserProfile>
                <Contents>
                  <Top>
                    <StarIcon style={{ width: "17px", marginRight: "5px" }}>
                      <Icon
                        src={
                          require("../../assets/icons/Small-star.svg").default
                        }
                        alt="star"
                      />
                    </StarIcon>
                    <StarText>{item.rating}</StarText>
                    <Date>{item.reviewedDate}</Date>
                  </Top>
                  <Paragraph>{item.review}</Paragraph>
                </Contents>
              </RightWrapper>
            ))}

            <Button>View more Reviews</Button>
          </RightSection>
        </Wrapper>
      </Container>
    </>
  )
}
const Container = styled.div`
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
  padding: 30px 0 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
`;

const LeftWrapper = styled.div``;

const Topline = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

const StarIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const SpanText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ReviewsText = styled.span`
  font-size: 14px;
  font-weight: 400;
  align-self: flex-end;
  margin-left: 5px;
`;

const StarPyramid = styled.div``;

const Starts = styled.div``;

const StarIcons = styled.span``;

const StarText = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;

const RightSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightWrapper = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const UserProfile = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfilePic = styled.span`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;

const Contents = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Date = styled.p`
  margin-left: 30px;
  font-size: 14px;
  font-weight: 400;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Button = styled.button`
  display: block;
  background: transparent;
  width: 179px;
  height: 48px;
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #0f172a;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;
export default LearnerReviews