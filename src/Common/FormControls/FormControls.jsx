import { Field } from 'redux-form';
import './FormControls.css'

const FormControl = ({ input, meta, children, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? 'error' : ''}>
      {children}
      <br></br>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}


export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps }></textarea></FormControl>
}

export const Input = (props ) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><input {...input} {...restProps }></input></FormControl>
}
