import React from "react";
import styled from "styled-components";

const SelectInput = styled.select`
  display: flex;
  flex-direction: row;
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

export default function Select({ select, allergyData }) {
  function handleFilter(event) {
    const { value } = event.target;
    select(value);
  }
  return (
    <SelectInput onChange={handleFilter} all>
      <option value="0">change language</option>
      {Object.entries(allergyData.milk.languages).map(([key]) => (
        <option value={key} key={key}>
          {key}
        </option>
      ))}
    </SelectInput>
  );
}
