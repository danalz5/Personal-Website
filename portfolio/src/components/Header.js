import LinksBox from './LinksBox.js';
import ProfilePic from './ProfilePic';
import "../css/Header.css"

function Header() {
    return(
        <div className="Header">
            <ProfilePic/>
            <LinksBox/>
        </div>
    );
}

export default Header;