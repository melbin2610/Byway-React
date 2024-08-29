import React, { useState } from "react";
import styled from "styled-components";
import CourseDescription from "./CourseDescription";
import Instructor from "./Instructor";
import Syllabus from "./Syllabus";
import LearnerReviews from "./LearnerReviews";


function Main() {
  const [activeComponent, setActiveComponent] = useState("Description");

  const components = {
    Description: <CourseDescription />,
    Instructor: <Instructor />,
    Syllabus: <Syllabus />,
    LearnerReviews: <LearnerReviews />,
  };

  const renderComponents = () => {
    const orderedComponents = [];
    // Push the active component to the top
    orderedComponents.push(components[activeComponent]);

    // Push the other components in the original order
    Object.keys(components).forEach((key) => {
      if (key !== activeComponent) {
        orderedComponents.push(components[key]);
      }
    });

    return orderedComponents;
  };

  return (
    <Container>
      <Boxes>
        <Box>
          <Button
            style={{
              background:
                activeComponent === "Description" ? "#eff6ff" : "transparent",
            }}
            onClick={() => setActiveComponent("Description")}
          >
            Description
          </Button>
        </Box>
        <Box>
          <Button onClick={() => setActiveComponent("Instructor")}>
            Instructor
          </Button>
        </Box>
        <Box>
          <Button onClick={() => setActiveComponent("Syllabus")}>
            Syllabus
          </Button>
        </Box>
        <Box>
          <Button
            style={{
              background:
                activeComponent === "LearnerReviews"
                  ? "#eff6ff"
                  : "transparent",
            }}
            onClick={() => setActiveComponent("LearnerReviews")}
          >
            Reviews
          </Button>
        </Box>
      </Boxes>
      <div>
        {renderComponents().map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px 0;
`;

const Boxes = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding-bottom: 30px;
`;

const Box = styled.li``;

const Button = styled.button`
  width: 148px;
  height: 57px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  padding: 18px 21px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#eff6ff" : "transparent")};
  &:focus {
    background: #eff6ff;
    border: none;
  }
`;

export default Main;
