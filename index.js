const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButton.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'In SpongeBob SquarePants, what is the name of the guy who yells "My leg!!"?',
        answers: [
            { text: 'Fred', correct: true },
            { text: 'Bob', correct: false },
            { text: 'George', correct: false },
            { text: 'Frank', correct: false }
        ]
    },
    {
        question: 'Where is the Slytherin common room?',
        answers: [
            { text: 'Astronomy Tower', correct: false },
            { text: 'South Wing', correct: false },
            { text: 'Dungeons', correct: true },
            { text: 'Great Hall', correct: false }
        ]
    },
    {
        question: 'You can rent and stay in a giant potato on AirBnB.',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Which human body part cant heal itself?',
        answers: [
            { text: 'Nails', correct: false },
            { text: 'Kidneys', correct: false },
            { text: 'Lymph Nodes', correct: false },
            { text: 'Teeth', correct: true }
        ]
    },
    {
        question: 'What is the only planet that rotates clockwise?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venus', correct: true },
            { text: 'Neptune', correct: false },
            { text: 'Uranus', correct: false }
        ]
    },
    {
        question: 'What is the correct name for this symbol: #?',
        answers: [
            { text: 'Octothorpe', correct: true },
            { text: 'Aglet', correct: false },
            { text: 'Hashtag', correct: false },
            { text: 'Pound', correct: false }
        ]
    },
    {
        question: 'How many hearts do octopuses have?',
        answers: [
            { text: 'Five', correct: false },
            { text: 'Three', correct: true },
            { text: 'Four', correct: false },
            { text: 'Two', correct: false }
        ]
    },
    {
        question: 'How old was the oldest cat?',
        answers: [
            { text: '31 years old', correct: false },
            { text: '27 years old', correct: false },
            { text: '38 years old', correct: true },
            { text: '29 years old', correct: false }
        ]
    },
    {
        question: 'What is the the worlds smallest country by landmass?',
        answers: [
            { text: 'Malta', correct: false },
            { text: 'Bhutan', correct: false },
            { text: 'Vatican City', correct: true },
            { text: 'Tuvalu', correct: false }
        ]
    },
    {
        question: 'Who is the oldest Kardashian Sister?',
        answers: [
            { text: 'Kourtney Kardashian', correct: true },
            { text: 'Kim Kardashian', correct: false },
            { text: 'Khloe Kardashian', correct: false },
            { text: 'Kandace Kardashian', correct: false }
        ]
    },
]