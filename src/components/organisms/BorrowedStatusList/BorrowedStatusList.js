import React from "react";
import PropTypes from "prop-types";
import {
  StatusWrapper,
  BorrowWrapper,
  Date,
  BookInfo,
  Status,
  Start,
  End,
  BookTitle,
  Available,
  WrapperBookButtons,
  ViewBookButton,
  CurrentStatus,
  ChangeStatus,
  Ordered,
  Close,
} from "./BorrowedStatusList.elements";
import {Link} from "react-router-dom";

const BorrowedStatusList = (props) => {
  return (
    <>
      <StatusWrapper>
        <BorrowWrapper>
          <Date>
            <Start>{props.createdAt}</Start>
            <End>{props.expired}</End>
          </Date>
          <BookInfo>
            <BookTitle>{props.book.title}</BookTitle>
            <WrapperBookButtons>
              <Available>left: {props.book.available}</Available>
              <Link to={`/book/${props.book.id}/${props.book.title}`}>
                <ViewBookButton>View book</ViewBookButton>
              </Link>
            </WrapperBookButtons>
          </BookInfo>{" "}
          <Status>
            <CurrentStatus>
              status: {props.status === "NOT_APPROVED" && "not picked up yet!"}
              {props.status === "DEVOTED" && "book returned"}
              {props.status === "APPROVED" && "borrowed"}
            </CurrentStatus>
            <ChangeStatus>
              <Ordered>complite order</Ordered>
              <Close>close order</Close>
            </ChangeStatus>
          </Status>
        </BorrowWrapper>
      </StatusWrapper>
    </>
  );
};

BorrowedStatusList.propTypes = {
  props: PropTypes.array.isRequired,
  createdAt: PropTypes.any.isRequired,
  expired: PropTypes.any.isRequired,
  status: PropTypes.any.isRequired,
  book: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  id: PropTypes.number.isRequired,
};

export default BorrowedStatusList;
