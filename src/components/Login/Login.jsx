import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/validators";
import {authThunk, loginThunk} from "../Redux/auth_reducer";
import {Redirect} from "react-router-dom";
import React from "react";


const Login = (props) => {

    const onSubmit = (data) => {

        props.loginThunk(data.login,data.password,data.remeberme)

    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (<div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate = {[required,maxLength20]} placeholder={"Login"} name={"login"} component={Input}  />
            </div>
            <div>
                <Field validate = {[required,maxLength30]} placeholder={"Password"} type={"password"} name={"password"} component={Input}  />
            </div>
            <div>
                <Field type = {"checkbox"}  name={"remeberme"} component={"input"}/>Remember me
            </div>
        {/*    <div className={s.form-summary-error}>
                Error
            </div>*/}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)


const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        catcha: state.auth.captchaUrl

    }
}



export default connect(mapStateToProps, {loginThunk})(Login)

/*export default compose(connect(null, {loginThunk}),
    withProfileRedirect
)(Login)*/

