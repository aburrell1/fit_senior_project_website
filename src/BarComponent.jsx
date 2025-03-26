import React from "react";
import styled from "styled-components";

// Styled Component for the Separator Bar
const SeparatorBar = styled.div`
  width: 100%;
  height: 4px; /* Thickness of the bar */
  background: linear-gradient(to right, #ff4500, #ffcc00); /* Gradient effect */
`;

const BarComponent = () => {
  return <SeparatorBar />;
};

export default BarComponent;