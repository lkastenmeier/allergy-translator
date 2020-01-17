//Searchfield to specify userlocation on HelpPage

//Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchfield = styled.input`
  display: flex;
  text-align-last: center;
  width: 95%;
  min-height: 50px;
  margin: 10px auto 5px auto;
  background-color: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.highlight};
  color: ${props => props.theme.text};
  font-size: 1rem;
  @media (min-width: 500px) {
    width: 300px;
  }
`;

export default function Searchfield({ input, placeholder }) {
  function onLocationInput(event) {
    //extract value and pass it to map via Help.js
    const { value } = event.target;
    input(value);
  }
  return (
    <StyledSearchfield
      data-testid="searchfield"
      placeholder={placeholder}
      onChange={onLocationInput}
    />
  );
}

Searchfield.propTypes = {
  input: PropTypes.func,
  placeholder: PropTypes.string
};
