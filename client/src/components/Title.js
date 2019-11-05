import styled from "styled-components";

const Title = styled.h1`
  font-size: 17px;
  color: ${props => props.theme.text};
  padding: 3px;
  text-transform: uppercase;
  text-align: center;
`;

export default Title;
