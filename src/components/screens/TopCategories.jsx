import React from "react";
import styled from "styled-components";
import image from "../../assets/svg/astrology.svg";
import image2 from "../../assets/svg/devlopment.svg";
import image3 from "../../assets/svg/marketing.svg";
import image4 from "../../assets/svg/physics.svg";

function TopCategories() {
  return (
    <Wrapper>
      <CategoriesContainer>
        <HeaderContent>
          <CategoriesName>Top Categories</CategoriesName>
          <SeeMore>See All</SeeMore>
        </HeaderContent>
        <ItemsMainContainer>
          <ItemsContainer>
            <CategorieCard>
              <BlueBlock>
                <ImgContainer>
                  <BlueBlockImg src={image} alt="astrology" />
                </ImgContainer>
              </BlueBlock>
              <Heading>Astrology</Heading>
              <Paragraph>11 Courses</Paragraph>
            </CategorieCard>
          </ItemsContainer>
          <ItemsContainer>
            <CategorieCard>
              <BlueBlock>
                <ImgContainer>
                  <BlueBlockImg src={image2} alt="astrology" />
                </ImgContainer>
              </BlueBlock>
              <Heading>Development</Heading>
              <Paragraph>12 Courses</Paragraph>
            </CategorieCard>
          </ItemsContainer>
          <ItemsContainer>
            <CategorieCard>
              <BlueBlock>
                <ImgContainer>
                  <BlueBlockImg src={image3} alt="marketing" />
                </ImgContainer>
              </BlueBlock>
              <Heading>Astrology</Heading>
              <Paragraph>12 Courses</Paragraph>
            </CategorieCard>
          </ItemsContainer>
          <ItemsContainer>
            <CategorieCard>
              <BlueBlock>
                <ImgContainer>
                  <BlueBlockImg src={image4} alt="physics" />
                </ImgContainer>
              </BlueBlock>
              <Heading>Astrology</Heading>
              <Paragraph>14 Courses</Paragraph>
            </CategorieCard>
          </ItemsContainer>
        </ItemsMainContainer>
      </CategoriesContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`;
const CategoriesContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const HeaderContent = styled.div`
  gap: 24px;
  display: flex;
  justify-content: space-between;
`;
const CategoriesName = styled.h3`
  font-size: 24px;
  color: #0f172a;
  font-weight: 600;
  line-height: 33.6px;
`;
const SeeMore = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  color: #3b82f6;
`;
const ItemsContainer = styled.div``;
const CategorieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 224px;
  padding: 24px 93px 24px 93px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 0px 8px 0px #3B82F61F;

  border-radius: 16px;
  gap: 8px;
`;
const BlueBlock = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #e0f2fe;
`;
const ImgContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  margin-top: 30px;
  margin-left: 30px;
`;
const BlueBlockImg = styled.img`
  display: block;
  width: 100%;
`;
const Heading = styled.h4`
  font-size: 20px;
  color: #0f172a;
  font-weight: 600;
  line-height: 30px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #334155;
  line-height: 25.6px;
`;
const ItemsMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TopCategories;
