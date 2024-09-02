import React from 'react'
import styled from 'styled-components'

function HeaderTwo() {
  return (
    <>
     
     <HeaderContainer>
        <LogoWrapper>
          <LogoLink to="/">
            <Logo
              src={require("../../assets/svg/logo.svg").default}
              alt="Logo"
            />
            Byway
          </LogoLink>
        </LogoWrapper>
        <AccountContainer>
          <Navlink>
            <CartIcon
              src={require("../../assets/svg/wishlist.svg").default}
              alt="Cart"
            />
          </Navlink>
          <Navlink>
            <CartIcon
              src={require("../../assets/svg/cart.svg").default}
              alt="Cart"
            />
          </Navlink>
          <Navlink>
            <CartIcon
              src={require("../../assets/svg/bell.svg").default}
              alt="Cart"
            />
          </Navlink>
          <Navlink>
            <AccountPannel>J</AccountPannel>
          </Navlink>
        </AccountContainer>
      </HeaderContainer>
      <Border />
    
    </>
  )
}

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 320px) {
    flex-direction: column;
    padding: 20px 0;
    gap: 15px;
    height: 100%;
  }
`;

const LogoWrapper = styled.div``;

const LogoLink = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #334155;
`;

const Logo = styled.img`
  width: 100%;
  display: block;
`;

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Navlink = styled.div``;

const CartIcon = styled.img`
  width: 100%;
  display: block;
`;

const AccountPannel = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  background: #334155;
  padding: 15px;
  border-radius: 50%;
  color: #fff;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #e2e8f0;
`;


export default HeaderTwo