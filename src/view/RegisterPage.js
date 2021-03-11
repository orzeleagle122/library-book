import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
    registerUser,
    cleanErrors
} from '../actions';
import {Formik} from 'formik';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

const RegisterWrapper=styled.div`
    margin-right: 500px;
    margin-left:500px;
    margin-top:30px;
`;

const RegisterPage = ({register,isLogin,err,errClean}) => {

    useEffect(()=>{
        return errClean;
    },[isLogin,errClean]);

    return ( 
        <RegisterWrapper>
            {console.log(isLogin)}
            <Formik
                initialValues={{ name:'',lastname:'', useremail: '', userpassword: '',repeatuserpassword:'' }}
                onSubmit={({useremail,userpassword})=>{
                    register(useremail,userpassword);
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
                if(isLogin){
                    return (
                        <>
                            <article className="message is-info">
                            <div className="message-body">
                                <strong>Congratulations</strong>, your account has been successfully created.
                            </div>                        
                            </article>
                            <Link to='/'>
                                <button className="button is-success is-rounded">Continue</button>
                            </Link>
                        </>
                    )
                }

               return (
                <>
                <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                    <input className="input" 
                            type="text" 
                            name="name"
                            placeholder="e.g. Patrick"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Last name</label>
                    <div className="control">
                    <input className="input" 
                            type="text" 
                            name="lastname"
                            placeholder="e.g. Orlowski"
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>
                </div>
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
                <div className="field">
                    <label className="label">Repeat password</label>
                    <div className="control">
                    <input className="input" 
                            type="password"
                            name="repeatuserpassword" 
                            placeholder="********"
                            value={values.repeatuserpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}                             
                            />
                    </div>
                </div>

                <button className="button is-primary" type="submit">Sign in</button>
                </form>
                                {err && (
                                    <div className="notification is-danger is-light">                    
                                    <strong>Something went wrong</strong>
                                    </div>
                                )}
                                </>
            )}
            }
            </Formik>
        </RegisterWrapper>
     );
}

const mapStateToProps=({user})=>{
    const {isLogin,err}=user;
    return {
        isLogin,
        err
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        register:(
            useremail,
            userpassword
            )=>dispatch(registerUser(useremail,userpassword)),
        errClean:()=>dispatch(cleanErrors())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage);