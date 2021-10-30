import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import  "./Dialogs.css"; 
import { Redirect } from "react-router-dom";
import DialogsFormRedux from "./DialogsForm";

  
const Dialogs = (props) => {
  let dialogElements = props.messages.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
  let messagesElements = props.messages.messagesData.map(el => <Message message={el.message} />);
  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className="dialogs-wrapper">
      <div className="dialogs-items">
        {dialogElements}
      </div>
      <div className="dialogs-messages">
        <div className="dialogs-messages-posted">
          {messagesElements}
          </div>
        <div className="dialogs-new-message">
          <DialogsFormRedux onSubmit={addNewMessage}/>
      </div>
      </div>
    </div>
  );
};


export default Dialogs;