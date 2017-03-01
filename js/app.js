var state = {
    questions: [
    {
        question: "Which of these characters who didn't originally appear in the 1977 'Star Wars' movie was digitally added in the 1997 special edition re-release?",
        choices: ["Qui-Gon-Jinn", "Jabba the Hut", "Yoda", "Watto"],
        answer: "Jabba the Hut",
        image: "images/question1.jpg"
    },
    {
        question: "What was Anakin Skywalker's mom's name?",
        choices: ["Shmi", "Lakshmi", "Beru", "Smee"],
        answer: "Smee",
        image: "images/question2.jpg"
    },
    {
        question: '"Why, you slimy, double-crossing, no-good swindler."',
        choices: ["Greedo", "Han Solo", "Obi-wan Kenobe", "Lando Calrissian"],
        answer: "Lando Calrissian",
        image: "images/question3.jpg"
    },
    {
        question: "Who played Darth Vader on the set of the movie?",
        choices: ["David Prowse", "Peter Mayhew", "Anthony Daniels", "James Earl Jones"],
        answer: "David Prowse",
        image: "images/question4.jpg"
    },
    {
        question: "What location stood in for the Forest Moon of Endor?",
        choices: ["The RedWood Forests of Northern California", "Monteverde Cloud Forest in Costa Rica", "Daintree Rainforest in Australia", "The Black Forest in Germany"],
        answer: "The RedWood Forests of Northern California",
        image: "images/question5.jpg"
    },
    {
        question: "Name this vehicle",
        choices: ["AT-ST Walker", "AT-AT Walker", "Dog Walker", "Attack Walker"],
        answer: "AT-AT Walker",
        image: "images/question6.jpg"
    },
    {
        question: '"I am altering the deal. Pray I don\'t alter it any further."',
        choices: ["Jabba the Hutt", "Darth Vader", "Grand Moff Tarkin", "Lando Calrissian"],
        answer: "Darth Vader",
        image: "images/question7.jpg"
    },
    {
        question: 'Whose "foul stench" did Leia say she recognized on the Death Star?',
        choices: ["Darth Vader", "The Emperor", "Dianoga", "Grand Moff Tarkin"],
        answer: "Grand Moff Tarkin",
        image: "images/question8.jpg"
    },
    {
        question: "Which of these was not one of Darth Sidious' Sith apprentices?",
        choices: ["Darth Vader", "Darth Tyranus", "Darth Maul", "General Grievous"],
        answer: "General Grievous",
        image: "images/question9.jpg"
    },
    {
        question: "What micro-organisms are said to be conductors of the Force?",
        choices: ["Force Ghost", "Chlorimidians", "Mitochondria", "Medichlorians"],
        answer: "Medichlorians",
        image: "images/question10.jpg"
    }
    ],
    correct: 0,
    incorrect: 0,
    currentQuestion: 1,
    currentQuestionIndex: 0,
    lastQuestionAnswered: false
};

// Variables
var $jsImage = $('.js-image');
var $choices = $('.choices');
var $quizQuestion = $('.quizQuestion');
var $jsQuestionCount = $('.js-questionCount');
var $jsScore = $('.js-score');


// Renders quiz
function renderQuiz() {
    renderQuestion(state, $quizQuestion);
    renderImage(state, $jsImage);
    renderChoices(state, $choices);
    renderScoreNum(state);
}

// Renders questions
function renderQuestion(state, element) {
    var quizQuestion = '<h3>'+ state.questions[state.currentQuestionIndex].question + '</h3>';
    element.html(quizQuestion);

}

// Renders image
function renderImage (state, element) {
    var quizImage ='<img src="'+state.questions[state.currentQuestionIndex].image+'">';
    element.html(quizImage);
}

// Renders choices 
function renderChoices (state, element) {
    var choices = state.questions[state.currentQuestionIndex].choices.map(function(choice, index){
        debugger;
        return (
            '<li>' +
            '<input type="radio" name="user-answer" value="' + choice + '" required>' +
            '<label>' + choice + '</label>' +
            '</li>'
        );
    });
    element.html(choices);
}

// Renders current question number and score
function renderScoreNum (state) {
    $jsQuestionCount.html('Question: ' + state.currentQuestion + ' /10');
    $jsScore.html('Correct ' + state.correct + ' Incorrect ' + state.incorrect);
}

// Checks answser and advances to next question
function checkAnswer (state, answer) {

    if (answer === state.questions[state.currentQuestionIndex].answer ){
        state.currentQuestionIndex ++;
        state.currentQuestion ++;
        state.correct ++
        renderQuiz();
    }else {
        state.incorrect ++;
        state.currentQuestionIndex ++;
        state.currentQuestion ++;
        renderQuiz();
    }
}

function renderFeedback(state, element) {
    if (state.currentQuestion === 10){
        //do something
    } else {
        renderQuiz();
    }
}


//Event listeners
function formWatch (){
   $('#start').on("click", "button", function(){
    $('#start').hide();
    $('#quiz').toggle();
    $('.divider').toggle();
    $('#submit').toggle();
    renderQuiz() ;
   });

}

$('form[name="quizQuestions"]').on('submit', function(e){
    e.preventDefault();
    var answer = $(event.currentTarget).find(':checked').val();
    checkAnswer(state, answer);

});

// function submitAnswer() {
//     $('#submit').click(function(event){
//         event.preventDefault();
//         if (state.currentQuestion < state.questions.length){
//             state.currentQuestionIndex ++;
//             state.currentQuestion ++;
//             renderQuiz();
//         } else {
//
//         }
//
//         // checkAnswer(state);
//     });
// }



$(function () {
    formWatch();
    submitAnswer();
});