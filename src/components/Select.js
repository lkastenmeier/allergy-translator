import React from "react";
import styled from "styled-components";

const SelectInput = styled.select`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 50px;
  margin: 10px;
  background-color: #e3ebee;
  border: 3px solid #bfccdd;
  color: #2d5f73;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 120px;
`;

export default function Select({
  name,
  children,
  filter,
  onChange,
  selectedValue
}) {
  return (
    <>
      <SelectInput
        onChange={event => {
          onChange(filter.title, event.target.value);
        }}
        value={selectedValue}
      >
        <option name={name} value="0">
          {name} ▽
        </option>
        {children}
      </SelectInput>
    </>
  );
}
