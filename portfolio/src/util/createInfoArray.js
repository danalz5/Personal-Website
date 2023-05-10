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
                to learn enough to be able to consider myself a full stack developer. Teaching myself the basics of front-end 
                is one of the reasons I made this website!
                <br/><br/>
                If you want to learn more about me or see projects that I've worked on click the arrows!
            </p> 
        </>
    );
  
    InfoArray.push(
        <>
            <h1>Skills</h1>
            <p>
                Programming: C/C++, Java, Python, HTML/CSS/JS
                <br/><br/>
                For C/C++, Java, and Python my experience comes mostly from class.
                I first learned to program my freshman year of college in basic C and then
                learned Data Structures in C++. My experience in Java comes from a Software Design class
                I took that emphasized OOP. I did a couple projects in that class like making a chat room and 
                making the lottery game KENO. These projects also utilized JavaFX for the UI. My experience in
                Python comes from a class I took my sophomore year that taught us basic webscraping, data science
                tools like 'numpy' and 'pandas', and database tools like SQL. Lastly my knowledge in HTML/CSS/JSS is all self taught.
                I created this website partly to teach myself the basics of these languages and also the basics of React.js.
                <br/><br/>
                Soft Skills: <br/>
                I feel like my biggest strengths are how easily I can work with others and how quickly I can pick things up.
                I really like being a part of a group where we help each other and teach each other new skills. I pick things up quickly
                because I really enjoy learning new skills especially those in fields that I'm interested in.
            </p>
        </>
    );

    InfoArray.push(
        <>
            <h1>Project 1 : Environment Tracker (UIC)</h1>
            <p>
                This is a project I did for my Software Engineering 2 class in the Spring 2023 semester.
                It was a group of 4 of us and the goal of the project was to create a web application that
                students could use to track air quality readings in different buildings around campus and other
                popular areas near campus.
                <br/><br/>
                For this project me and one person in my group focused on front end while the other two members focused on
                the back end. For the project we used tools like React and Firebase. A big focus of the class was on employing
                different agile methodologies during devleopment. Our group utilized two different methodologies, Kanban and Scrum.
                We used the idea of a Work-In-Progress board heavily throughout development. Since each of us was still a student at
                the end of the day we had pretty conflicting schedules to we couldn't talk to each other every single day, so the WIP
                board helped us out alot. It was really useful in keeping track of what was being done and by who. As for scrum, we utilized
                the idea of sprints. It was a good way for us to plan the roadmap of development over the 12 weeks we worked on this project.
                <br/><br/>
                My contributions were mostly on the front end. My job was to focus on the map feature and to also make sure our UI looked
                clean and presentable. To create the map feature I used the React-Leaflet library which is a version of leaflet that
                takes advantage of React components. I made it so the map was populated with different markers that when clicked on
                would display air quality readings pulled from our database. One of the features on the map I also implemented were
                circles that would highlight areas where air quality readings were at unhealthy levels.
                <br/><br/>
                This project isn't on my github yet, but I'm planning on pushing it soon. I'm also planning on adding features myself that
                we didn't get to in the original version of the project. One of my ideas is to create a "News" page that pulls information from
                different sources to show things like severe weather warnings, tornado warnings, etc.
            </p>
        </>
    );

    InfoArray.push(
        <>
            <h1>Project 2 : Student Management Application</h1>
            <p>
                This was a project that I did for the Python class I took. The application allowed users to
                input student information and have it stored in a database. After adding students to the system
                the user could then lookup the inputted information such as student ID number or student email.
                The project is pretty simple but it was good for learning how to use SQL and making a simple
                python application.
                <br/><br/>
                This project also isn't on github yet but will be soon.
            </p>
        </>
    );

    InfoArray.push(
        <>
            <h1>Project 3 : This Website</h1>
            <p>
                I made this website for a couple of different reasons. First, again, to teach myself the basics of UI/UX and web development.
                It was also to make a portfolio and to tell more about myself than can be said on a resume or on LinkedIn. I used React.js to
                create this website so I could teach myself the basics of the framework. I know React is used alot in the industry so I was excited
                to learn more about it and what you can do with it.
                <br/> <br/>
                Some things I enjoyed while making this website was teaching myself how to make the UI more interactable and not just a static page
                that looked like a glorified google doc. I really liked messing around with animations, like the border around my picture, and seeing what I 
                could do with it. Getting animations, sliding text, and hover animations to work was a pretty big learning curve but there's plenty of resources
                online that helped me overcome it.
            </p>
        </>
    );

    InfoArray.push(
        <>
            <h1>Current Project Ideas</h1>
            <p>
                Journaling App:
                <br/> Recently I've heard that journalling really helps people so I want to make a journaling application. I was
                thinking of making it a mobile appliction to get into mobile development but I'm not sure yet.
                <br/> <br/>
                Book Tracker App:
                <br/> I really like to read so I thought it would be cool to make an application that tracks the books that I read.
                The goal is to have a list of books I want to read, a list of books I have read, and a list of books I'm currently reading.
                The app would also keep track of what page I'm on in each book and maybe even a rating system for personal use.
            </p>
        </>
    );
  
    return InfoArray;
    
}
export default createInfoArray;