import  "./Message.css";  
  

const Message = (props) => {
  return (
    <div className="dialogs-message">{props.message}</div>
  )
}

export default Message;