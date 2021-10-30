import { Redirect } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  

  return (
    <div>
      <ProfileInfo profileData={props.profileData} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
