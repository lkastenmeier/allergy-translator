import styled from "styled-components";
const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  @media (min-width: 400px) {
    justify-content: center;
    flex-direction: column;
  }
  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
  }
`;
export default ButtonContainer;
