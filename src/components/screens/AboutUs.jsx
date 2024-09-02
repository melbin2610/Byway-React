import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {
  const [testimonials, setTestimonials] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.testimonials);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,  // Breakpoint at 1080px
        settings: {
          slidesToShow: 2,  // Show 2 slides
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,  // Optional: Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,  // Show 1 slide
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <>
      <Background>
        <Container>
          <HeadingWrapper>
            <Heading>What Our Customer Say About Us</Heading>
            <ButtonContainer>
              <PrevButton onClick={() => sliderRef.current.slickPrev()}>
                <ButtonIcon
                  src={
                    require("../../assets/icons/short-arrow-left.svg").default
                  }
                  alt="Arrow-left"
                />
              </PrevButton>
              <NextButton onClick={() => sliderRef.current.slickNext()}>
                <ButtonIcon
                  src={
                    require("../../assets/icons/short-arrow-right.svg").default
                  }
                  alt="Arrow-right"
                />
              </NextButton>
            </ButtonContainer>
          </HeadingWrapper>
        
          <Slider ref={sliderRef} {...settings1}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <QuoteIcon>
                  <Icon
                    src={require("../../assets/icons/quotes.svg").default}
                    alt="quote-icon"
                  />
                </QuoteIcon>
                <Paragraph>"{testimonial.description}"</Paragraph>
                <UserWrapper>
                  <UserImage>
                    <Image
                      src={testimonial.userImage}
                      alt={testimonial.userName}
                    />
                  </UserImage>
                  <UserProfile>
                    <Name>{testimonial.userName}</Name>
                    <Profession>{testimonial.userProfession}</Profession>
                  </UserProfile>
                </UserWrapper>
              </Card>
            ))}
          </Slider>
        </Container>
      </Background>
    </>
  );
}

const Background = styled.div`
  margin-top: 62px;
  padding: 70px 0 60px;
  background: #f8fafc;
  @media (max-width: 480px) {
    width: 97%;
  }
`;


const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  @media (max-width: 1440px) {
       flex-wrap: wrap;
  }
  
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Heading = styled.h3`
  width: 308px;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 320px) {
    margin-left: 11px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 480px) {
   gap: 12px;
  }
`;

const PrevButton = styled.button`
  background: #94a3b8;
  width: 56px;
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 40px;
    height: 33px;
  }
`;

const NextButton = styled.button`
  background: #94a3b8;
  width: 56px;
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 40px;
    height: 33px;
  }
`;

const ButtonIcon = styled.img``;

const Card = styled.div`
  background-color: #FFFFFF;
  width: 96% !important;
  box-sizing: border-box;
  padding: 24px ;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 0px 8px 0px #3b82f61f;
  @media (max-width: 1440px) {
       flex-wrap: wrap;
  }
  
 
`;

const QuoteIcon = styled.span``;

const Icon = styled.img``;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  color: #000000;
  margin: 10px 0 8px;
  @media (max-width: 1080px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const UserWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const UserImage = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #94a3b8;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const UserProfile = styled.span`
  margin-left: 6px;
`;

const Name = styled.h5`
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #000000;
  @media (max-width: 1080px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Profession = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  @media (max-width: 1080px) {
    font-size: 12px;
    @media (max-width: 480px) {
    font-size: 9px;
  }
  }
`;



export default AboutUs;
