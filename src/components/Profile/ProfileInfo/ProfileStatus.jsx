import React, { useEffect, useState } from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import "./ProfileInfo.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  useEffect(() => {
    setStatus(props.status);

  }, [props.status]);


  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusThunk(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  if (props.profileData) {
    return <Preloader />;
  }
  return (
    <div className="status">
      {editMode ? (
        <div className="status-wrapper">
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            className="status-input"
            value={status}
          ></input>
        </div>
      ) : (
        <div className="status-wrapper">
          <span
            onDoubleClick={activateEditMode}
            className="current-status"
          >
              Статус: {status ? status : ""}
          </span>
        </div>
      )}
    </div>
  );
};

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };
//   activateEditMode = () => {
//     console.log(this);
//     this.setState({
//       editMode: true,
//     });
//   };
//   deactivateEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateStatusThunk(this.state.status);
//   };
//   onStatusChange = (e) => {
//     this.setState({ status: e.currentTarget.value });
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.status !== this.props.status) {
//       this.setState({ status: this.props.status });
//     }
//   }
//   render() {
//     if (this.props.profileData) {
//       return <Preloader />;
//     }
//     return (
//       <div className="status">
//         {this.state.editMode ? (
//           <div className="status-wrapper">
//             <input
//               onChange={this.onStatusChange}
//               autoFocus={true}
//               onBlur={this.deactivateEditMode}
//               className="status-input"
//               value={this.state.status}
//             ></input>
//           </div>
//         ) : (
//           <div className="status-wrapper">
//             <span
//               onDoubleClick={this.activateEditMode}
//               className="current-status"
//             >
//               Статус: {this.props.status ? this.props.status : ""}
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default ProfileStatusWithHooks;
