import React from 'react'
import styled from "styled-components";
import image from '../../assets/images/bg.jpg'
import star from '../../assets/images/star.png'
function TopCourses() {
  return (
    <Wrapper>
        <CategoriesContainer>
        <HeaderContent>
          <CategoriesName>More Courses Like This</CategoriesName>
          <SeeMore>See All</SeeMore>
        </HeaderContent>
        <MainContainer>
        <ItemsMainContainer>
         <CategorieCard>
            <InnerCard>
              <ImageContainer>
                <InnerImg src={image} alt="course"/>
              </ImageContainer>
              <ContentContainer>
                  <ContentData>
                    <ContentHeading>Beginner’s Guide to Design</ContentHeading>
                    <ContentPara>By Ronald Richards</ContentPara>
                    <UserRating>
                        <StarContainer>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        </StarContainer>
                        <UserRatings>(1200 Ratings)</UserRatings>
                    </UserRating>
                    <TotalHours>22 Total Hours. 155 Lectures. Beginner</TotalHours>
                    <ContentPrice>$149.9</ContentPrice>
                   
                  </ContentData>
                 
              </ContentContainer>
            </InnerCard>
         </CategorieCard>
        </ItemsMainContainer>
        <ItemsMainContainer>
         <CategorieCard>
            <InnerCard>
              <ImageContainer>
                <InnerImg src={image} alt="course"/>
              </ImageContainer>
              <ContentContainer>
                  <ContentData>
                    <ContentHeading>Beginner’s Guide to Design</ContentHeading>
                    <ContentPara>By Ronald Richards</ContentPara>
                    <UserRating>
                        <StarContainer>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        </StarContainer>
                        <UserRatings>(1200 Ratings)</UserRatings>
                    </UserRating>
                    <TotalHours>22 Total Hours. 155 Lectures. Beginner</TotalHours>
                    <ContentPrice>$149.9</ContentPrice>
                   
                  </ContentData>
                 
              </ContentContainer>
            </InnerCard>
         </CategorieCard>
        </ItemsMainContainer>
        <ItemsMainContainer>
         <CategorieCard>
            <InnerCard>
              <ImageContainer>
                <InnerImg src={image} alt="course"/>
              </ImageContainer>
              <ContentContainer>
                  <ContentData>
                    <ContentHeading>Beginner’s Guide to Design</ContentHeading>
                    <ContentPara>By Ronald Richards</ContentPara>
                    <UserRating>
                        <StarContainer>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        </StarContainer>
                        <UserRatings>(1200 Ratings)</UserRatings>
                    </UserRating>
                    <TotalHours>22 Total Hours. 155 Lectures. Beginner</TotalHours>
                    <ContentPrice>$149.9</ContentPrice>
                   
                  </ContentData>
                 
              </ContentContainer>
            </InnerCard>
         </CategorieCard>
        </ItemsMainContainer>
        <ItemsMainContainer>
         <CategorieCard>
            <InnerCard>
              <ImageContainer>
                <InnerImg src={image} alt="course"/>
              </ImageContainer>
              <ContentContainer>
                  <ContentData>
                    <ContentHeading>Beginner’s Guide to Design</ContentHeading>
                    <ContentPara>By Ronald Richards</ContentPara>
                    <UserRating>
                        <StarContainer>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        <UserStar src={star} alt="course"/>
                        </StarContainer>
                        <UserRatings>(1200 Ratings)</UserRatings>
                    </UserRating>
                    <TotalHours>22 Total Hours. 155 Lectures. Beginner</TotalHours>
                    <ContentPrice>$149.9</ContentPrice>
                   
                  </ContentData>
                 
              </ContentContainer>
            </InnerCard>
         </CategorieCard>
        </ItemsMainContainer>
        </MainContainer>
        </CategoriesContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`;
const CategoriesContainer = styled.div`
   
  font-family: inter;
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
const ItemsMainContainer = styled.div``
const CategorieCard = styled.div`
    display: flex;
    flex-direction: column;
    width:298px;
    height:338px;
    border:  1px solid #E2E8F0;
    border-radius:16px;
    box-shadow: 0px 0px 8px 0px #3B82F61F;
    padding: 16px;
    gap:8px;
`;
const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    width:266px;
    height: 306px;
    gap:16px;

`
const ImageContainer = styled.div``
const InnerImg = styled.img`
    width: 100%;
    display:block;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:258px;
    height:151px;
    gap:8px;`
const ContentData = styled.div`
margin-top:2px;`
const ContentHeading = styled.h5`
    font-size:18px;
    font-weight:600;
    line-height:28.8px;
    color:#0F172A;`
const ContentPara = styled.p`
    font-size:14px;
    font-weight:400;
    line-height:30px;
    color:#334155;
`  
const UserRating = styled.div`
    display: flex;
    gap:8px;` 
const ContentPrice = styled.h4`
    margin-top: 8px;
     font-size:20px;
    font-weight:600;
    line-height:30px;
    color:#0F172A;
` 
 
const UserRatings = styled.div`
    margin-top: 3px;
    font-size:12px;
    font-weight:600;
    line-height:14.52px;
    color:#334155;
    ` 
const TotalHours = styled.div`
    font-size:14px;
    font-weight:400;
    margin-top: 6px;
    line-height:21px;
    color:#334155;`  
const MainContainer = styled.div`
margin-bottom: 20px;
display:flex;
justify-content:space-between;
@media (max-width: 1440px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1280px) {
    gap:21px;
  }
  @media (max-width: 980px) {
    justify-content: center;
  }
`
const UserStar = styled.img`
    width:100%;
    display:block;`
const StarContainer = styled.div`
    display: flex;
    width:100px;
    height:20px;`

     



export default TopCourses