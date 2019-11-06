import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WarningCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: white;
  border: 6px solid ${props => props.theme.highlight};
`;
const Image = styled.img`
  width: 50%;
  height: 50%;
`;

const Paragraph = styled.p`
  width: 83%;
  font-size: 1.2rem;
  color: ${props => props.theme.highlight};
  font-weight: bold;
  text-align: center;
  line-height: 30px;
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
