import styled, {css} from "styled-components";
import Button from "../../../components/atoms/Button/Button";

export const StatusWrapper = styled.div``;

export const BorrowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 30px 20px;
  border: 1px #d1d1d1 dotted;

  ${({status}) =>
    status === "NOT_APPROVED" &&
    css`
      background-color: #fffaeb;
    `}
  ${({status}) =>
    status === "DEVOTED" &&
    css`
      background-color: #cccccc;
    `}
  ${({status}) =>
    status === "APPROVED" &&
    css`
      background-color: #effaf5;
    `}

  @media screen and (max-width: 480px) {
    flex-direction: column;
    border: 1px #d1d1d1 dotted;
    padding: 30px 20px;
    justify-content: space-between;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
export const Start = styled.span`
  background-color: #48c78e;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  font-weight: 700px;
  font-size: 12px;
`;
export const End = styled.span`
  background-color: #f14668;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  font-weight: 700px;
  font-size: 12px;
`;
export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;

  @media screen and (max-width: 480px) {
    width: auto;
  }
`;

export const BookTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
export const Available = styled.div`
  font-size: 10px;
  background-color: #363636;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;

  ${({borrow}) =>
    borrow &&
    css`
      display: none;
    `}
`;
export const ViewBookButton = styled(Button)`
  height: 100%;
  font-size: 10px;
  background-color: #2d3ddf;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  margin: 0;
  padding: 0;
  border: 5px solid #2d3ddf;
`;

export const WrapperBookButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const CurrentStatus = styled.p`
  text-transform: uppercase;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;

  ${({status}) =>
    status === "NOT_APPROVED" &&
    css`
      color: #ffe08a;
    `}
  ${({status}) =>
    status === "DEVOTED" &&
    css`
      color: #363636;
    `}
  ${({status}) =>
    status === "APPROVED" &&
    css`
      color: #257953;
    `}
`;
export const ChangeStatus = styled.div`
  display: flex;
  gap: 10px;

  ${({borrow}) =>
    borrow &&
    css`
      display: none;
    `}
`;
export const Ordered = styled.button`
  background-color: #48c78e;
  color: white;
  font-size: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const Close = styled.button`
  background-color: #f14668;
  color: white;
  font-size: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`;
