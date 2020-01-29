//Warning-card with flexible image and text based on filterselections in Main.js

//Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWarningCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: white;
  border: 6px solid ${props => props.theme.highlight};
`;
const StyledImage = styled.img`
  width: 50%;
  height: 50%;
`;

const StyledText = styled.p`
  width: 83%;
  font-size: 1.2rem;
  color: ${props => props.theme.highlight};
  font-weight: bold;
  text-align: center;
  line-height: 30px;
`;

const WarningCard = ({ src, alt, text }) => {
  return (
    <StyledWarningCard>
      <StyledImage src={src} alt={alt} />
      <StyledText>{text}</StyledText>
    </StyledWarningCard>
  );
};
export default WarningCard;

WarningCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired
};
