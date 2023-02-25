const pitanje = document.getElementById("question")
const answer1 = document.getElementById("leftButton")
const answer2 = document.getElementById("rightButton")
const answer3 = document.getElementById("left2Button")
const answer4 = document.getElementById("right2Button")
const score = document.getElementById("score")
const record = document.getElementById("record")
const time = document.getElementById("time")
const startbutton = document.getElementById("startbtn")
const footer = document.getElementById("footer")
const content = document.getElementById("content")
const endp = document.getElementById("endParagraph")
const timep = document.getElementById("timeParagraph")
const contentH2 = document.getElementById("contentTitle")
const h1 = document.getElementById("h1")
const body = document.getElementById("body")
const startpara = document.getElementById("startpa  ")
const nextbutton = document.getElementById("nextButtom")

let currentQuestionIndex = 0;
let currentScore = 0;

const easyquestions = [
    pitanje1 = {
        title: "Zamjenica هما znači ",
        correctAnswer: "Njih dvojica",
        otherAnswers: ["Njih dvojica", "On", "Mi", "Vas dvojica"]
    },
    pitanje1 = {
        title: "Zamjenica أنا znači ",
        correctAnswer: "Ja",
        otherAnswers: ["Njih dvojica", "Ja", "Mi", "Njih dvije"]
    },
    pitanje2 = {
        title: "Koliko ima harfova u arapskom jeziku?",
        correctAnswer: "28",
        otherAnswers: ["28", "27", "30", "31"]
    },
    pitanje14 = {
        title: "Koliko ima vrsta glagola?",
        correctAnswer: "10",
        otherAnswers: ["10", "11", "12", "8"]
    },
    pitanje3 = {
        title: "Šta znači riječ - نقرأ ",
        correctAnswer: "Mi čitamo",
        otherAnswers: ["Mi čitamo", "Mi smo čitali", "Čitanje", "On čita"]
    },
    pitanje4 = {
        title: "Koja vrsta glagola je riječ  -  اِنْتَظَرْنَ?",
        correctAnswer: "8.",
        otherAnswers: ["8.", "10.", "9.", "7."]
    },
    pitanje4 = {
        title: "Koja vrsta glagola je riječ  -  قَدَّمَ?",
        correctAnswer: "2.",
        otherAnswers: ["6.", "2.", "4.", "7."]
    },
    pitanje13 = {
        title: "Jug se na arapskom kaže _____?",
        correctAnswer: "جنوب",
        otherAnswers: ["جنوب", "غرب", "شرق", "شمال"]
    },
    pitanje5 = {
        title: "Kako se kaže 'crven' na arapskom?",
        correctAnswer: "أحمر",
        otherAnswers: ["أحمر", "حمراء", "أزرق", "أسود"]
    },
    pitanje6 = {
        title: "Koji od ovih pridjeva je u superlativu?",
        correctAnswer: "الاُسْرَعَ",
        otherAnswers: ["الاُسْرَعَ", "أَكْبَرُ مِنْ", "سَرِيعَ", "كَبِير"]
    },
    pitanje7 = {
        title: "Koje zanimanje je حَكَم?",
        correctAnswer: "Sudija",
        otherAnswers: ["Sudija", "Golman", "Igrač", "Komentator"]
    },
    pitanje10 = {
        title: "Koji od ovih glagola je nakis?",
        correctAnswer: "مشى",
        otherAnswers: ["قرأ", "مشى", "قال", "وجد"]
    },
    pitanje13 = {
        title: "كلبه znači...",
        correctAnswer: "Njegov pas",
        otherAnswers: ["Njegov pas", "Njen pas", "Moj pas", "Naš pas"]
    },
    pitanje11 = {
        title: "Imenica se sa pridjevom slaže u...",
        correctAnswer: "Rodu, broju, padežu i određenosti",
        otherAnswers: ["Rodu, broju, padežu i određenosti", "Rodu i broju", "Padežu", "Ničemu"]
    },
    pitanje12 = {
        title: "Kako se na arapskom kaže 25?",
        correctAnswer: "خمسة وعشرون",
        otherAnswers: ["خمسة وعشرون", "اثنان وخمسون", "اثني عشر", "خمسمائة وعشرون"]
    },
    pitanje8 = {
        title: "كِتَابُ زَيْنَب",
        correctAnswer: "كِتَابُ زَيْنَبَ",
        otherAnswers: ["كِتَابُ زَيْنَبَ", "كِتَابُ زَيْنَبِ", "كِتَابُ زَيْنَبُ", "كِتَابُ زَيْنَبٍ"]
    },
    pitanje9 = {
        title: "إنّ هذا ـــــــــ جديدٌ",
        correctAnswer: "الطالبَ",
        otherAnswers: ["الطالبَ", "الطالبِ", "الطالبًا", "الطالبُ"]
    },
    pitanje8 = {
        title: " .... أَللهُ خَلَقَ السَّمَاوَاتِ وَ",
        correctAnswer: "الأَرْضَ",
        otherAnswers: ["الأَرْضَ", "الأَرْضِ", "الأَرْضْ", "الأَرْضُ"]
    },
    pitanje9 = {
        title: "Ako su knjige skupe kazat ćemo: ",
        correctAnswer: "اَلْكُتُبُ غَاليَةٌ",
        otherAnswers: ["اَلْكُتُبُ غَاليَةٌ", "اَلْكُتُبُ غَاليِ", "اَلْكُتُبُ غَالٍ", "اَلْكُتُبُ غَالياتٌ"]
    },
    pitanje13 = {
        title: "Abdulaha ćemo pravilno dozvati: ",
        correctAnswer: "ياَ عَبْدَ اللَّهِ",
        otherAnswers: ["ياَ عَبْدَ اللَّهِ", "ياَ عَبْدَ اللَّهَ", "ياَ عَبْدُ اللَّهِ", "ياَ عَبْدِ اللَّهِ"]
    },
]


