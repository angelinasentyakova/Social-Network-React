import "./ProfileInfo.css";
import Preloader from "../../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus";

const ProfileInfo = (props) => {
  debugger
  if (!props.profileData) {
      return <Preloader />
  }
  return (
    <div className="profile-info-wrapper">
      {/* <div className="main-img-wrapper">
        <img
          className="main-img"
          src="https://pbs.twimg.com/media/DYGCeusXUAEx8QS.jpg"
        ></img>
      </div> */}
      <div className="profile-info">
        <div className="profile-img-wrapper">
          <img
            className="profile-img"
            src={props.profileData.photos.small ? props.profileData.photos.small : userPhoto }
          ></img>
        </div>
        <div className="profile-info-info">
          <div className="profile-name">Имя:{props.profileData.fullName}</div>
          <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
