import React, {useState} from "react";
import {Input} from "../../components/atoms/Input/Input";
import GenreList from "../../components/organisms/GenreList/GenreList";
import {connect} from "react-redux";
import {addGenre} from "../../actions";
import PropTypes from "prop-types";
import {routers} from "../../data/routers";
import {Redirect} from "react-router-dom";

const AddGenre = ({genre, rules}) => {
  const [value, setValue] = useState("");

  const handleOnChangeValueForm = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitAddGende = (e) => {
    e.preventDefault();
    // const randomId = Math.floor(Math.random() * 1000);
    genre(value);
    setValue("");
  };

  const isAdmin =
    rules?.toString() === "MODERATOR" || rules?.toString() === "ADMIN";
  if (!isAdmin) {
    return <Redirect to={routers.home} />;
  }

  return (
    <>
      <form onSubmit={handleSubmitAddGende}>
        <Input
          placeholder="Enter here genre type to add"
          onChange={handleOnChangeValueForm}
          value={value}
        />
      </form>

      <GenreList />
    </>
  );
};

AddGenre.propTypes = {
  genre: PropTypes.func.isRequired,
  rules: PropTypes.string,
};

const mapStateToProps = ({user}) => {
  const {role} = user.userinfo;
  const rules = role?.map((item) => item.name);
  return {
    rules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    genre: (genre) => dispatch(addGenre(genre)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGenre);
