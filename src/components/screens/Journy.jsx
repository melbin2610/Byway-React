import React from 'react'
import styled from 'styled-components'

function Journy() {
  return (
    <div>
        <Container>
        <TopSection>
          <LeftImage>
            <Image src={require("../../assets/images/model-4.jpg")} alt="model-4" />
          </LeftImage>
          <RightContent>
            <Title>Become an Instructor</Title>
            <Paragraph>
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </Paragraph>
            <LinkButton to="/action">
              Start Your Instructor Journey
              <span>
                <ButtonIcon
                  src={require("../../assets/svg/arrow-right.svg").default}
                  alt="icon"
                />
              </span>
            </LinkButton>
          </RightContent>
        </TopSection>
        <BottomSection>
          <LeftContent>
            <Title>Transform your life through education</Title>
            <Paragraph>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </Paragraph>
            <LinkButton to="/action">
              Checkout Courses
              <span>
                <ButtonIcon
                  src={require("../../assets/svg/arrow-right.svg").default}
                  alt="icon"
                />
              </span>
            </LinkButton>
          </LeftContent>
          <RightImage>
            <Image src={require("../../assets/images/model-6.jpg")} alt="model-6" />
          </RightImage>
        </BottomSection>
      </Container>
    </div>
  )
}
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;

const TopSection = styled.div`
  padding: 60px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftImage = styled.div`
  width: 400px;
  height: 425px;
`;

const RightContent = styled.div`
  width: 549px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  line-height: 30px;
  text-align: left;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #1D2939;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  margin: 15px 0;
`;

const LinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #020617;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: center;
`;

const BottomSection = styled.div`
  padding: 30px 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  width: 511px;
  height: 154px;
`;

const RightImage = styled.div`
  width: 471.5px;
  height: 385px;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const ButtonIcon = styled.img`
  width: 100%;
  display: block;
`;

export default Journy