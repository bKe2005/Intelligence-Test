const pitanje = document.getElementById("question")
const answer1 = document.getElementById("leftButton")
const answer2 = document.getElementById("rightButton")
const answer3 = document.getElementById("left2Button")
const answer4 = document.getElementById("right2Button")
const score = document.getElementById("score")
const record = document.getElementById("record")
const time = document.getElementById("time")
const startbutton = document.getElementById("startButtom")
const footer = document.getElementById("footer")
const content = document.getElementById("content")
const endp = document.getElementById("endParagraph")
const contentH2 = document.getElementById("contentTitle")
const h1 = document.getElementById("h1")

let currentrecord = 0;
record.innerHTML = 0;
let currentQuestionIndex = 0;
let currentScore = 0;



const allTheQuestions = [
    pitanje4 = {
        title: "Chess was made in ____",
        correctAnswer: "6. century",
        otherAnswers: ["9. century", "6. century", "2. century", "10. century"]
    },
    pitanje2 = {
        title: "What is the longest river in the world?",
        correctAnswer: "Nil",
        otherAnswers: ["Amazon", "Jang ce kjang", "Nil", "Mississippi"]
    },
    pitanje1 = {
        title: "Biggest animal in water is ____",
        correctAnswer: "Lion’s Mane Jellyfish",
        otherAnswers: ["Giant Pacific Octopus", "Lion’s Mane Jellyfish", "Antarctic blue whale", "Whale Shark"]
    },
    pitanje3 = {
        title: "What is the highest mountain in Bosnia?",
        correctAnswer: "Maglić",
        otherAnswers: ["Maglić", "Kozara", "Bjelašnica", "Vlašić"]
    },
    pitanje5 = {
        title: "What gets wetter the more it dries? ",
        correctAnswer: "Towel",
        otherAnswers: ["Ocean", "Sponge", "Person", "Towel"]
    },
    pitanje6 = {
        title: "What is the capital of Somalia? ",
        correctAnswer: "Mogadish",
        otherAnswers: ["Mogadish", "Kinshasa", " Adis Abeba", "Asmara"]
    },

    pitanje7 = {
        title: "Who won fifth ever Fifa world cup? ",
        correctAnswer: " Switzerland",
        otherAnswers: ["Spain", "Sweden", " Switzerland", "Brazil"]
    },
    pitanje8 = {
        title: "What was first sport ever? ",
        correctAnswer: "Wrestling",
        otherAnswers: ["Wrestling", "Running", "  Swimming", "Archery"]
    },
    pitanje9 = {
        title: "Whats 18th letter of the alphabet? ",
        correctAnswer: "R",
        otherAnswers: ["Q", "R", " O", "S"]
    },
    pitanje10 = {
        title: "How many months have 28 days? ",
        correctAnswer: "12",
        otherAnswers: ["1", "2", " 6", "12"]
    },
    pitanje11 = {
        title: "What is average brain weight? ",
        correctAnswer: "1,25-1,5",
        otherAnswers: ["1,25-1,5", "1,1-1,7", "1-2", "2,1-2,5"]
    },
    pitanje12 = {
        title: "Song informer was released in ____ ",
        correctAnswer: "1993.",
        otherAnswers: ["2001.", "1997.", "1978.", "1993."]
    },
    pitanje13 = {
        title: "Most mentioned prophet in Qur'an is ____ ",
        correctAnswer: "Moses",
        otherAnswers: ["Salih", "Jesus", "Mohammed", "Moses"]
    },
    pitanje14 = {
        title: "Who said: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.' ",
        correctAnswer: "Benjamin Franklin",
        otherAnswers: ["Benjamin Franklin", "Anne Frank", "Abraham Lincoln", "Albert Einstein"]
    },
    pitanje15 = {
        title: "Solve: 6 / 2 (1 + 2) = ?",
        correctAnswer: "9",
        otherAnswers: ["1", "7", "9", "3"]
    },
    pitanje16 = {
        title: "π is 3.14",
        correctAnswer: "1592",
        otherAnswers: ["1518", "1592", "1582", "1581"]
    },
    pitanje17 = {
        title: "Area of the Earth is ____",
        correctAnswer: "510.100.000 km²",
        otherAnswers: ["40.100.000 km²", "410.100.000 km²", "510.000.000 km²", "510.100.000 km²"]
    },
]


