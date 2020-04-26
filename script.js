var questiontext = document.getElementById('questiontext');

questiontext.textContent = "" ;

var answeroption1 = document.getElementById('answeroption1');

answeroption1.textContent = "";

var answeroption2 = document.getElementById('answeroption2');

answeroption2.textContent = "";

var answeroption3 = document.getElementById('answeroption3');

answeroption3.textContent = "";

var finalAnswer = document.getElementById('finalAnswer');

var finalDisplay = document.getElementById('finalDisplay');

var points = 0;


answeroption1.addEventListener("click",answer1);

answeroption2.addEventListener("click",answer2);

answeroption3.addEventListener("click",answer3);

var codeQuiz = [{
    question:"Who invented JavaScript?",
    answer: ["Douglas Crockford","Sheryl Sandberg","Brendan Eich"],
    correct: 3,
},  
    {
    question:"Which one of these is a JavaScript package manager?",
    answer: ["Node.js","TypeScript","npm"],
    correct: 3,

    },
    {
    question:"Which tool can you use to ensure code quality?",
    answer: ["ESLint","JQuery","Angular"],
    correct: 1,
    },
    {
    question:"Which built-in method returns the calling string value converted to Upper case?",
    answer: ["toUpperCase()","toUpper()","ChangeCase(case)",],
    correct: 1,
    },
    {
    question:"Which built-in method calls a function for each element in the array?",
    answer: ["While()","loop()","forEach()",],
    correct: 3,

    }



];
var secondsLeft = 75;
var countdownTimerId = setInterval (displayTime, 1000);

function displayTime(){
    var seconds = secondsLeft--;
    if (seconds > 0) {
        document.querySelector(".timer").innerHTML = seconds+" seconds";
    }
    else {
        clearInterval(countdownTimerId);
        document.querySelector(".timer").innerHTML = "Game Over!";

    }
}

var currentQuestion=0;

function showQuestion () {
    var quiz= codeQuiz[currentQuestion];

    questiontext.textContent = quiz.question;
    answeroption1.textContent = quiz.answer[0];
    answeroption2.textContent = quiz.answer[1];
    answeroption3.textContent = quiz.answer[2];
}

function answer1(){
    answer(1);
}
function answer2(){
    answer(2);
}
function answer3(){
    answer(3);   
}
    
function answer(input){
    var quiz= codeQuiz[currentQuestion];
    if ( quiz.correct == input){
        finalAnswer.textContent = "Correct";
        points++;
    }
    else {
        finalAnswer.textContent = "Wrong";
        secondsLeft -=20;
    }
    currentQuestion++;
    if (codeQuiz.length == currentQuestion){
        finalDisplay.textContent = "Final Score  "+points;
        showintialInput();
      
    }
    showQuestion();
    
}
function hideintialInput(){
    var x = document.getElementById("initialInput");
    x.style.display = "none"
}
function showintialInput(){
    var x = document.getElementById("initialInput");
    x.style.display = "block"
}


hideintialInput();
showQuestion();
