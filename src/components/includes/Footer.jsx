import React from 'react'
import styled from 'styled-components'
import {  Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
         <Background>
        <Container>
          <Items>
            <Item1>
              <Logo>
                <Image
                  src={require("../../assets/svg/logo-big.svg").default}
                  alt="#"
                />
              </Logo>
              <Paragraph>
                Empowering learners through accessible and engaging online
                education. <br /> Byway is a leading online learning platform
                dedicated to providing high-quality, flexible, and affordable
                educational experiences.
              </Paragraph>
            </Item1>
            <Items2>
              <Ul>
                <Li>
                  <UlTitle>Get Help</UlTitle>
                </Li>
                <Li>
                  <TextLink to="/">Contact Us</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Latest Articles</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">FAQ</TextLink>
                </Li>
              </Ul>
            </Items2>
            <Items3>
              <Ul>
                <Li>
                  <UlTitle>Programs</UlTitle>
                </Li>
                <Li>
                  <TextLink to="/">Art & Design</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Business</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">IT & Software</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Languages</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Programming</TextLink>
                </Li>
              </Ul>
            </Items3>
            <Items4>
              <Ul>
                <Li>
                  <UlTitle>Contact Us</UlTitle>
                </Li>
                <Li>
                  <TextLink to="/">
                    Address: 123 Main Street, Anytown, CA 12345
                  </TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Tel: +(123) 456-7890</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Mail: bywayedu@webkul.in</TextLink>
                </Li>
              </Ul>
              <Media>
                <Icons>
                  <Icon>
                    <MediaLinks
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/images/facebook.png")}
                        alt="facebook"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/images/github.png")}
                        alt="github"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/images/google.png")}
                        alt="google"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/images/twitter.png")}
                        alt="google"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.microsoft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/images/microsoft.png")}
                        alt="microsoft"
                      />
                    </MediaLinks>
                  </Icon>
                </Icons>
              </Media>
            </Items4>
          </Items>
        </Container>
      </Background>
    </div>
  )
}

const Background = styled.div`
  margin-top: 60px;
  background: #1e293b;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 80px 0 110px;

  @media (max-width: 480px) {
    padding: 40px 0 60px;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;

    .item1 {
      flex-basis: 100%;
    }
    .item2,
    .item3 {
      margin-right: 100px;
    }
  }

  @media (max-width: 768px) {
    .item2,
    .item3 {
      margin-right: 50px;
    }
  }

  @media (max-width: 680px) {
    justify-content: space-between;
    .item2,
    .item3 {
      margin-right: 0px;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
    text-align: center;

    .item2 {
      text-align: left;
      margin-right: 70px;
    }

    .item3 {
      text-align: left;
    }
  }

  @media (max-width: 320px) {
    .item2 {
      margin-right: 25px;
    }
  }
`;

const Item1 = styled.div`
  width: 416px;
`;

const Logo = styled(Link)`
  display: inline-block;
  width: 111px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Items2 = styled.div``;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  margin-bottom: 10px;
`;

const UlTitle = styled.h5`
  color: #f1f5f9;
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;

  @media (max-width: 480px) {
    line-height: 22.8px;
  }
`;

const TextLink = styled(Link)`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: 320px) {
    line-height: 16px;
  }
`;

const Items3 = styled.div``;

const Items4 = styled.div``;

const Media = styled.div`
  margin-top: 22px;
  @media (max-width: 980px) {
    margin-top: 30px;
  }
`;

const Icons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.li``;

const MediaLinks = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  padding: 8px;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;


export default Footer