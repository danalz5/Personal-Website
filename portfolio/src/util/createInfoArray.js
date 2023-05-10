// createInfoArray
// returns an Array full of html, each element is a different set of info
// to be displayed in the InfoArea
function createInfoArray() {

    const InfoArray = [];
    InfoArray.push(
      <>
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
      </>
    );
  
    InfoArray.push(<><h1>Skills</h1></>);
    InfoArray.push(<><h1>Project1</h1></>);
    InfoArray.push(<><h1>Project2</h1></>);
    InfoArray.push(<><h1>Project3</h1></>);
  
    return InfoArray;
    
}
export default createInfoArray;