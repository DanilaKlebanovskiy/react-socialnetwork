import {Field, reduxForm} from "redux-form";
import {loginApi, profileApi} from "../../API/api";
import {setProfileStatus} from "../Redux/profile_reducer";
import {connect} from "react-redux";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/validators";
import {authThunk, loginThunk} from "../Redux/auth_reducer";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.login,formData.password,formData.remeberme)
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
                <Field validate = {[required,maxLength30]} placeholder={"Password"} name={"password"} component={Input}  />
            </div>
            <div>
                <Field type = {"checkbox"}  name={"remeberme"} component={"input"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => (
    {

    })



export default connect(mapStateToProps, {loginThunk})(Login)


