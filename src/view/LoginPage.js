import React, {useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {authUser, cleanErrors} from "../actions";
import {Formik} from "formik";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

const LoginWrapper = styled.div`
  /* margin-right: 200px;
    margin-left:200px;
    margin-top:30px; */
`;

const LoginPage = ({auth, isLogin, applicationError, clean}) => {
  useEffect(() => {
    return () => clean();
  }, []);

  return (
    <LoginWrapper>
      {applicationError && (
        <div className="notification is-danger is-light">
          <strong>Email or password is wrong!</strong>
        </div>
      )}

      <Formik
        initialValues={{useremail: "", userpassword: ""}}
        onSubmit={({useremail, userpassword}) => {
          auth(useremail, userpassword);
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
          if (isLogin) {
            return <Redirect to="/" />;
          }

          return (
            <form className="box" onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="useremail"
                    placeholder="e.g. alex@example.com"
                    value={values.useremail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="userpassword"
                    placeholder="********"
                    value={values.userpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <button className="button is-primary" type="submit">
                Sign in
              </button>
            </form>
          );
        }}
      </Formik>
    </LoginWrapper>
  );
};

LoginPage.propTypes = {
  auth: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  applicationError: PropTypes.node,
  clean: PropTypes.func.isRequired,
};

const mapStateToProps = ({user, applicationError}) => {
  const {isLogin} = user;
  return {
    isLogin,
    applicationError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (useremail, userpassword) =>
      dispatch(authUser(useremail, userpassword)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
