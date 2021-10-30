import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginThunkAC } from "../../redux/authReducer"
import { LoginReduxForm } from "./LoginForm"
import "./Login.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div className='login-wrapper'>
      <h1 className='login-title'>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: loginThunkAC})(Login);