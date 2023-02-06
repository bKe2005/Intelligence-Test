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
const timep = document.getElementById("timeParagraph")
const contentH2 = document.getElementById("contentTitle")
const h1 = document.getElementById("h1")
const body = document.getElementById("body")
const startpara = document.getElementById("startpa  ")


let currentQuestionIndex = 0;
let currentScore = 0;

const easyquestions = [
    pitanje1 = {
        title: "What is the longest river in the world?",
        correctAnswer: "Nil",
        otherAnswers: ["Amazon", "Jang ce kjang", "Nil", "Mississippi"]
    },
    pitanje2 = {
        title: "What is the highest mountain in Bosnia?",
        correctAnswer: "Maglić",
        otherAnswers: ["Maglić", "Kozara", "Bjelašnica", "Vlašić"]
    },
    pitanje3 = {
        title: "How many months have 28 days? ",
        correctAnswer: "12",
        otherAnswers: ["1", "2", " 6", "12"]
    },
    pitanje5 = {
        title: "What color is the M in McDonald’s?",
        correctAnswer: "Yellow",
        otherAnswers: ["Yellow", "Red", "Blue", "Green"]
    },
    pitanje4 = {
        title: "Area of the Earth is ____",
        correctAnswer: "510.100.000 km²",
        otherAnswers: ["40.100.000 km²", "410.100.000 km²", "510.000.000 km²", "510.100.000 km²"]
    },
    pitanje5 = {
        title: "Most mentioned prophet in Qur'an is ____ ",
        correctAnswer: "Moses",
        otherAnswers: ["Salih", "Jesus", "Mohammed", "Moses"]
    },
    pitanje6 = {
        title: "When did the World war start?",
        correctAnswer: "1914.",
        otherAnswers: ["1916.", "1914.", "1814.", "1924."]
    },
    pitanje7 = {
        title: "Whats 18th letter of the alphabet? ",
        correctAnswer: "R",
        otherAnswers: ["Q", "R", " O", "S"]
    },
    pitanje8 = {
        title: "When did the Ottomans occupy BiH? ",
        correctAnswer: "1463.",
        otherAnswers: ["1463.", "1878.", "1436.", "1787."]
    },
    pitanje9 = {
        title: "What city is known as the City of Love? ",
        correctAnswer: "Paris",
        otherAnswers: ["Berlin", "Paris", " Madrid", "Rome"]
    },
    pitanje10 = {
        title: "Who is the founder of Amazon?",
        correctAnswer: "Jeff Bezos",
        otherAnswers: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"]
    },
    pitanje_1 = {
        title: "What gets wetter the more it dries? ",
        correctAnswer: "Towel",
        otherAnswers: ["Ocean", "Sponge", "Person", "Towel"]
    },
    pitanje2 = {
        title: "What is the capital of Somalia? ",
        correctAnswer: "Mogadish",
        otherAnswers: ["Mogadish", "Kinshasa", " Adis Abeba", "Asmara"]
    },
    pitanje3 = {
        title: "What is average brain weight? ",
        correctAnswer: "1,25-1,5",
        otherAnswers: ["1,25-1,5", "1,1-1,7", "1-2", "2,1-2,5"]
    },
    pitanje4 = {
        title: "Solve: 6 / 2 (1 + 2) = ?",
        correctAnswer: "9",
        otherAnswers: ["1", "7", "9", "3"]
    },
    pitanje5 = {
        title: "How many stars are on the national flag of USA?",
        correctAnswer: "50",
        otherAnswers: ["7", "50", "48", "51"]
    },
    pitanje6 = {
        title: "How many time zones are there in Russia?",
        correctAnswer: "11",
        otherAnswers: ["11", "9", "3", "19"]
    },
    pitanje7 = {
        title: "Who led an expedition to prove that the Earth is round?",
        correctAnswer: "Ferdinand Magellan",
        otherAnswers: ["Ferdinand Magellan", "Nermedin Salakovic", "Christopher Columbus", "Amerigo Vespucci"]
    },
    pitanje8 = {
        title: "What year was Adolf Hitler born?",
        correctAnswer: "1889.",
        otherAnswers: ["1889.", "1900.", "1884.", "1869."]
    },
    pitanje9 = {
        title: "How many possible combinations does a rubic's cube have? ",
        correctAnswer: "43 quintillion",
        otherAnswers: ["43 quintillion", "38 billion", "728 million", "12 quintillion"]
    },
    pitanje__10 = {
        title: "π is 3.14",
        correctAnswer: "1592",
        otherAnswers: ["1518", "1592", "1582", "1581"]
    },
    pitanje_1 = {
        title: "Chess was made in ____",
        correctAnswer: "6. century",
        otherAnswers: ["9. century", "6. century", "2. century", "10. century"]
    },
    pitanje2 = {
        title: "Biggest animal in water is ____",
        correctAnswer: "Lion’s Mane Jellyfish",
        otherAnswers: ["Giant Pacific Octopus", "Lion’s Mane Jellyfish", "Antarctic blue whale", "Whale Shark"]
    },
    pitanje3 = {
        title: "Who won fifth ever Fifa world cup? ",
        correctAnswer: "Germany",
        otherAnswers: ["Germany", "Sweden", " Switzerland", "Brazil"]
    },
    pitanje4 = {
        title: "What was first sport ever? ",
        correctAnswer: "Wrestling",
        otherAnswers: ["Wrestling", "Running", "  Swimming", "Archery"]
    },

    pitanje6 = {
        title: "Song informer was released in ____ ",
        correctAnswer: "1993.",
        otherAnswers: ["2001.", "1997.", "1978.", "1993."]
    },
    pitanje7 = {
        title: "Who designed the Eiffel Tower? ",
        correctAnswer: "Gustave Eiffel",
        otherAnswers: ["Gustave Eiffel", "Albert Eiffel", "Edouard Eiffel", "Alexandre Bonickhausen dit Eiffel"]
    },
    pitanje8 = {
        title: "As of December 2021, what's the highest rated film on iMDB?",
        correctAnswer: "The Shawshank Redemption",
        otherAnswers: ["The Shawshank Redemption", "Avatar", "Spider-Man: No Way Home", "The Dark Knight"]
    },
    pitanje9 = {
        title: "What is Obamas middle name?",
        correctAnswer: "Hussein",
        otherAnswers: ["Hussein", "James", "William", "	Thomas"]
    },
    pitanje_10 = {
        title: "Who said: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.' ",
        correctAnswer: "Benjamin Franklin",
        otherAnswers: ["Benjamin Franklin", "Anne Frank", "Abraham Lincoln", "Albert Einstein"]
    },
]


