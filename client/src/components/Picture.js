//Styling for images in AllergySelection and MyCardBox

//Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPicture = styled.img`
  height: 80%;
  background-color: white;
  padding: 3px;
`;

const Picture = ({ src, alt }) => {
  return <StyledPicture data-testid="picture" src={src} alt={alt} />;
};
export default Picture;

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
