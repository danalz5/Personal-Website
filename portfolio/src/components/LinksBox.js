import "../css/LinksBox.css"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import email from "../images/email.png"

function LinksBox() {
  return (
    <div className="LinksBox">
      <ul>
        <li> <a href="https://www.linkedin.com/in/daniel-alzeidan/" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="LinkedIn"/> </a> </li>
        <li> <a href="https://github.com/danalz5" target="_blank" rel="noopener noreferrer"> <img src={github} alt="GitHub"/> </a> </li>
        <li> <a href="mailto:danielalzeidan@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={email} alt="Email"/> </a> </li>
      </ul>
    </div>
  );
}

export default LinksBox;