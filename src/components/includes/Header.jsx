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
   
    `;
const HeaderName= styled.span`
    align-items: center;
    display: flex;
    font-size: 16px;
    line-height: 19.36px;
    font-weight:500;
    color: #64748B;
    `;    
const HeaderRight= styled.div`
    align-items: center;
    gap: 24px;
    display:flex;
    `;   
const HeaderCart= styled.div`
    cursor: pointer;
    width:24px;
    height:24px;` 
const CartImg = styled.img`
    display: block;
    width: 100%;
    `; 
const LoginButton= styled.div`
    text-align: center;
    cursor: pointer;
    border: 1px solid#334155;
    gap: 10px;
    padding: 10px;

    `;
const ButtonText= styled.span`
    color:#334155;
    font-size:14px;
    font-weight:500;
    line-height:20px;
    `;
const SignupButton= styled.div`
    padding: 10px;
    cursor: pointer;
    text-align: center;
    background-color: #334155;
    gap: 10px;
    `;
const SignupText= styled.span`
    color: #FFFFFF;
    font-size:14px;
    font-weight:500;
    line-height: 20px;
    `;   


export default Header