const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Alex', },
    { id: 2, name: 'Anna', },
    { id: 3, name: 'Andy', },
    { id: 4, name: 'Ira', },
    { id: 5, name: 'Lena', }
  ],
  messagesData: [
    { id: 1, message: 'Hi', },
    { id: 2, message: 'Yo', },
    { id: 3, message: 'How are you', },
    { id: 4, message: 'I am ok, and you', },
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      }
    default:
      return state;
  }
}


export const addMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody: newMessageBody
  }
}


export default dialogsReducer;