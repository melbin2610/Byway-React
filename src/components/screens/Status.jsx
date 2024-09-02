import React from "react";
import styled from 'styled-components'


import { useEffect, useState } from "react";

function Status() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      <StatusContainer>
        <Wrapper>
          <Items>
            {status.map((item) => (
              <Item key={item.id}>
                <Number>{item.count}+</Number>
                <Info>{item.info}</Info>
              </Item>
            ))}
          </Items>
        </Wrapper>
      </StatusContainer>
    </>
  );
}
const StatusContainer = styled.div`
  background: #f8fafc;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0px;
  max-width: 1280px;

  @media (max-width: 768px) {
    padding: 30px 0px;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    gap: 25px;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Item = styled.div`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    width: 55px;
    height: 0; /* Adjust as needed */
    border-bottom: 4px solid #e2e8f0;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(204%) rotate(-90deg);
  }

  @media (max-width: 1280px) {
    &:not(:last-child)::after {
      transform: translateX(170%) rotate(-90deg);
    }
  }

  @media (max-width: 980px) {
    flex: 1 1 calc(50% - 16px);
    text-align: center;
    &:not(:last-child)::after {
      transform: translateX(75%) rotate(-90deg);
    }

    &:nth-child(2)::after {
      content: none;
    }
  }

  @media (max-width: 768px) {
    &:not(:last-child)::after {
      border-bottom: 3px solid #e2e8f0;
    }
  }

  @media (max-width: 600px) {
    &:not(:last-child)::after {
      border-bottom: 2px solid #e2e8f0;
    }
  }

  @media (max-width: 480px) {
    &:not(:last-child)::after {
      width: 35px;
      transform: translateX(90%) rotate(-90deg);
    }
  }

  @media (max-width: 320px) {
    &:not(:last-child)::after {
      content: none; /* Disable the after effect */
    }

    &:nth-last-child(-n + 3) {
      border-top: 1px solid #e2e8f0;
      padding-top: 20px;
    }
  }
`;

const Number = styled.h3`
  margin-bottom: 8px;
  color: #0f172a;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 41.6px;

  @media (max-width: 768px) {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const Info = styled.p`
  color: #0f172a;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: 768px) {
    line-height: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default Status;
