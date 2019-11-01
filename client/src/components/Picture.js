import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PictureBox = styled.img`
  height: 111px;
  background-color: white;
`;

export default function Picture({ src, alt }) {
  return <PictureBox src={src} alt={alt} />;
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
