//H1 for headlines

//Dependencies
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1rem;
  color: ${props => props.theme.text};
  padding: 3px;
  text-transform: uppercase;
  text-align: center;
`;

export default Title;
