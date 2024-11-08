import React from 'react'
import styled from "styled-components";
import logo from '../../assets/svg/logo.svg'; 
import cart from '../../assets/svg/cart.svg'; 


function Header() {
  return (
  <HeaderContainer>
    <Wrapper>
    <HeaderLeft>
      <HeaderLogo>
        <HeaderLogoImg src={logo} alt="Logo" />
      </HeaderLogo>
      <HeaderName>Byway</HeaderName>
    </HeaderLeft>
    <HeaderRight>
      <HeaderCart>
        <CartImg src={cart} alt="Logo"/>
      </HeaderCart>
      <LoginButton>
        <ButtonText>Log in</ButtonText>
      </LoginButton>
      <SignupButton>
        <SignupText>Sign Up</SignupText>
      </SignupButton>
    </HeaderRight>
    </Wrapper>
  </HeaderContainer>

    
  )
}

const HeaderContainer= styled.div`
    font-family: inter;
    border-bottom: 1px solid #E2E8F0;
    padding : 14px 0px;
    height:65px;
    background-color:#FFFFFF
    
    ;`
const Wrapper= styled.div`
    width: 90%;
    max-width: 1280px;
    justify-content: space-between;
    display: flex;
    margin-inline:  auto;
`;    
const HeaderLeft= styled.div`
    cursor: pointer;
    width: 83px;
    height: 40px;
    display:flex;
    `;
const HeaderLogo= styled.div`
    width:31px;
    height:40px;`    
const HeaderLogoImg= styled.img`
    display: block;
    width: 100%;
    @media (max-width: 360px) {
      width: 70%;
  }
    `;
const HeaderName= styled.span`
    align-items: center;
    display: flex;
    font-size: 16px;
    line-height: 19.36px;
    font-weight:500;
    color: #64748B;
    @media (max-width: 360px) {
      font-size: 12px;
      margin-top: -8px;
  }
    `;    
const HeaderRight= styled.div`
    align-items: center;
    gap: 24px;
    display:flex;
    @media (max-width: 360px) {
      gap: 12px;
  }
    `;   
const HeaderCart= styled.div`
    cursor: pointer;
    width:24px;
    height:24px;` 
const CartImg = styled.img`
    display: block;
    width: 100%;
    @media (max-width: 360px) {
      width: 70%;
  }
    `; 
const LoginButton= styled.div`
    text-align: center;
    cursor: pointer;
    border: 1px solid#334155;
    gap: 10px;
    padding: 10px;
    @media (max-width: 480px) {
      padding: 7px;
  }
  @media (max-width: 360px) {
      padding: 3px;
  }
    `;
const ButtonText= styled.span`
    color:#334155;
    font-size:14px;
    font-weight:500;
    line-height:20px;
    @media (max-width: 360px) {
      font-size:10px;
  }
    `;
const SignupButton= styled.div`
    padding: 10px;
    cursor: pointer;
    text-align: center;
    background-color: #334155;
    gap: 10px;
    @media (max-width: 480px) {
      padding: 7px;
  }
  @media (max-width: 360px) {
      padding: 3px;
  }
    `;
const SignupText= styled.span`
    color: #FFFFFF;
    font-size:14px;
    font-weight:500;
    line-height: 20px;
    @media (max-width: 360px) {
      font-size:10px;
  }
  @media (max-width: 320px) {
      font-size:9px;
      line-height: 22px;
  }
    `;   


export default Header