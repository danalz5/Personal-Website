// createInfoArray
// returns an Array full of html, each element is a different set of info
// to be displayed in the InfoArea
function createInfoArray() {
    const linkStyle = {
        color: 'white',
    };
    const InfoArray = [];
    InfoArray.push(
        <>
            <h1>About Me</h1>
            <p>
                Hi, my name is Daniel Alzeidan! I'm a graduate from the University of Illinois - Chicago with a B.S. in Computer Science.
                Right now I'm looking for a job in the software engineering/development field. I'm also trying to
                teach myself new tools and technologies while I apply for jobs.
                Right now I'm working towards getting AWS certifications and teaching myself the basics of front-end 
                which is one of the reasons I made this website!
                <br/><br/>
                If you want to learn more about me or see projects that I've worked on click the arrows!
            </p> 
        </>
    );
  
    InfoArray.push(
        <>
            <h1>Skills</h1>
            <p>
                Programming: C/C++, Java, Python, HTML/CSS/JS, SQL
                <br/>
                Tools/Technologies: React, matplotlib/seaborn, VSCode, pycharm, numpy, pandas
                <br/><br/>
                Most of my programming knowledge comes from classes I took in college. HTML/CSS/JS and React knowledge come from
                from putting this website together. I've also done a couple of class projects with them too.
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
                For this project we were tasked with using Agile Methodologies throughout the semester when developing our application.
                Our group used Kanban and Scrum across the 12 week development process.
                <br/><br/>
                My contributions were mostly on the front end. My job was to focus on the map feature and to also make sure our UI looked
                clean and presentable. To create the map feature I used the React-Leaflet library which is a version of leaflet that
                takes advantage of React components. I made it so the map was populated with different markers that when clicked on
                would display air quality readings pulled from our database. One of the features on the map I also implemented were
                circles that would highlight areas where air quality readings were at unhealthy levels.
            </p>
        </>
    );
    
    InfoArray.push(
        <>
            <h1>Project 2 : Connect Food</h1>
            <p>
                This is a group project I did for my User Interface Design class. This website was made without the use of a framework.
                Our task was to solve a user experience problem so our group's idea was to solve how difficult it is for people, especially those
                with dietary restrictions, to find dishes they can eat. The concept of the app is that you would add friends who could upload recommendations
                with certain criteria as well as recipes. Since this was a UI Design class we were told not to implement backend.
                My main job was the homepage, the navbar, the profile page, and making sure styling was consistent across all pages. 
                The profile page can be edited and preferences can be set and that determines which dishes can be recommended to the user. For example if a user sets
                that they are vegetarian they would only be shown recommendations that are vegetarian. I also got to play around with and learn about the localStorage
                API to make sure information on the website was consistent across each page and persisted between uses. If you want to play around on the webpage there
                is a link below!
            </p>
            <a href="https://connect-food.vercel.app" style={linkStyle} target="_blank" rel="noopener noreferrer">
                https://connect-food.vercel.app
            </a>
        </>
    );

    InfoArray.push(
        <>
            <h1>Project 3 : Student Management Application</h1>
            <p>
                This was a project that I did for the Python class I took. The application allowed users to
                input student information and have it stored in a database. After adding students to the system
                the user could then lookup the inputted information such as student ID number or student email.
                The project is pretty simple but it was good for learning how to use SQL and making a simple
                python application.
            </p>
        </>
    );

    InfoArray.push(
        <>
            <h1>Project 4 : This Website</h1>
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