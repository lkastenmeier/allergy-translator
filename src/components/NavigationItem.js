import React, { useState } from "react";
import styled from "styled-components";

const NavigationItemBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e3ebee;
  border-style: "solid";
  border-width: 3px 1.5px 3px 1.5px;
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #2d5f73;
`;

export default function NavigationItem({ children }) {
  const [navigationSelect, setNavigationSelect] = useState(false);
  return (
    <NavigationItemBtn
      onClick={() => setNavigationSelect(true)}
      style={{
        border: navigationSelect ? " transparent" : "3px solid #bfccdd"
      }}
    >
      {children}
    </NavigationItemBtn>
  );
}
