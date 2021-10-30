import { connect } from "react-redux";
import { acceptFollowThunkAC, acceptUnfollowThunkAC, getUsersThunkAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    
  }
  onPageChange = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} usersData={this.props.usersData} followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk} />
      </>
  }
}

let mapStateToProps = (state) => {
    return {
      usersData: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),    
    }
  };

// let mapStateToProps = (state) => {
//   return {
//     usersData: state.users.usersData,
//     pageSize: state.users.pageSize,
//     totalUsersCount: state.users.totalUsersCount,
//     currentPage: state.users.currentPage,
//     isFetching: state.users.isFetching,    
//   }
// };

export default UsersContainer = connect(mapStateToProps, {
    unfollowThunk: acceptUnfollowThunkAC,
    followThunk: acceptFollowThunkAC,
    setTotalUsersCount: setTotalUsersCountAC,
    getUsersThunk: getUsersThunkAC,
  })(UsersContainer);