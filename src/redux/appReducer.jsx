import { getAuthUserDataThuckAC } from "./authReducer";



const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }        
    default:
      return state;
  }
}



export const inititalizedSuccesAC = () => {
  return {
    type: SET_INITIALIZED,
  }
}

export const inititalizeThunkAC = () => (dispatch) => {
  let promise = dispatch(getAuthUserDataThuckAC());
  promise.then(() => {
    dispatch(inititalizedSuccesAC());
  })
  
}

export default appReducer;
