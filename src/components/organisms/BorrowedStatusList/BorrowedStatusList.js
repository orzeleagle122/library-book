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
import {connect} from "react-redux";
import {changeStatus, searchEmailUser} from "../../../actions";

const BorrowedStatusList = (props) => {
  const {change, searchUsers, search} = props;
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
              <Ordered
                onClick={() => {
                  change(props.id, "APPROVED");
                }}
              >
                complite order
              </Ordered>
              <Close
                onClick={() => {
                  change(props.id, "DEVOTED");
                  search(searchUsers.email);
                }}
              >
                close order
              </Close>
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
  change: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchUsers: PropTypes.any,
};

const mapStateToProps = ({searchUsers}) => {
  return {
    searchUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (id, status) => dispatch(changeStatus(id, status)),
    search: (email) => dispatch(searchEmailUser(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedStatusList);