function setUp() {
    score.innerHTML = 0
    time.innerHTML = "90 seconds remaining"
}
setUp()

//easy-------------------------------------------------------

function startbtn() {
    body.style.background = "linear-gradient(90deg, hsla(120, 75%, 31%, 1) 0%, hsla(181, 94%, 25%, 1) 48%, hsla(209, 70%, 39%, 1) 100%)"

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

    h1.style.marginTop = "10%"
    answer1.style.visibility = "visible"
    answer2.style.visibility = "visible"
    answer3.style.visibility = "visible"
    answer4.style.visibility = "visible"
    footer.style.visibility = "visible"
    document.getElementById("startpa").remove()
    document.getElementById("startButtom").remove()
    const question = easyquestions[currentQuestionIndex]
    pitanje.innerHTML = question.title
    const answers = question.otherAnswers
    answer1.innerHTML = answers[niz[0]]
    answer2.innerHTML = answers[niz[1]]
    answer3.innerHTML = answers[niz[2]]
    answer4.innerHTML = answers[niz[3]]

    var timeLeft = 90;
    var elem = document.getElementById("time");
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            endTimeTitle();
        }
        else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
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
        const question = easyquestions[currentQuestionIndex]
        if (question.correctAnswer == "Jeff Bezos") {
            setTimeout(() => {
                console.log(1)
                body.style.background = "linear-gradient(90deg, hsla(26, 67%, 50%, 1) 0%, hsla(71, 94%, 25%, 1) 48%, hsla(112, 74%, 30%, 1) 100%)"
            }, 1000)

        }
        if (question.correctAnswer == "1592") {
            setTimeout(() => {
                body.style.background = "linear-gradient(90deg, hsla(2, 87%, 46%, 1) 0%, hsla(23, 74%, 46%, 1) 50%, hsla(50, 74%, 30%, 1) 100%)"
            }, 1000)

        }
        if (answer === pitanje_10.correctAnswer) {
            score.innerHTML = currentScore += 1
            endTimeTitle()
        }

        if (answer === question.correctAnswer) {
            event.target.style.boxShadow = "1px 1px 66px 8px rgba(16,237,53,0.82)";
            currentQuestionIndex += 1
            const newQuestion = easyquestions[currentQuestionIndex]
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
            currentQuestionIndex += 1
            const newQuestion = easyquestions[currentQuestionIndex]
            setTimeout(() => {
                pitanje.innerHTML = newQuestion.title
                const answers = newQuestion.otherAnswers
                answer1.innerHTML = answers[niz[0]]
                answer2.innerHTML = answers[niz[1]]
                answer3.innerHTML = answers[niz[2]]
                answer4.innerHTML = answers[niz[3]]
                score.innerHTML = currentScore
                score2 = score.innerHTML
                event.target.style.boxShadow = "none";
            }, 1000)
        }
    }

    function endTimeTitle() {
        pitanje.style.visibility = "hidden"
        answer1.style.visibility = "hidden"
        answer2.style.visibility = "hidden"
        answer3.style.visibility = "hidden"
        answer4.style.visibility = "hidden"
        footer.style.visibility = "hidden"
        content.style.visibility = "visible"

        contentH2.innerHTML = "Woooow"
        h1.style.marginTop = "15%"
        parText = ["You scored", score.innerHTML, "/", easyquestions.length, "."]
        endp.innerHTML = parText.join(' ')
        if (score.innerHTML < 11) {
            timeText = ["Your intellingence is sadly below average :("]
            timep.innerHTML = timeText.join(' ')
        }
        else if (score.innerHTML > 11) {
            timeText = ["Your intelligence is average. Good for you.."]
            timep.innerHTML = timeText.join(' ')
        }
        else if (score.innerHTML > 21) {
            timeText = ["AMAZING... You have above average intelligence!!!"]
            timep.innerHTML = timeText.join(' ')
        }
        setTimeout(() => {
            window.location.reload()
        }, 100000)
    }
    answer1.addEventListener("click", buttonClick)
    answer2.addEventListener("click", buttonClick)
    answer3.addEventListener("click", buttonClick)
    answer4.addEventListener("click", buttonClick)
}
startbutton.addEventListener("click", startbtn)

//End------------------------------------------------------------------------------------------
function wrongAnswer() {
    currentQuestionIndex += 1
    const newQuestion = easyquestions[currentQuestionIndex]
    setTimeout(() => {
        pitanje.innerHTML = newQuestion.title
        const answers = newQuestion.otherAnswers
        answer1.innerHTML = answers[niz[0]]
        answer2.innerHTML = answers[niz[1]]
        answer3.innerHTML = answers[niz[2]]
        answer4.innerHTML = answers[niz[3]]
        score.innerHTML = currentScore
        score2 = score.innerHTML
        event.target.style.boxShadow = "none";
    }, 1000)

}
