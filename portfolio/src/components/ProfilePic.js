import "../css/ProfilePic.css"
import pfp from '../images/pfp placeholder.png';

function ProfilePic() {
    return (
        <div className="ImageContainer">
          <img src={pfp} className="pfp" alt="pfp_placeholder"/>
        </div>
    );
}

export default ProfilePic;