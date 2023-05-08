import pfp from '../images/pfp placeholder.png';
import '../css/AboutMe.css'
import LinksBox from './LinksBox.js';

function AboutMe() {
    return (
      <div className="AboutMe">
        <div className="ImageContainer">
          <img src={pfp} className="pfp" alt="pfp_placeholder"/>
        </div>
        <LinksBox/>
        <div className="AboutMeTextBox">
          <p className="AboutMeText">
          </p>
        </div>
      </div>
    );
  }
  
  export default AboutMe;