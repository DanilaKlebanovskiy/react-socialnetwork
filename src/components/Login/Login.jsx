import {Field, reduxForm} from "redux-form";
import {loginApi, profileApi} from "../../API/api";
import {setProfileStatus} from "../Redux/profile_reducer";
import {connect} from "react-redux";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        loginApi.postLogin(formData.login,formData.password,formData.remeberme).then(response => {
            console.log(response.data)
        })
    }
    return (<div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}  />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}  />
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





export default Login


