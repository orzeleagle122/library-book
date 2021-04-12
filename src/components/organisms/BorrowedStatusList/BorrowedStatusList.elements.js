import styled from "styled-components";
import Button from "../../../components/atoms/Button/Button";

export const StatusWrapper = styled.div``;

export const BorrowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
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
`;

export const BookTitle = styled.div`
  font-weight: 700px;
  font-size: 18px;
`;
export const Available = styled.div`
  font-size: 10px;
  background-color: #363636;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
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

export const CurrentStatus = styled.div`
  /* background-color: #ffe08a; */
`;
export const ChangeStatus = styled.div`
  display: flex;
  gap: 10px;
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
`;
