import React, {useState} from "react";
import {Input} from "../components/atoms/Input/Input";
import GenreList from "../components/organisms/GenreList/GenreList";
import {connect} from "react-redux";
import {addGenre} from "../actions";
import PropTypes from "prop-types";

const AddGenre = ({genre}) => {
  const [value, setValue] = useState("");

  const handleOnChangeValueForm = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitAddGende = (e) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random() * 1000);
    genre(randomId, value);
    setValue("");
  };

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
};

const mapDispatchToProps = (dispatch) => {
  return {
    genre: (randomId, genre) => dispatch(addGenre(randomId, genre)),
  };
};

export default connect(null, mapDispatchToProps)(AddGenre);
