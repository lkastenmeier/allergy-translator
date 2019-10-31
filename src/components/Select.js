import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SelectInput = styled.select`
  display: flex;
  text-align-last: center;
  width: 90%;
  min-height: 50px;
  margin: 10px 0px 10px 20px;
  background-color: ${props => props.theme.light};
  border: 3px solid ${props => props.theme.medium};
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default function Select({ select, allergies }) {
  function handleFilter(event) {
    const { value } = event.target;
    select(value);
  }
  return (
    <SelectInput onChange={handleFilter} all>
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
