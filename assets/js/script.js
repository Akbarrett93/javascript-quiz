var startBtn = document.getElementById("start");
var questionTitle = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var homePage = document.getElementById("quizDescription");
var quizContainer = document.getElementById("quizContainer");
var answerFeedback = document.getElementById("response");
var timerBox = document.getElementById("timerSection");
var timerSpan = document.getElementById("timer");
var hsButton = document.getElementById("hsButton");
var gameEnd = document.getElementById("gameEnd");
var hsBlock = document.getElementById("highScores");
var scoreValue = document.getElementById("score");
var scoreBlock = document.getElementById("scoreList");
var submitBtn = document.getElementById("submitBtn");
var homeBtn = document.getElementById("goBack");
var clearBtn = document.getElementById("hsClear");
var hsBtn = document.getElementById("hsButton");

var hsList = [];
var hsShow = "";

var time = 61;
var timeLeft = true
var timeStart = false;

var score = 0
let i = 0

function timerCount() {
    if (timeStart = true);
        time--;
    if (time <= 0){
        endQuiz();
        time = 0
    };
    timerSpan.textContent = time;
};

startBtn.addEventListener("click", function() {
    timeStart = true;
    quizContainer.style.display = "block";
    timerBox.style.display = "block";
    homePage.style.display = "none";
    hsButton.style.display = "none";
    setInterval(timerCount, 1000);
    timerCount();
    quizSet();
});


function quizSet () {
    questionTitle.textContent = questionSet[i].question;
    choiceA.textContent = questionSet[i].answerChoice[0];
    choiceB.textContent = questionSet[i].answerChoice[1];
    choiceC.textContent = questionSet[i].answerChoice[2];
    choiceD.textContent = questionSet[i].answerChoice[3];
};

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
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoice: ["A. Javascript", "B. Terminal / Bash", "C. for Loops", "D. console.log()"],
        correctAnswer: 3
}];

choiceA.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionSet[i].correctAnswer;

    if(0 === correctAnswer){
        answerFeedback.textContent = "Correct!";

        score++
    } else {
        answerFeedback.textContent = "Wrong!";
        timeLeft -= 5;
    }

    if (i >= questionSet.length - 1){
        endQuiz();
    } else {
        i++
        quizSet();
    }
});

choiceB.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionSet[i].correctAnswer;

    if(1 === correctAnswer){
        answerFeedback.textContent = "Correct!";

        score++
    } else {
        answerFeedback.textContent = "Wrong!";
        timeLeft -= 5;
    }

    if (i >= questionSet.length - 1){
        endQuiz();
    } else {
        i++
        quizSet();
    }
});

choiceC.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionSet[i].correctAnswer;

    if(2 === correctAnswer){
        answerFeedback.textContent = "Correct!";

        score++
    } else {
        answerFeedback.textContent = "Wrong!";
        timeLeft -= 5;
    }

    if (i >= questionSet.length - 1){
        endQuiz();
    } else {
        i++
        quizSet();
    }
});

choiceD.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionSet[i].correctAnswer;

    if(3 === correctAnswer){
        answerFeedback.textContent = "Correct!";

        score++
    } else {
        answerFeedback.textContent = "Wrong!";
        timeLeft -= 5;
    }

    if (i >= questionSet.length - 1){
        endQuiz();
    } else {
        i++
        quizSet();
    }
});

function endQuiz() {
    quizContainer.style.display = "none";
    homePage.style.display = "none";
    timerBox.style.display = "none";
    hsButton.style.display = "block";
    gameEnd.style.display = "block";
    answerFeedback.textContent = "";
    scoreValue.textContent = score;
    clearInterval(timerCount);
};

function submitScore() {
    hsList.push(document.getElementById("initials").value + " scored " + score + ".");
    getList();
};

function getList() {
    hsBlock.style.display = "block";
    quizContainer.style.display = "none";
    timerBox.style.display = "none";
    hsButton.style.display = "none";
    gameEnd.style.display = "none";
    homePage.style.display = "none";

    hsShow = "";
    for(let x = 0; x < hsList.length; x++){
        hsShow = hsShow + " " + hsList[x];
    }
   scoreBlock.textContent = hsShow;
    restart();
};

function goHome() {
    hsBlock.style.display = "none";
    homePage.style.display = "block";
    hsButton.style.display = "block";
}

function hsClear () {
    hsList = [];
};

function restart() {
    time = 60;
    timeLeft = true;
    timeStart = false;
    i = 0
    score = 0
}


submitBtn.onclick = submitScore;
clearBtn.onclick = hsClear;
homeBtn.onclick = goHome;
hsBtn.onclick = getList;