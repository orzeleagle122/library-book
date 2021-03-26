import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  background-color: transparent;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: white;
  cursor: pointer;
  /* why here? later check globalstyle */
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: white;
    color: #2d3ddf;
    transition: ease-in 0.2s;
  }

  .active & {
    background-color: white;
    color: #2d3ddf;
  }

  @media screen and (max-width: 480px) {
    width: 58px;
    height: 58px;
    font-weight: 400;
    font-size: 10px;
  }
`;
