import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SmallStarRating from '../../components/screens/SmallStarRating';
import { useParams } from 'react-router-dom';


function ExperienceDesign() {
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

  // Show loading indicator or error message while fetching
  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  

  return (
    <Bg>
      <Container>
        <NavContainer>
          <Ul>
            <List>
              <Navlink to="/">Home</Navlink>
              <Arrow>
                <Icon
                  src={require("../../assets/svg/short-arrow-right-black.svg").default}
                  alt="arrow-right"
                />
              </Arrow>
            </List>
            <List>
              <Navlink to="/">{courseDetails.category}</Navlink>
              <Arrow>
                <Icon
                  src={require("../../assets/svg/short-arrow-right-black.svg").default}
                  alt="arrow-right"
                />
              </Arrow>
            </List>
            <List>
              <Navlink to="#">{courseDetails.subject}</Navlink>
            </List>
          </Ul>
        </NavContainer>
        <Contents>
          <Heading>{courseDetails.subject}</Heading>
          <Paragraph>{courseDetails.description}</Paragraph>
          <InfoWrapper>
            <Rating>{courseDetails.rating}</Rating>
            <Star>
              <SmallStarRating rating={5} />
            </Star>
            <RatingCounts>({courseDetails.ratingCounts} rating)</RatingCounts>
            <Duration>{courseDetails.duration}</Duration>
          </InfoWrapper>
          <FounderWrapper>
            <Founder>
              <FounderPic src={courseDetails.instructorImage} alt="Founder Pic" />
            </Founder>
            <SmallText>
              Created by{" "}
              <span style={{ color: "#2563EB" }}>
                {courseDetails.instructor}
              </span>
            </SmallText>
          </FounderWrapper>
          <LanguageWrapper>
            <LanguageIcon>
              <Icon
                src={require("../../assets/svg/language.svg").default}
                alt="worldwide"
              />
            </LanguageIcon>
            <Languages>{courseDetails.language}</Languages>
          </LanguageWrapper>
        </Contents>
        <PurchaseDetailsBox>
          <TopSection>
            <ImageWrapper>
              <Image src={courseDetails.image} alt="Image" />
            </ImageWrapper>
            <PriceSection>
              <SpecialPrice>${courseDetails.offerRate}</SpecialPrice>
              <OldRate style={{ textDecoration: "line-through" }}>
                ${courseDetails.oldRate}
              </OldRate>
              <Offer>{courseDetails.offer}% Off</Offer>
            </PriceSection>
            <CartButton>Add To Cart</CartButton>
            <BuyButton>Buy Now</BuyButton>
          </TopSection>
          <MediaSection>
            <SubTitle>Share</SubTitle>
            <MeadiaIcons>
              <IconList>
                <IconLink
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/images/facebook.png")}
                    alt="facebook"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/images/github.png")}
                    alt="github"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/images/google.png")}
                    alt="google"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/images/twitter.png")}
                    alt="twitter"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/images/microsoft.png")}
                    alt="microsoft"
                  />
                </IconLink>
              </IconList>
            </MeadiaIcons>
          </MediaSection>
        </PurchaseDetailsBox>
      </Container>
    </Bg>
  );
}

const Bg = styled.div`
  background: #f8fafc;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 40px 0 30px;
  position: relative;
`;

const NavContainer = styled.div`
  margin-bottom: 50px;
`;

const Ul = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 25px;
`;

const List = styled.li``;

const Navlink = styled.div`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #334155;
  &:last-child {
    color: #2563eb;
  }
`;

const Arrow = styled.span`
  display: inline-block;
  width: 6px;
  margin-left: 20px;
`;

const Icon = styled.img`
  width: 100%;
  display: block;
`;

const Contents = styled.div`
  width: 60%;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  width: 90%;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  margin: 20px 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Rating = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #fec84b;
  margin-right: 8px;
`;

const Star = styled.span`
  margin-right: 4px;
`;

const RatingCounts = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-right: 10px;
`;

const Duration = styled.span`
  border-left: 1px solid #000;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 300;
`;

const FounderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0;
`;

const Founder = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const FounderPic = styled.img`
  display: block;
  width: 100%;
`;

const SmallText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const LanguageIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const Languages = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  text-align: left;
`;

const PurchaseDetailsBox = styled.div`
  box-shadow: 0px 0px 8px 0px #3b82f61f;
  background: #ffffff;
  width: 400px;
  border-radius: 16px;
  position: absolute;
  right: 0;
  top: 25px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 23px;
  border-bottom: 1.5px solid #e2e8f0;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const PriceSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 25px 0;
`;

const SpecialPrice = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const OldRate = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: #94a3b8;
`;

const Offer = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #16a34a;
`;

const CartButton = styled.button`
  width: 100%;
  height: 48px;
  background: #020617;
  padding: 10px 24px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  margin-bottom: 25px;
  cursor: pointer;
`;

const BuyButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #020617;
  color: #020617;
  text-align: center;
  box-sizing: border-box;
`;

const MediaSection = styled.div`
  padding: 20px;
`;

const SubTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;

const MeadiaIcons = styled.ul`
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconList = styled.li``;

const IconLink = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 8px;
  border-radius: 50%;
  border: 4px solid rgba(226, 232, 240, 0.5);
`;

export default ExperienceDesign;
