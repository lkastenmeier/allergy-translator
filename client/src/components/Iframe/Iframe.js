//Google-maps iframe with preset searchparameter "hospitals"

//Dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIframe = styled.article`
  margin: auto;
  width: 95%;
  height: 95%;
  border-radius: 2px;
  border: 3px solid ${props => props.theme.light};
`;

const iframeStyle = {
  //avoid inline-styling for iframe for better readability
  border: "0",
  margin: "auto",
  width: "100%",
  height: "100%"
};

export default function Iframe({ location }) {
  return (
    <StyledIframe>
      <iframe
        title="hospitals"
        location={location}
        style={iframeStyle}
        src={`https://www.google.com/maps/embed/v1/search?&q=hospital+near+${location}&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      />
    </StyledIframe>
  );
}

Iframe.propTypes = {
  location: PropTypes.string
};
