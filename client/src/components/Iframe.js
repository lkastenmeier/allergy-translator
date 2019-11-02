import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const apiKey = `${process.env.REACT_APP_GOOGLE_KEY}`;

const Frame = styled.article`
  margin: auto;
  width: 97%;
  height: 97%;
  border-radius: 2px;
  border: 3px solid ${props => props.theme.light};
`;

export default function Iframe({ location }) {
  return (
    <Frame>
      <iframe
        title="hospitals"
        location={location}
        style={{
          border: `0`,
          margin: `auto`,
          width: `100%`,
          height: `100%`
        }}
        src={`https://www.google.com/maps/embed/v1/search?&q=hospital+near+${location}&key=${apiKey}`}
      />
    </Frame>
  );
}

Iframe.propTypes = {
  location: PropTypes.string
};
