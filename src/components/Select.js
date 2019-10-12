import React from "react";
import styled from "styled-components";

// export default function Select({ children }) {
//   return <SelectInput>{children}</SelectInput>;
// }
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
`;

export default function Select({ children, filter, onChange, selectedValue }) {
  return (
    <>
      <SelectInput
        onChange={event => {
          onChange(filter.title, event.target.value);
        }}
        value={selectedValue}
      >
        <option value="0">Language</option>
        {children};
      </SelectInput>
    </>
  );
}
