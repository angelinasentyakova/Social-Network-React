import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
  _state: {
    profile: {
      postsData: [
        { id: 1, message: 'Hi! how are you?', },
        { id: 2, message: 'Hi! It is my post', },
      ],
      newPostText: "",
    },
    messages: {
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
      newMessageText: '',
    },
  },  
  _callSubscriber() {
    console.log('changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = dialogsReducer(this._state.messages, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;