const quizdata =[
    
        {
            question : "what does HTML stands for?",
            a:"Hyoer Markup Language",
            b:"Hyoer Markup Language",
            c:"Hyoer Markup Laessom",
            d:"Hyper Montary Language",
            correct: "b",
        }, 
     
 
 {
    question : "What is the Capital Of Nigeria?",
    a:"Lagos",
    b:"Abuja",
    c:"Plateau",
    d:"Delta",
    correct: "b",
},
{
    question : "What is the best laptop product company?",
    a:"Apple",
    b:"lenovo",
    c:"HP",
    d:"Dell",
    correct: "d",
},
{
    question : "What is the best mobile product company?",
    a:"Apple",
    b:"Samsung",
    c:"Tecno",
    d:"Nokia",
    correct: "d",
},
{
    question : "Which is the best African Country?",
    a:"Nigeria",
    b:"Ghana",
    c:"South Africa",
    d:"Egypt",
    correct: "a",
}, {
    question : "What year Javascript launched?",
    a:"1950",
    b:"1995",
    c:"1970",
    d:"1990",
    correct: "b",
}

];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbitBtn = document.getElementById("sumbitBtn");
const quizCont = document.getElementById("quizCont");
const answerElement = document.querySelectorAll(".answer");
const resultText=document.getElementById("resultText");
const resultBtn=document.getElementById("resultBtn");
const startBtnn=document.getElementById("startBtnn");
startBtnn.onclick = () => {
    startBtnn.classList.add("hidden");
    quizCont.classList.add("active");
};
restartBtn.onclick = () =>{
    window.location.reload()
};

let currentQuiz = 0;
let score = 0


function loadQuiz () { deselectAll();
    const currentQuizData = quizdata[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 
}

loadQuiz();


function getAnswer() {
    let userAnswer = undefined;
    answerElement.forEach((answerElement) => {

        if(answerElement.checked) {
            userAnswer = answerElement.id;
    }
})
return userAnswer;
    };

function deselectAll() {
    answerElement.forEach((answerElement) =>{
        answerElement.checked = false;
    })
} 

sumbitBtn.onclick = () => {
    const userAnswer = getAnswer();

    if (userAnswer === quizdata[currentQuiz].correct) {
        score++
        console.log(score);
        
    }

     if (userAnswer) {
         currentQuiz++;
         if(currentQuiz < quizdata.length) {
             loadQuiz();
         } else {
            quizCont.classList.remove("active");
            resultBox.classList.add("active");
            resultText.innerText =`you scored ${score}out of ${quizdata.length} questions`;
        
            // alert("end of quiz");
            // alert(`you scored ${score}`)
             
         }            
    } else{
        alert("select an answer")
    }
       

}

    


