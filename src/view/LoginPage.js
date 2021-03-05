import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {authUser} from '../actions';
import {Formik} from 'formik';
import {Redirect} from 'react-router-dom';

const LoginWrapper=styled.div`
    margin-right: 200px;
    margin-left:200px;
    margin-top:30px;
`;

const LoginPage = ({auth,userToken}) => {
    return ( 
        <LoginWrapper>
            <Formik
                initialValues={{ useremail: '', userpassword: '' }}
                onSubmit={({useremail,userpassword})=>{
                    auth(useremail,userpassword);
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
                if(userToken){
                    return <Redirect to='/' />
                }

               return (
                
                <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                    <input className="input" 
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
                    <input className="input" 
                            type="password"
                            name="userpassword" 
                            placeholder="********"
                            value={values.userpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}                             
                            />
                    </div>
                </div>

                <button className="button is-primary" type="submit">Sign in</button>
                {userToken}
                </form>
            )}
            }
            </Formik>
        </LoginWrapper>
     );
}

const mapStateToProps=({user})=>{
    const {userToken}=user;
    return {
        userToken
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        auth:(useremail,userpassword)=>dispatch(authUser(useremail,userpassword))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);