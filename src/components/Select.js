import React from "react";
import styled from "styled-components";
// import { allergyData } from "../api/DummyData";

const SelectInput = styled.select`
  display: flex;
  flex-direction: row;
  text-align-last: center;
  width: 90%;
  min-height: 50px;
  margin: 10px 0px 10px 20px;
  background-color: #e3ebee;
  border: 3px solid #bfccdd;
  color: #2d5f73;
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
