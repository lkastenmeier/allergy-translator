import React from "react";
import PropTypes from "prop-types";
const apiKey = `${process.env.REACT_APP_GOOGLE_KEY}`;

export default function Iframe({ location }) {
  return (
    <iframe
      title="hospitals"
      location={location}
      style={{
        border: `0`,
        margin: `auto`,
        width: `95%`,
        height: `95%`
      }}
      src={`https://www.google.com/maps/embed/v1/search?&q=hospital+near+${location}&key=${apiKey}`}
    />
  );
}

Iframe.propTypes = {
  location: PropTypes.string
};
