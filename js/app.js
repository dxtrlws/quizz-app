var state = {
    questions: [
    {
        question: "Which of these characters who didn't originally appear in the 1977 'Star Wars' movie was digitally added in the 1997 special edition re-release?",
        choices: ["Qui-Gon-Jinn", "Jabba the Hut", "Yoda", "Watto"],
        answer: 1,
        image: "images/question1.jpg"
    },
    {
        question: "What was Anakin Skywalker's mom's name?",
        choices: ["Shmi", "Lakshmi", "Beru", "Smee"],
        answer: 3,
        image: "images/question2.jpg"
    },
    {
        question: '"Why, you slimy, double-crossing, no-good swindler."',
        choices: ["Greedo", "Han Solo", "Obi-wan Kenobe", "Lando Calrissian"],
        answer: 3,
        image: "images/question3.jpg"
    },
    {
        question: "Who played Darth Vader on the set of the movie?",
        choices: ["David Prowse", "Peter Mayhew", "Anthony Daniels", "James Earl Jones"],
        answer: 0,
        image: "images/question4.jpg"
    },
    {
        question: "What location stood in for the Forest Moon of Endor?",
        choices: ["The RedWood Forests of Northern California", "Monteverde Cloud Forest in Costa Rica", "Daintree Rainforest in Australia", "The Black Forest in Germany"],
        answer: 0,
        image: "images/question5.jpg"
    },
    {
        question: "Name this vehicle",
        choices: ["AT-ST Walker", "AT-AT Walker", "Dog Walker", "Attack Walker"],
        answer: 1,
        image: "images/question6.jpg"
    },
    {
        question: '"I am altering the deal. Pray I don\'t alter it any further."',
        choices: ["Jabba the Hutt", "Darth Vader", "Grand Moff Tarkin", "Lando Calrissian"],
        answer: 1,
        image: "images/question7.jpg"
    },
    {
        question: '"Whose "foul stench" did Leia say she recognized on the Death Star?"',
        choices: ["Darth Vader", "The Emperor", "Dianoga", "Grand Moff Tarkin"],
        answer: 3,
        image: "images/question8.jpg"
    },
    {
        question: "Which of these was not one of Darth Sidious' Sith apprentices?",
        choices: ["Darth Vader", "Darth Tyranus", "Darth Maul", "General Grievous"],
        answer: 3,
        image: "images/question9.jpg"
    },
    {
        question: "What micro-organisms are said to be conductors of the Force?",
        choices: ["Force Ghost", "Chlorimidians", "Mitochondria", "Medichlorians"],
        answer: 3,
        image: "images/question10.jpg"
    }
    ],
    correct: 0,
    incorrect: 0,
    currentQuestionIndex: 0,
    route: 'start',
    lastAnswerCorrect: false
};

// State modifications
function setRoute (state, route) {
    state.route = route;
}

function resetGame(state){
    state.score = 0;
    state.currentQuestionIndex = 0;
    setRoute = (state, 'start');
}

function answerQuestion(state, answer) {
    var currentQuestion = state.questions[state.currentQuestionIndex];
    
}

// Render functions



//Event listeners




$(function () {
    
});