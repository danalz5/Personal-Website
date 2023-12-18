import "../css/ProfilePic.css"
import pfp from '../images/grad_pic.jpg';

function ProfilePic() {
    return (
        <div className="ImageContainer">
          <img src={pfp} className="pfp" alt="pfp_placeholder"/>
        </div>
    );
}

export default ProfilePic;