import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {editUser, cleanErrors} from "../../actions";
import {Formik} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";
import {Input} from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import {routers} from "../../data/routers";
import {Link} from "react-router-dom";

const RegisterWrapper = styled.div`
  /* margin-right: 500px;
    margin-left:500px;
    margin-top:30px; */
`;

const EditUserPage = ({edit, isLogin, showErrors, clean, userinfo}) => {
  useEffect(() => {
    return () => clean();
  }, [isLogin]);

  const {id, firstName, lastName, email} = userinfo;

  return (
    <RegisterWrapper>
      <Formik
        initialValues={{
          id: `${id}`,
          name: `${firstName}`,
          lastname: `${lastName}`,
          useremail: `${email}`,
          userpassword: "",
        }}
        onSubmit={({id, name, lastname, useremail, userpassword}) => {
          edit(id, name, lastname, useremail, userpassword);
        }}
      >
        {({
          values,
          // errors,
          // touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
          /* and other goodies */
        }) => {
          return (
            <>
              <form className="box" onSubmit={handleSubmit} autoComplete="off">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <Input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Last name</label>
                  <div className="control">
                    <Input
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <Input
                      type="email"
                      name="useremail"
                      value={values.useremail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <Input
                      type="password"
                      name="userpassword"
                      value={values.userpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="new-password"
                    />
                  </div>
                </div>
                <Link to={routers.user}>
                  <Button type="button">Back</Button>{" "}
                </Link>
                <Button type="submit" value="submit">
                  Edit profile
                </Button>
              </form>
              {showErrors && (
                <div className="notification is-danger is-light">
                  <strong>{showErrors}</strong>
                </div>
              )}
            </>
          );
        }}
      </Formik>
    </RegisterWrapper>
  );
};

EditUserPage.propTypes = {
  edit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  showErrors: PropTypes.node,
  clean: PropTypes.func.isRequired,
  userinfo: PropTypes.object,
};

const mapStateToProps = ({user, showErrors}) => {
  const {isLogin, userinfo} = user;
  return {
    isLogin,
    showErrors,
    userinfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (id, name, lastname, useremail, userpassword) =>
      dispatch(editUser(id, name, lastname, useremail, userpassword)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);
