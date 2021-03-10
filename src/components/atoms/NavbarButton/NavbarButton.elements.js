import styled from 'styled-components';

export const StyledButton=styled.button`
    display:block;
    background-color: transparent;
    width:68px;
    height:68px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    border:none;
    margin-top: 50px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-weight:700;
    color:white;
    cursor:pointer;

    &:hover{
        background-color: white;
        color: #2d3ddf;
        transition: ease-in 0.2s;
    }

    .active & {
        background-color: white;
        color: #2d3ddf;
    }

  /* display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: red;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase; */
`;