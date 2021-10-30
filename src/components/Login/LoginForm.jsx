import { Field, reduxForm } from "redux-form";
import { required } from "../../Utils/Validators/Validators";
import { Input } from "../../Common/FormControls/FormControls";


const LoginForm = ({handleSubmit, error}) => {
  return (
      <form onSubmit={handleSubmit}>
        <div>
        <Field validate={[required]} placeholder={"Email"} name={'email'} component={Input}/>
        </div>
        <div>
        <Field validate={[required]} placeholder={"Password"} name={'password'} type={'password'} component={Input}/>
        </div>
        <div>
        <Field type={"checkbox"} name={'remeberMe'} component={Input}/>Remeber me
      </div>
      {error &&
        <div className='form-error-message'>
          {error}
        </div>
      }
        <div> 
          <button>Log in</button>
        </div>
      </form>
  )
}

export const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)

export default LoginForm;