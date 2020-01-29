//Selectbox with eventhandler for languageselection

//Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSelect = styled.select`
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
`;

const Select = ({ select, allergies }) => {
  function onFilterSelect(event) {
    const { value } = event.target;
    select(value);
  }
  return (
    <StyledSelect onChange={onFilterSelect} all>
      <option value="0">change language</option>
      {Object.keys(allergies.milk.languages).map(key => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </StyledSelect>
  );
};
export default Select;

Select.propTypes = {
  key: PropTypes.string,
  onFilterSelect: PropTypes.func
};
