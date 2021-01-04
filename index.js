var answerButton = document.querySelector('.answer-button');
var clearButton = document.querySelector('.clear-button');
var eightballImage = document.querySelector('.eightball-image');
var questionInput = document.querySelector('#askquestion');
var questionInput2 = document.querySelector('.question-input');
var answerInput = document.querySelector('.answer-text');

answerButton.addEventListener('click', getAnswer);
clearButton.addEventListener('click', clearAnswer);

function getAnswer() {
    var question = questionInput.value;
    console.log(question);
    alertNoInput(question);
};
function clearAnswer() {
    displayEightBall();
    hideAnswer();
};
function hideEightBall() {
    eightballImage.classList.add('hidden');
};
function displayEightBall() {
    eightballImage.classList.remove('hidden');
};
function displayAnswer() {
    questionInput2.classList.remove('hidden');
    answerInput.classList.remove('hidden');
}
function hideAnswer() {
    questionInput2.classList.add('hidden');
    answerInput.classList.add('hidden');
}
function insertQuestion(question) {
    console.log('b=', question);
    questionInput2.innerText = `\"${question}\"`;
}
function clearInputField() {
    questionInput.value = "";
}
function insertAnswer(answer) {
    answerInput.innerText = `${answer}`;
}
function generateRandomIndex() {
    return Math.floor(Math.random() * 20)
};
function alertNoInput(question) {
    console.log(question);
    if (`${question}` === "") {
        return alert('Enter Value Please');
    } else {
        var index = generateRandomIndex();
        console.log(possibleAnswers[index]);
        console.log('yes');
        var answer = possibleAnswers[index];
        hideEightBall(question);
        displayAnswer();
        insertQuestion(question);
        insertAnswer(answer);
        clearInputField();
    }; 
};

var possibleAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

//-----------------Iteration 0: Build Out Comp
//1) images of comp below
//2) An assets directory is provided in the repo, and colors are provided in the CSS file
//3) Do not spend time making this page responsive to screen size

//DONE. 
//Areas to improve - input button size, formating, & button placement.

//------------------Iteration 1: Add Random Message Functionality

//1) When a user types in a question then clicks the "Get your answer" 
// button, the user sees their question and a random answer from the list of 
// possible answers (a list of the possible random answers is provided below)

//User types in question.... target, capture value                                  DONE
//User clicks get answer.... target, listen, function to return random answer       DONE
//Make array of possible answers                                                    DONE
//Create display hide for eight ball & answer                                       DONE
//Use innertext to for answer                                                       DONE


//2) The input field the user typed the question into should clear as soon          DONE
// as they click the "Get your answer" button
//3) When the question and answer appear, the image of the 8 ball disappears        DONE


//--------------Iteration 2: Clear Functionality, error checking

//1) The user can also click a clear button, which clears the page of any 
// message. User should only be able to click the clear button if a question/answer 
// are visible. When the clear button is clicked and the question/answer are removed, 
// the image of the 8 ball should re-appear.

//2)  User should not be able to ask for an answer unless they have typed           DONE
//something into the question box.

//FORMAT QUESTION & ANSWER
