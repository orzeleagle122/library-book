import styled from "styled-components";

export const FixedFooter = styled.footer`
  align-items: center;
  background-color: #262626;
  bottom: 0;
  color: #666666;
  display: flex;
  font-size: 5em;
  height: 400px;
  justify-content: center;
  position: fixed;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;
`;

export const FooterContent = styled.div`
  width: 850px;
  margin: auto;
  margin-bottom: 350px; /* Same height as footer */
  padding: 100px 0;
`;
