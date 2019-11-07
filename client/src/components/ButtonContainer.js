import styled from "styled-components";
const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px auto;
  position: fixed;
  bottom: 12px;
  width: 100%;
  background: ${props => props.theme.medium};
`;
export default ButtonContainer;
