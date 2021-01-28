# blue-monday-planner
Simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.



![Jquery and Javascript Workday Planner](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/Calendar.png?raw=true "Jquery and Javascript Workday Planner")

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
     <li>
      <a href="https://fac-73.github.io/blue-monday-planner/">View project</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Jquery and Javascript Workday Planner](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/initialScreen.png?raw=true "Jquery and Javascript Workday Planner")
<br><br>

**Built using Javascript, Jquery, HTML and CSS. This daily planner application provides a list of rows with text inputs. These 9 rows map to each hour of a working day (9am-5pm). A user can add an event to each row using the text input and clicking save. If the input content is changed and focus is moved, the save button will alert the user to click it to save changes to localStorage. <br><br> Once saved the events will be saved to the application even after the page is refreshed. The row color will change based on the time of the day. Current hour displays as pink, upcoming hours as green. Hours passed are displayed in gray**


### Built With

* [HTML](https://www.w3schools.com/)
* [CSS](https://www.w3schools.com/)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Javascript](https://www.w3schools.com/)
* [Jquery](https://jquery.com/)
* [FontAwesome](https://fontawesome.com/)
* [Moment.js](https://momentjs.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps. You can also download the source files provided. You will need a text editor such as Visual Studio Code, Xcode or similar to edit the source code.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FAC-73/blue-monday-planner.git
   ```

2. Pull the latest
   ```sh
   git pull
   ```


<!-- USAGE EXAMPLES -->
## Usage

![Jquery and Javascript Workday Planner](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/Quiz-start.png?raw=true "Jquery and Javascript Workday Planner")

#### What's included
1. HTML, CSS and Javascript (incl. Jquery) files include the source code for running the timed quiz application
2. This project demonstrates ways in which javavscript and jquery can be used to manipulate the DOM elements, store and pass data to and from variables, and dynamically update HTML and trigger interactions through the use of Jquery eventListeners. 


## Project deliverables

#### Included functionality
1. The planner list includes 9 rows, each row representative of an hour of the work day from 9am to 5pm. 

![Day planner list](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/initialScreen.png?raw=true "Day planner list")
<br>

2. Each row is color coded. Pink denotes the current hour of the day, Teal represents hours left/upcoming. Gray represents time elapsed/passed.

![Multiple selection answers](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/Questions-Init.png?raw=true  "Multiple selection answers")
<br>

![Selected option](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/Question-select.png?raw=true "Selected option")
<br>

3. The current date is displayed in the header of the page.

![Incorrect answer](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/incorrect-answer.png?raw=true "Incorrect answer")
<br>

4. Onload a pre-defined event is included so that the planner doesn't appear empty. 

![Correct answer](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/correct-answer.png?raw=true "Correct answer")
<br>

5. To add an event to an hour clicking or focus on a row and type the name of the event into the input. 

![Add/update event](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/FocusAhead.png?raw=true "Add/update event")
<br>

6. Clicking save stores the event to localStorage. If focus is lost from the input prior to clicking save, the save button pulses orange until the user actions the button. The event will not be saved to localStorage if this is not actioned, and changes are lost. 

A prevent default method is used to stop the default behavior of the input to clear the content on submit.

7. If the user leaves the page, refreshes or closes the browser. On subsequent reload the events are stored and shown when the page has loaded. 

![Save score or play again?](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/score-total.png?raw=true "Save score or play again?")
<br>

8. To delete an event. Remove the text from the input and click save. Again, if focus is lost after removing text the save button will pulse to alert the user to commit the change. Otherwise it will not be saved in localStorage. 

![Add initials and save score](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/Add-initials.png?raw=true "Add initials and save score")
<br>

9. Saved score and initials are stored in list, along with two actions:
- Remove score
- Play again

![Displaying saved score](https://github.com/FAC-73/coding-quiz/blob/main/Assets/Images/SaveScores.png?raw=true "Displaying saved score]")


Remove score deletes the list item. Play again restarts the quiz from the beginning.

<br>


#### HTML, CSS and Javascript & Jquery
1. Index.html - Contains basic layout structure using a custom div element named 'quizContainer' to display the main content for the quiz such as question text, questions list, timer and form elements. 
Semantic html is used for elements such as buttons, inputs, footers, header, h1, li. 

- For improved accessibility the aria-role="timer" has been included in the div where the timer is displayed. Along with the aria-live="polite" announcement to inform a screenreader user that the timer is incrementing/decrementing. 

2. styles.css - Contains layout, styling and media-queries for html content

3. script.js - Contains Variables, variable arrays and objects for the questions and multiple choice answers, variable for correct answer types. 
- Five eventListeners one to iterate through the questions, one to start the quiz, one to reset it,  another to submit form details to generate a list item, and a final one to remove a saved highscore from the list. 
- A loop for iterating through the questions list and generating the new choice list for each one. 
- A setInterval timer function that's triggered by an eventListener, functions to reset, deduct and restart the timer. 
- If, Else statements for validating whether the selected answer is correct, or undefined. If correct they are iterated onto the next question and the correct score is added to the variable correctAnswers, along with a correct message indicator. 
- If incorrect 10s is removed from the running timer using the deductTime function, an incorrect message is displayed. If an incorrect answer takes the timer to a value of <=0 the quiz is automatically restarted
- Functions for creating a new list item to store a users score along with their initials using JSON stringify method. These initials and scores are stored in local storage so that they stay persistent.


#### Responsive view example - On mobile
![Responsive layout](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/Mobile1.png?raw=true "Responsive views")

![Responsive layout](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/MobileInput.PNG?raw=true "Responsive views")


#### Pushing to GitHub

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureName`)
3. Commit your Changes (`git commit -m 'Add some FeatureName`)
4. Push to the Branch (`git push origin feature/FeatureName`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. 

See [LICENSE](https://github.com/FAC-73/blue-monday-planner/blob/main/LICENSE) for more information.



<!-- CONTACT -->
## Contact

Kay Davis

Project repo link: [https://fac-73.github.io/blue-monday-planner/](https://fac-73.github.io/blue-monday-planner/
<br>
Project website: [https://github.com/FAC-73/blue-monday-planner](https://github.com/FAC-73/blue-monday-planner)
