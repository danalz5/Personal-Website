import '../css/InfoArea.css';
import Arrow from '../images/left-arrow-svgrepo-com.svg'

function InfoArea() {
    return (
      <div className="InfoArea">
        <button> <img className="LeftArrow" src={Arrow} alt="<-"/></button>
        <div className="InfoTextBox">
          <span className="InfoText">
            <h1>About Me</h1>
            <p>
              Hi, my name is Daniel Alzeidan! I'm currently working towards a B.S in Computer Science
              at the University of Illinois-Chicago and expect to graduate after the Fall 2023 semester.
              Right now I'm looking for an internship or entry level job as a software/web devleoper. I'm trying to teach
              myself UI/UX because I enjoy the creativity that comes with working on the front-end but eventually I want
              to learn enough to be able to consider myself a full stack devleoper. Teaching myself the basics of front-end 
              is one of the reasons I made this website!
              <br/><br/>
              If you want to learn more about me or see projects that I've worked on click the arrows!
            </p>
          </span>
        </div>
        <button> <img className="RightArrow" src={Arrow} alt="->"/></button>
      </div>
    );
  }
  
  export default InfoArea;