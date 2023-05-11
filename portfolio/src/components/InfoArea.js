import '../css/InfoArea.css';
import Arrow from '../images/left-arrow-svgrepo-com.svg'
import {useState} from 'react';
import createInfoArray from '../util/createInfoArray.js'

function InfoArea() {

  const InfoArray = createInfoArray(); // array that has info that will be displayed in the InfoTextBox div
  const [count, setCount] = useState(0); // keeps track of index of InfoArray
  const [spanClassName, setSpanClassName] = useState("InfoTextMoveLeft"); // sets the class name for the text to move in the correct direction after click left or right arrow
  const [buttonDisabled, setButtonDisable] = useState(false); //sets when button is disabled or enables

  
  // LeftArrowAction()
  // subtracts one to count unless it goes out of bounds for the InfoArray length,
  // in that case it loops back around to end of InfoArray
  // also disables buttons while animation of the InfoText finishes
  function LeftArrowAction () {
    if (count === 0) {
      setCount(InfoArray.length - 1);
    } else {
      setCount(count - 1);
    }
    setSpanClassName("InfoTextMoveRight");
    setButtonDisable(true);
    setTimeout(() => {setSpanClassName("InfoText"); setButtonDisable(false);}, 700); // enables button and the class name of span to it's default (no animation)
  }

  // RightArrowAction()
  // adds one to count unless it goes out of bounds for the InfoArray length,
  // in that case it loops back around to 0
  // also disables buttons while animation of the InfoText finishes
  function RightArrowAction() {
    if (count >= InfoArray.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setSpanClassName("InfoTextMoveLeft");
    setButtonDisable(true);
    setTimeout(() => {setSpanClassName("InfoText"); setButtonDisable(false);}, 700); // enables button and the class name of span to it's default (no animation)
  }

  return (
    <div className="InfoArea">
      <button onClick={LeftArrowAction} disabled={buttonDisabled}> <img className="LeftArrow" src={Arrow} alt="<-"/></button>
      <div className="InfoTextBox">
        <span className={spanClassName}>
          {InfoArray[count]}
        </span>
      </div>
      <button onClick={RightArrowAction} disabled={buttonDisabled}> <img className="RightArrow" src={Arrow} alt="->"/></button>
    </div>
  );
}

export default InfoArea;