import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; 
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { getStatusThunkAC, getUserPageThunkAC, updateStatusThunkAC } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
    }
    this.props.getUserPageThunk(userId);
    this.props.getStatusThunk(userId);
  }
  render() {
    return (
      <Profile {...this.props} profileData={this.props.profileData} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profileData: state.profile.profileData,
  status: state.profile.status,
  authorisedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, {
    getUserPageThunk: getUserPageThunkAC,
    updateStatusThunk: updateStatusThunkAC,
    getStatusThunk: getStatusThunkAC,
  }),
  withRouter,
  withAuthRedirect)
  (ProfileContainer)
