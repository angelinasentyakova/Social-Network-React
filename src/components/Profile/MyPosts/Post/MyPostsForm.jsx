import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../../Utils/Validators/Validators";
import { Textarea } from "../../../../Common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field validate={[required, maxLength10]} component={Textarea} name='newPostBody' placeholder='Enter your post'/>

      <div></div>
<br/>
        <button className="new-post-send">Send</button>
</form>
  )
}

const  MyPostsFormRedux = reduxForm({
  form: 'NewPost'})(  MyPostsForm)

export default  MyPostsFormRedux;
