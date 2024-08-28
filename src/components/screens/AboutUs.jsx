import React from 'react'
import styled from 'styled-components'

function AboutUs() {
  return (
    <Wrapper>
        <AboutUsContainer>
            <HeaderContent>
            <Heading>What Our Customer Say<br/>About Us</Heading>
            <SliderButton></SliderButton>
            </HeaderContent>
        </AboutUsContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`
const AboutUsContainer = styled.div`
  background-color:#F8FAFC;
  margin-top: 80px;

`
const Heading = styled.h3`
font-family: Inter;
font-size: 24px;
font-weight: 600;
line-height: 33.6px;
color: black;
text-align: left;
`
const SliderButton = styled.div``
const HeaderContent = styled.div``

export default AboutUs