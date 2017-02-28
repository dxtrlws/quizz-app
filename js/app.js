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
        question: '"Whose "foul stench" did Leia say she recognized on the Death Star?"',
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
    ]   
};
var correct = 0;
var incorrect = 0;
var currentQuestion = 1;
var currentQuestionIndex = 0;
var $quiz = $('#quiz');
var $jsImage = $('.js-image');
var $choices = $('.choices');
var $quizQuestion = $('.quizQuestion');
var $jsQuestionCount = $('.js-questionCount');
var $jsScore = $('.js-score');



function renderQuiz() {
    renderQuestion(state, $quizQuestion);
    renderImage(state, $jsImage);
    renderChoices(state, $choices);
    renderScoreNum();
}

function renderQuestion(state, element) {
    var quizQuestion = '<h3>'+ state.questions[currentQuestionIndex].question + '</h3>';
    element.html(quizQuestion);

}

function renderImage (state, element) {
    var quizImage ='<img src="'+state.questions[currentQuestionIndex].image+'">';
    element.html(quizImage);
}

function renderChoices (state, element) {
    var choices = state.questions[currentQuestionIndex].choices.map(function(choice, index){
        return (
            '<li>' +
            '<input type="radio" name="user-answer" value="' + index + '" required>' +
            '<label>' + choice + '</label>' +
            '</li>'
        );
    });
    element.html(choices);
}

function renderScoreNum () {
    $jsQuestionCount.html('Question: ' + currentQuestion);
    $jsScore.html('Correct ' + correct + ' Incorrect ' + incorrect);
}

function checkAnswer (state) {
    debugger;
    var answer = $("input[name='user-answer']:checked").val();
    if (answer === state.questions[currentQuestionIndex].answer ){
        currentQuestionIndex ++;
        currentQuestion ++;
        correct ++
        renderQuiz();
    }else {
        incorrect ++;
        renderQuiz();
    }
}





//Event listeners
function formWatch (){
   $('#start').on("click", "button", function(){
    $('#start').hide();
    $('#quiz').toggle();
    $('.divider').toggle();
    renderQuiz() ;
   });

}

function submitAnswer() {
    $('#submit').click(function(state){
        // currentQuestionIndex ++;
        // currentQuestion ++;
        // renderQuiz();
        checkAnswer(state);
    });
}



$(function () {
    formWatch();
    submitAnswer();
});