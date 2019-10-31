import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WarningCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: white;
  border: 6px solid ${props => props.theme.highlight};
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: ${props => props.theme.highlight};
  font-weight: bold;
  text-align: center;
  line-height: 40px;
`;

export default function WarningCard({ src, alt, text }) {
  return (
    <WarningCardDiv>
      <Image src={src} alt={alt} />
      <Paragraph>{text}</Paragraph>
    </WarningCardDiv>
  );
}

WarningCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired
};
