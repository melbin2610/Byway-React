import React from 'react';
import styled from 'styled-components';
import arroL from '../../assets/svg/short-arrow-left.svg';
import arroR from '../../assets/svg/short-arrow-right.svg';
import quotes from '../../assets/svg/quotes.svg';
import user from '../../assets/images/Ellipse 61.png';

function AboutUs() {
  const reviews = [
    {
      quote: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      name: "Jane Doe",
      job: "Designer",
    },
    {
      quote: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      name: "Jane Doe",
      job: "Designer",
    },
    {
      quote: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      name: "Jane Doe",
      job: "Designer",
    },
  ];

  return (
    <AboutUsContainer>
      <Wrapper>
        <MainContainer>
          <HeaderContent>
            <Heading>What Our Customer Say<br/>About Us</Heading>
            <SliderButton>
              <SliderLeft>
                <ArrowContainer>
                  <ArrowImg src={arroL} alt="arrow"/>
                </ArrowContainer>
              </SliderLeft>
              <SliderRight>
                <ArrowContainer>
                  <ArrowImg src={arroR} alt="arrow"/>
                </ArrowContainer>
              </SliderRight>
            </SliderButton>
          </HeaderContent>
          <DataMainContainer>
            {reviews.map((review, index) => (
              <DataContainer key={index}>
                <CardContainer>
                  <QuotesImgContainer>
                    <QuotesImg src={quotes} alt="quotes"/>
                  </QuotesImgContainer>
                  <Paragraph>{review.quote}</Paragraph>
                  <CustomerReview>
                    <ReviewImgContainer>
                      <ReviewImg src={user} alt="user"/>
                    </ReviewImgContainer>
                    <UserDetails>
                      <UserName>{review.name}</UserName>
                      <UserJob>{review.job}</UserJob>
                    </UserDetails>
                  </CustomerReview>
                </CardContainer>
              </DataContainer>
            ))}
          </DataMainContainer>
        </MainContainer>
      </Wrapper>
    </AboutUsContainer>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`;

const AboutUsContainer = styled.div`
  margin-top: 64px;
  background-color: #F8FAFC;
`;

const Heading = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  color: black;
  text-align: left;
`;

const MainContainer = styled.div`
  padding: 80px 0;
`;

const SliderButton = styled.div`
  display: flex;
  gap: 24px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderLeft = styled.button`
  cursor: pointer;
  width: 56px;
  height: 40px;
  padding: 10px 16px 10px 22px;
  gap: 6px;
  border-radius: 8px;
  background: #94A3B8;
  border: none;
`;

const SliderRight = styled.button`
  cursor: pointer;
  width: 56px;
  height: 40px;
  padding: 10px 16px 10px 22px;
  background-color: #94A3B8;
  border-radius: 8px;
  border: none;
`;

const ArrowContainer = styled.div`
  width: 30%;
`;

const ArrowImg = styled.img`
  width: 100%;
  display: block;
`;

const DataMainContainer = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 24px; /* Added gap between cards */
  flex-wrap: wrap; /* Ensure that cards wrap to the next line if necessary */
  justify-content: space-between;
`;

const DataContainer = styled.div`
  flex: 1 1 300px; /* Allow cards to be responsive with a minimum width */
`;

const CardContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  gap: 8px;
  border: 1px solid #E2E8F0;
  box-shadow: 0px 0px 8px 0px #3B82F61F;
  border-radius: 16px;
`;

const QuotesImgContainer = styled.div`
  width: 48px;
  height: 48px;
`;

const QuotesImg = styled.img`
  width: 100%;
  display: block;
`;

const Paragraph = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
`;

const CustomerReview = styled.div`
  display: flex;
  width: 150px;
  height: 60px;
  gap: 8px;
`;

const ReviewImgContainer = styled.div`
  width: 60px;
  height: 60px;
`;

const ReviewImg = styled.img`
  display: block;
  width: 100%;
`;

const UserDetails = styled.div``;

const UserName = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  line-height: 28.8px;
  text-align: left;
`;

const UserJob = styled.span`
  color: #334155;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;

export default AboutUs;
