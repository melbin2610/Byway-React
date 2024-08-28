import React from 'react'
import styled from 'styled-components'

function Status() {
  return (
    <StatusContainer>
        <Wrapper>
            <StatusMain>
            <StatusContent>
            <StatusCount>250+</StatusCount>
            <StatusMentor>Courses by our best mentors </StatusMentor>
            </StatusContent>
            <VerticalLine></VerticalLine>
            <StatusContent>
            <StatusCount>1000+</StatusCount>
            <StatusMentor>Courses by our best mentors</StatusMentor>
            </StatusContent>
            <VerticalLine></VerticalLine>
            <StatusContent>
            <StatusCount>15+</StatusCount>
            <StatusMentor>Courses by our best mentors</StatusMentor>
            </StatusContent>
            <VerticalLine></VerticalLine>
            <StatusContent>
            <StatusCount>2400+</StatusCount>
            <StatusMentor>Courses by our best mentors</StatusMentor>
            </StatusContent>
            </StatusMain>
            

        </Wrapper>
    </StatusContainer>
  )
}
const StatusContainer = styled.div`
    margin-top: 60px;
    background-color:#F8FAFC;
    `;
const Wrapper = styled.div`
      width: 90%;
      max-width: 1280px;
      margin-inline:  auto;
      `;
      
const StatusCount = styled.span`
    font-size:32px;
    color: #0F172A;
    font-weight:600;
    line-height:41.6px;`

const StatusMentor = styled.span`
    font-size:14px;
    color:#0F172A;
    font-weight:400;
    line-height:21px;`
    
const StatusMain = styled.div`
    display: flex;
`    

const StatusContent = styled.div`
    align-items: center;
    gap: 6px;
    padding:40px 71px;
    display: flex;
    flex-direction: column;`

const VerticalLine = styled.div`
    margin-top: 80px;
    rotate: -90deg;
    width: 55px;
    height: 0;
    border: 4px solid #E2E8F0;
`

export default Status