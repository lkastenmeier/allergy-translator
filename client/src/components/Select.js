import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SelectInput = styled.select`
  -webkit-appearance: none;
  display: flex;
  text-align-last: center;
  width: 90%;
  height: 50px;
  margin: 7px auto;
  background-color: ${props => props.theme.light};
  border: 3px solid ${props => props.theme.medium};
  border-radius: 0px;
  color: ${props => props.theme.text};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  @media (min-width: 550px) {
    width: 550px;
    height: 60px;
  }
  :focus {
    outline: none !important;
    outline-offset: none !important;
  }
`;

export default function Select({ select, allergies }) {
  function onFilterSelect(event) {
    const { value } = event.target;
    select(value);
  }
  return (
    <SelectInput onChange={onFilterSelect} all>
      <option value="0">change language</option>
      {Object.entries(allergies.milk.languages).map(([key]) => (
        <option key={key}>{key}</option>
      ))}
    </SelectInput>
  );
}

Select.propTypes = {
  key: PropTypes.string,
  onChange: PropTypes.func
};
