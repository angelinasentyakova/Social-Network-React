import { usersAPI } from "../api/api";
import { updateObjectinArray } from "../Utils/objectsHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  usersData: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: updateObjectinArray(state.usersData, action.userId, 'id', {followed: true } )
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: updateObjectinArray(state.usersData, action.userId, 'id', {followed: false } )
      };
    case SET_USERS:
      return {
        ...state,
        usersData: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export const setTotalUsersCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount,
  };
};

export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const getUsersThunkAC = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetchingAC(false));
  dispatch(setUsersAC(data.items));
  dispatch(setTotalUsersCountAC(data.totalCount));
  dispatch(setCurrentPageAC(currentPage));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
};

export const acceptFollowThunkAC = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.followUser.bind(usersAPI);
  let actionCreator = followAC;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
};

export const acceptUnfollowThunkAC = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
  let actionCreator = unfollowAC;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
};

export default usersReducer;