function wrongAnswer() {
    h1.style.marginTop = "15%"
    pitanje.style.visibility = "hidden"
    answer1.style.visibility = "hidden"
    answer2.style.visibility = "hidden"
    answer3.style.visibility = "hidden"
    answer4.style.visibility = "hidden"
    footer.style.visibility = "hidden"
    content.style.visibility = "visible"

    contentH2.innerHTML = "Sadly you answered wrong :(("
    endp.innerHTML = "Better luck next time!!"
    setTimeout(() => {
        window.location.reload()
    }, 4000)

}

function buttonClick(event) {
    let niz = [];
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 4);
        for (let j = 0; j < niz.length; j++)
            if (niz[j] == num) {
                num = Math.floor(Math.random() * 4);
                j = -1;
            }
        niz.push(num)
    }
    const answer = event.target.innerHTML
    const question = allTheQuestions[currentQuestionIndex]
    if (answer === question.correctAnswer) {
        event.target.style.boxShadow = "1px 1px 66px 8px rgba(16,237,53,0.82)";
        currentQuestionIndex += 1
        const newQuestion = allTheQuestions[currentQuestionIndex]
        setTimeout(() => {
            pitanje.innerHTML = newQuestion.title
            const answers = newQuestion.otherAnswers
            answer1.innerHTML = answers[niz[0]]
            answer2.innerHTML = answers[niz[1]]
            answer3.innerHTML = answers[niz[2]]
            answer4.innerHTML = answers[niz[3]]
            score.innerHTML = currentScore += 1
            score2 = score.innerHTML
            event.target.style.boxShadow = "none";
        }, 1000)

    }

    else {
        event.target.style.boxShadow = "1px 1px 66px 8px rgba(255, 51, 51)";
        setTimeout(() => {
            wrongAnswer();
        }, 1000)
    }
}

answer1.addEventListener("click", buttonClick)
answer2.addEventListener("click", buttonClick)
answer3.addEventListener("click", buttonClick)
answer4.addEventListener("click", buttonClick)

currentrecord = localStorage.getItem("record");


function setUp() {
    score.innerHTML = 0
    time.innerHTML = "30 seconds remaining"
    record.innerHTML = currentrecord;
}

setUp()

function startbtn() {
    let niz = [];
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 4);
        for (let j = 0; j < niz.length; j++)
            if (niz[j] == num) {
                num = Math.floor(Math.random() * 4);
                j = -1;
            }
        niz.push(num)
    }

    h1.style.marginTop = "5%"
    answer1.style.visibility = "visible"
    answer2.style.visibility = "visible"
    answer3.style.visibility = "visible"
    answer4.style.visibility = "visible"
    footer.style.visibility = "visible"
    document.getElementById("startButtom").remove()
    const question = allTheQuestions[currentQuestionIndex]
    pitanje.innerHTML = question.title
    const answers = question.otherAnswers
    answer1.innerHTML = answers[niz[0]]
    answer2.innerHTML = answers[niz[1]]
    answer3.innerHTML = answers[niz[2]]
    answer4.innerHTML = answers[niz[3]]

    var timeLeft = 30;
    var elem = document.getElementById("time");
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            endTitle();
        }
        else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
}
startbutton.addEventListener("click", startbtn)

function endTitle() {

    function recordkeepup() {
        if (score.innerHTML > currentrecord) {
            record.innerHTML = currentrecord;
            localStorage.setItem("record", score.innerHTML);
            console.log(currentrecord)
        }
    }

    pitanje.style.visibility = "hidden"
    answer1.style.visibility = "hidden"
    answer2.style.visibility = "hidden"
    answer3.style.visibility = "hidden"
    answer4.style.visibility = "hidden"
    footer.style.visibility = "hidden"
    content.style.visibility = "visible"

    contentH2.innerHTML = "Your time is up!!"
    recordkeepup()
    if (score.innerHTML > record.innerHTML) {
        h1.style.marginTop = "15%"
        parText = ["Your score is ", score.innerHTML, "and the best score is, or should i say was", currentrecord]
        endp.innerHTML = parText.join(' ')
        setTimeout(() => {
            window.location.reload()
        }, 4000)
    }
    else if (score.innerHTML < record.innerHTML) {
        h1.style.marginTop = "15%"
        parText = ["Your score is ", score.innerHTML, "but, the record is", currentrecord, ",better luck next time!!"]
        endp.innerHTML = parText.join(' ')
        setTimeout(() => {
            window.location.reload()
        }, 4000)
    }
    else {
        h1.style.marginTop = "15%"
        parText = ["Your score is ", score.innerHTML, "but, the record is", record.innerHTML, ",so you are tied..."]
        endp.innerHTML = parText.join(' ')
        setTimeout(() => {
            window.location.reload()
        }, 4000)
    }
    record.innerHTML = currentrecord;
}
