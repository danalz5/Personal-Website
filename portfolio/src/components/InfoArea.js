import '../css/InfoArea.css';
import Arrow from '../images/left-arrow-svgrepo-com.svg'

function InfoArea() {
    return (
      <div className="InfoArea">
        <button> <img className="LeftArrow" src={Arrow}/></button>
        <div className="InfoTextBox">
          <p className="InfoText">
          </p>
        </div>
        <button> <img className="RightArrow" src={Arrow}/></button>
      </div>
    );
  }
  
  export default InfoArea;