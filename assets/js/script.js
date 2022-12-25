var startBtn = document.getElementById("start");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("ChoiceA");
var choiceB = document.getElementById("ChoiceB");
var choiceC = document.getElementById("ChoiceC");
var choiceD = document.getElementById("ChoiceD");
var homePage = document.getElementById("quizDescription");
var quizContainer = document.getElementById("quizContainer");
var time = 60;
var hsList = [];


var score = 0

let i = 0

var questionSet = [
{
    question: "Commonly used data types do NOT include:",
    answerChoice: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    correctAnswer: 2
},
{
    question: "The condition of an if / else statement is enclosed with:",
    answerChoice: ["A. Quotes", "B. Curly Brackets", "C. Parenthesis", "D. Square Brackets"],
    correctAnswer: 2
},
{
    question: "String Values must be enclosed in ____ when being assigned to variables",
    answerChoice: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parenthesis"],
    correctAnswer: 2
},
{
    question: "Arrays in JavaScript can be used to store:",
    answerChoice: ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the Above"],
    correctAnswer: 3
},
{
    question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
    answerChoice: ["A. Javascript", "B. Terminal / Bash", "C. for Loops", "D. console.log()"],
    correctAnswer: 3
}];

