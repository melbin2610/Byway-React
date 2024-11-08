import React from 'react'
import styled from 'styled-components'
import instructor from '../../assets/images/model-5.jpg'
import star from '../../assets/images/star.png'


function TopInstructors() {
  return (
    <Wrapper>
      <InstructorsContainer>
        <HeaderContent>
          <CategoriesName>Top Instructors</CategoriesName>
          <SeeMore>See All</SeeMore>
        </HeaderContent>
        <MainCard>
        <DataCard>
          <DataCardItems>
            <ImgContainer>
              <DataImg src={instructor} alt="instructor"/>
            </ImgContainer>
            <DataContents>
               <DataContentItems>
               <DataHeading>Ronald Richards</DataHeading>
               <DataParagraph>UI/UX Designer</DataParagraph>
               <HorizontalLine></HorizontalLine>
               <StudentRating>
                <UserRating>
                  <StarContainer>
                  <Star src={star} alt="star"/>
                  </StarContainer>
                  <Rating>4.9</Rating>
                </UserRating>
                <NoStudents>2400 Students</NoStudents>
               </StudentRating>
               </DataContentItems>
            </DataContents>
          </DataCardItems>
        </DataCard>

        <DataCard>
          <DataCardItems>
            <ImgContainer>
              <DataImg src={instructor} alt="instructor"/>
            </ImgContainer>
            <DataContents>
               <DataContentItems>
               <DataHeading>Ronald Richards</DataHeading>
               <DataParagraph>UI/UX Designer</DataParagraph>
               <HorizontalLine></HorizontalLine>
               <StudentRating>
                <UserRating>
                  <StarContainer>
                  <Star src={star} alt="star"/>
                  </StarContainer>
                  <Rating>4.9</Rating>
                </UserRating>
                <NoStudents>2400 Students</NoStudents>
               </StudentRating>
               </DataContentItems>
            </DataContents>
          </DataCardItems>
        </DataCard>

        <DataCard>
          <DataCardItems>
            <ImgContainer>
              <DataImg src={instructor} alt="instructor"/>
            </ImgContainer>
            <DataContents>
               <DataContentItems>
               <DataHeading>Ronald Richards</DataHeading>
               <DataParagraph>UI/UX Designer</DataParagraph>
               <HorizontalLine></HorizontalLine>
               <StudentRating>
                <UserRating>
                  <StarContainer>
                  <Star src={star} alt="star"/>
                  </StarContainer>
                  <Rating>4.9</Rating>
                </UserRating>
                <NoStudents>2400 Students</NoStudents>
               </StudentRating>
               </DataContentItems>
            </DataContents>
          </DataCardItems>
        </DataCard>
        
        <DataCard>
          <DataCardItems>
            <ImgContainer>
              <DataImg src={instructor} alt="instructor"/>
            </ImgContainer>
            <DataContents>
               <DataContentItems>
               <DataHeading>Ronald Richards</DataHeading>
               <DataParagraph>UI/UX Designer</DataParagraph>
               <HorizontalLine></HorizontalLine>
               <StudentRating>
                <UserRating>
                  <StarContainer>
                  <Star src={star} alt="star"/>
                  </StarContainer>
                  <Rating>4.9</Rating>
                </UserRating>
                <NoStudents>2400 Students</NoStudents>
               </StudentRating>
               </DataContentItems>
            </DataContents>
          </DataCardItems>
        </DataCard>

        <DataCard>
          <DataCardItems>
            <ImgContainer>
              <DataImg src={instructor} alt="instructor"/>
            </ImgContainer>
            <DataContents>
               <DataContentItems>
               <DataHeading>Ronald Richards</DataHeading>
               <DataParagraph>UI/UX Designer</DataParagraph>
               <HorizontalLine></HorizontalLine>
               <StudentRating>
                <UserRating>
                  <StarContainer>
                  <Star src={star} alt="star"/>
                  </StarContainer>
                  <Rating>4.9</Rating>
                </UserRating>
                <NoStudents>2400 Students</NoStudents>
               </StudentRating>
               </DataContentItems>
            </DataContents>
          </DataCardItems>
        </DataCard>
        </MainCard>
      </InstructorsContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`;
const InstructorsContainer = styled.div`
  font-family: inter;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;`
const HeaderContent = styled.div`
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
const MainCard = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1440px) {
       flex-wrap: wrap;
  }
  @media (max-width: 680px) {
    gap: 29px;
    justify-content: center;
  }
`
const DataCard = styled.div`
  width: 212px;
  height: 281px;
  border-radius: 16px;
  border:1px solid #E2E8F0;
  box-shadow: 0px 0px 8px 0px #3B82F61F;

  padding: 16px;
  gap:16px;

`
const DataCardItems = styled.div`
  display: flex;
  flex-direction: column;
  width:180px;
  height: 249px;
  gap:16px;
`
const ImgContainer = styled.div`
   border-radius:8px;
   width: 177px;
   height: 132px;
  `
const DataImg = styled.img`
  width:100%;
  display:block;
 
  `
const DataContents= styled.div`
  width: 180px;
  height: 101px;
  gap: 16px;
 ` 
const DataContentItems =styled.div`
 width:141px;
 height:49px;` 
const DataHeading =styled.h5`
color:#0F172A;
font-size: 18px;
font-weight: 600;
line-height: 28.8px;
text-align: left;
` 
const DataParagraph=styled.span`
font-size: 14px;
color: #334155;
font-weight: 400;
line-height: 21px;
text-align: left;
`
const HorizontalLine=styled.div`
width:180px;
border: 1px solid #E2E8F0;
margin-top:15px;`
const StudentRating=styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
`
const UserRating=styled.div`
  gap:3px;
  align-items: center;
  display: flex;
 `

const StarContainer=styled.div`
  width:20px;
  height:20px;`
const Star=styled.img`
  display:block;
  width:100%;`
const Rating=styled.span`
font-size: 12px;
color: #0F172A;
font-weight: 600;
line-height: 14.52px;
text-align: left;
`
const NoStudents=styled.span`
font-size: 12px;
color:#334155;
font-weight: 600;
line-height: 14.52px;
margin-right: -36px;
text-align: left;
`

export default TopInstructors