import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SmallStarRating from "../../components/screens/SmallStarRating";
import { useParams } from "react-router-dom";

function ExperienceDesign() {
  const [courseDetails, setCourseDetails] = useState(null);
  const { courseId } = useParams(); // Assuming you have courseId from URL params
  useEffect(() => {
    // Replace with your API endpoint
    fetch(`/data.json`)
      .then((response) => response.json())
      .then((data) => {
        const course = data.topCourses.find((course) => course.id == courseId);
        setCourseDetails(course);
        console.log(data.topCourses[0].id, courseId);
      })
      .catch((error) => console.error("Error fetching course details:", error));
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
                  src={
                    require("../../assets/svg/short-arrow-right-black.svg")
                      .default
                  }
                  alt="arrow-right"
                />
              </Arrow>
            </List>
            <List>
              <Navlink to="/">{courseDetails.category}</Navlink>
              <Arrow>
                <Icon
                  src={
                    require("../../assets/svg/short-arrow-right-black.svg")
                      .default
                  }
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
              <FounderPic
                src={courseDetails.instructorImage}
                alt="Founder Pic"
              />
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
  @media (max-width: 980px) {
    display: flex;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    padding: 30px 0 30px;
  }
`;

const NavContainer = styled.div`
  margin-bottom: 50px;
  @media (max-width: 980px) {
    flex-basis: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 25px;
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const List = styled.li`
  display: flex;
  align-items: center;
`;

const Navlink = styled.div`
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #334155;
  &:last-child {
    color: #2563eb;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Arrow = styled.span`
  display: inline-block;
  width: 6px;
  margin-left: 20px;
  color: #0F172A;
`;

const Icon = styled.img`
  width: 100%;
  display: block;
`;

const Contents = styled.div`
  width: 60%;
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  line-height: 56px;
  color: #0F172A;
  font-weight: 700;
  letter-spacing: -0.32px;
  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  width: 90%;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  margin: 20px 0;
  color: #334155;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.6px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
    margin: 10px 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 480px) {
    margin: 15px 0;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Rating = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #fec84b;
  margin-right: 8px;
  @media (max-width: 480px) {
    margin-right: 4px;
    font-size: 14px;
  }
`;

const Star = styled.span`
  margin-right: 4px;
`;

const RatingCounts = styled.span`
  font-size: 14px;
  color: #334155;
  font-weight: 400;
  margin-right: 10px;
  line-height: 21px;
  
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    margin-right: 10px;
    font-size: 11px;
  }
`;

const Duration = styled.span`
  border-left: 1px solid #000;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    margin-right: 0;
    font-size: 11px;
  }

  @media (max-width: 320px) {
    border: none;
    padding: 0;
  }
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
  line-height: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #334155;
  
`;

const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

const LanguageIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const Languages = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #334155;
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
  @media (max-width: 980px) {
    position: static;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 23px;
  border-bottom: 1.5px solid #e2e8f0;
  z-index: 1;
  
  @media (max-width: 768px) {
    /* flex-direction: row; */
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    /* flex-direction: column; */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 980px) {
    height: 167px;
  }

  @media (max-width: 600px) {
    height: 134px;
  }

  @media (max-width: 480px) {
    height: 167px;
  }
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
  @media (max-width: 768px) {
    margin: 0 0 25px;
  }

  @media (max-width: 600px) {
    margin: 0 0 15px;
  }
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
  @media (max-width: 600px) {
    height: 40px;
    margin-bottom: 10px;
  }
`;

const BuyButton = styled.button`
  cursor: pointer;
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
  @media (max-width: 600px) {
    height: 40px;
  }
`;

const MediaSection = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const SubTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const MeadiaIcons = styled.ul`
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 35px;
  @media (max-width: 320px) {
    gap: 0;
    justify-content: space-between;
  }
`;

const IconList = styled.li``;

const IconLink = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 6%;
  border-radius: 50%;
  border: 4px solid rgba(226, 232, 240, 0.5);
  @media (max-width: 480px) {
    border: 3px solid rgba(226, 232, 240, 0.5);
  }

  @media (max-width: 320px) {
    width: 20px;
    height: 20px;
    padding: 8px;
    border: 2px solid rgba(226, 232, 240, 0.5);
  }
`;

export default ExperienceDesign;
