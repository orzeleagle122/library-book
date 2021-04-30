import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {registerUser, cleanErrors} from "../../actions";
import {Formik} from "formik";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import PropTypes from "prop-types";
import {Input} from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import {routers} from "../../data/routers";
import {goTop} from "../../data/function";

const RegisterWrapper = styled.div`
  /* margin-right: 500px;
    margin-left:500px;
    margin-top:30px; */
`;

const RegisterPage = ({register, registerSuccess, showErrors, clean}) => {
  useEffect(() => {
    goTop();
    return () => clean();
  }, []);

  return (
    <RegisterWrapper>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          useremail: "",
          userpassword: "",
          repeatuserpassword: "",
        }}
        onSubmit={({name, lastname, useremail, userpassword}) => {
          register(name, lastname, useremail, userpassword);
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
          if (registerSuccess) {
            return (
              <>
                <article className="message is-info">
                  <div className="message-body">
                    <strong>Congratulations</strong>, your account has been
                    successfully created.
                  </div>
                </article>
                <Link to={routers.login}>
                  <button className="button is-success is-rounded">
                    Continue
                  </button>
                </Link>
              </>
            );
          }

          return (
            <>
              <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">First Name *</label>
                  <div className="control">
                    <Input
                      type="text"
                      name="name"
                      placeholder="e.g. Patrick"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Last name *</label>
                  <div className="control">
                    <Input
                      type="text"
                      name="lastname"
                      placeholder="e.g. Orlowski"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email *</label>
                  <div className="control">
                    <Input
                      type="email"
                      name="useremail"
                      placeholder="e.g. alex@example.com"
                      value={values.useremail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password *</label>
                  <div className="control">
                    <Input
                      type="password"
                      name="userpassword"
                      placeholder="********"
                      value={values.userpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Repeat password *</label>
                  <div className="control">
                    <Input
                      type="password"
                      name="repeatuserpassword"
                      placeholder="********"
                      value={values.repeatuserpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" value="submit">
                  Create account
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

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
  registerSuccess: PropTypes.bool.isRequired,
  showErrors: PropTypes.node,
  clean: PropTypes.func.isRequired,
};

const mapStateToProps = ({registerSuccess, showErrors}) => {
  return {
    registerSuccess,
    showErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (name, lastname, useremail, userpassword) =>
      dispatch(registerUser(name, lastname, useremail, userpassword)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
