import "./Users.css";
import React from "react";
import Paginator from "../../Common/paginator/Paginator";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  debugger;
  return (
    <div className="users-wrapper">
      <Paginator
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {props.usersData.map((user) => (
        <div className="user-wrapper" key={user.key}>
          <div className="left-column">
            <div className="user-photo-wrapper">
              <NavLink to={"/profile/" + user.id}>
                <img
                  className="user-photo"
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                />
              </NavLink>
            </div>
            <div className="button-wrapper">
              {user.followed ? (
                <button
                  className="user-button"
                  onClick={() => {
                    props.unfollowThunk(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="user-button"
                  onClick={() => {
                    props.followThunk(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="right-column">
            <div className="user-info">
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div className="user-location">
              <div>Moscow</div>
              <div>Russia</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
