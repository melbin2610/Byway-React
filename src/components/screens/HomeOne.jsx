import React from 'react'
import styled from 'styled-components'
import group from '../../assets/images/Group 1.png'; 

function HomeOne() {
  return (
    <Wrapper>
      <HomeContainer>
        <LeftContainer>
          <LeftHeading>Unlock Your Potential<br/>with Byway</LeftHeading>
          <LeftPara>
          Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. 
          </LeftPara>
          <LeftButton>
            <ButtonText>Start your instructor journey</ButtonText>
          </LeftButton>
        </LeftContainer>
        <RightContainer>
          <RightContainerImg src={group} alt="group"/>
        </RightContainer>
      </HomeContainer>

    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline:  auto;
`;
const HomeContainer = styled.div`
    display: flex;
    `
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45%;
    padding: 168.5px 0;
    gap:24px;`
const LeftHeading = styled.h1`
    color: #0F172A;
    font-size:40px;
    font-weight:700;
    line-height:48px;
    `;
const LeftPara = styled.p`
    color:#334155;
    font-size:16px;
    font-weight:400;
    line-height:25.6px;
    `;
const LeftButton = styled.button`
     cursor: pointer;
    max-width: 238px;
    gap: 6px;
    padding:10px 24px 10px 24px;
    border: none;
    background-color:#3B82F6;
    border-radius:8px;`
const ButtonText = styled.span`
   
    color:#FFFFFF;
    font-size:14px;
    line-height:22.4px;
    font-weight:500;
   `
const RightContainer = styled.div`
    padding:40px 0;`

const RightContainerImg = styled.img`
    display:block;
    width:100%;
    margin-left:50%;`  

export default HomeOne