function setUp() {
    score.innerHTML = 0
    currentScore = 0
}
setUp()

//easy-------------------------------------------------------

function startbtn() {
    body.style.background = "linear-gradient(90deg, rgb(16, 118, 235) 0%, rgb(19, 211, 92) 100%)"

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
    nextbutton.style.visibility = "visible"
    answer2.style.visibility = "visible"
    answer3.style.visibility = "visible"
    answer4.style.visibility = "visible"
    footer.style.visibility = "visible"
    document.getElementById("startbtn").remove()
    const question = easyquestions[currentQuestionIndex]
    pitanje.innerHTML = question.title
    const answers = question.otherAnswers
    answer1.innerHTML = answers[niz[0]]
    answer2.innerHTML = answers[niz[1]]
    answer3.innerHTML = answers[niz[2]]
    answer4.innerHTML = answers[niz[3]]

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
        function nextq() {
            currentQuestionIndex = currentScore
            if (currentQuestionIndex == easyquestions.length) {
                endTimeTitle()
            }

            const newQuestion = easyquestions[currentQuestionIndex]
            pitanje.innerHTML = newQuestion.title
            const answers = newQuestion.otherAnswers
            answer1.innerHTML = answers[niz[0]]
            answer2.innerHTML = answers[niz[1]]
            answer3.innerHTML = answers[niz[2]]
            answer4.innerHTML = answers[niz[3]]
            score.innerHTML = currentScore
            score2 = score.innerHTML
            event.target.style.boxShadow = "none";
        }
        if (answer === question.correctAnswer) {
            event.target.style.boxShadow = "1px 1px 66px 8px rgba(16,237,53,0.82)";
            currentQuestionIndex += 1
            currentScore += 1
            score.innerHTML = currentScore
            nextbutton.addEventListener("click", nextq)
        }
        else {
            event.target.style.boxShadow = "1px 1px 66px 8px rgba(255, 51, 51)";
            setTimeout(() => {
                event.target.style.boxShadow = "";
            }, 1000)
        }
    }

    function endTimeTitle() {
        document.getElementById("question").remove()
        document.getElementById("leftButton").remove()
        document.getElementById("rightButton").remove()
        document.getElementById("left2Button").remove()
        document.getElementById("right2Button").remove()
        footer.style.visibility = "hidden"
        nextbutton.style.visibility = "hidden"
        content.style.visibility = "visible"

        contentH2.innerHTML = "Rezultati"
        h1.style.marginTop = "15%"
        parText = ["Tačno si odgovorio na ", score.innerHTML, "/", easyquestions.length, "pitanja."]
        endp.innerHTML = parText.join(' ')
        timeText = ["Završili ste Qviz. Nadam se da je bilo zanimljivo :)"]
        timep.innerHTML = timeText.join(' ')

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
