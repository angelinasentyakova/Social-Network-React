import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../Utils/Validators/Validators";
import { Textarea } from "../../Common/FormControls/FormControls";
import  "./Dialogs.css"; 

const maxLength20 = maxLengthCreator(20);

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} validate={[required, maxLength20]} name='newMessageBody' placeholder='Enter your message'/>
          <br/>
          <button className="new-post-send message-send">Send</button>
    </form>
  )
}

const DialogsFormRedux = reduxForm({
  form: 'DialogsNewMessage'})( DialogsForm)

export default DialogsFormRedux;