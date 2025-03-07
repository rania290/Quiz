const questions = [
   
    {
        question: "En quelle année Saïda a-t-elle été créée ?",
        answers: [
            
            "1980",
            "2000",
            "1990",
            "1975"
        ],
        correctAnswer: "1990"
    },
    {
        question: "Quel produit est emblématique de Saïda ?",
        answers: [
            "Chocolat",
            "Biscuit",
            "Boisson gazeuse",
            "Bonbons"
        ],
        correctAnswer: "Biscuit"
    },
    {
        question: "Quelle célébrité a collaboré avec Saïda pour une campagne publicitaire ?",
        answers: [
            "Karim Benzema",
            "Amine Messaoudi",
            "Sofiane",
            "Cyrine Abdelnour"
        ],
        correctAnswer: "Karim Benzema"
    },
    {
        question: "Saïda a remporté quel prix en 2019 ?",
        answers: [
            "Prix de l'innovation alimentaire",
            "Prix du meilleur produit de l'année",
            "Grand prix de la publicité",
            "Meilleure marque de biscuits"
        ],
        correctAnswer: "Prix de l'innovation alimentaire"
    },
    {
        question: "Quel biscuit de Saïda est connu pour sa forme en cœur ?",
        answers: [
            "Biscuit Saïda chocolat",
            "Biscuit Saïda fraise",
            "Biscuit Saïda cœur",
            "Biscuit Saïda noix"
        ],
        correctAnswer: "Biscuit Saïda cœur"
    },
    {
        question: "Quel média Saïda utilise principalement dans ses campagnes publicitaires ?",
        answers: [
            "Télévision",
            "Affiches",
            "Réseaux sociaux",
            "Radio"
        ],
        correctAnswer: "Télévision"
    },
    {
        question: "Saïda valorise quelle principale valeur dans ses produits ?",
        answers: [
            "L'innovation",
            "La qualité",
            "L'écologie",
            "Le prix abordable"
        ],
        correctAnswer: "La qualité"
    },
    {
        question: "Dans quel pays Saïda a-t-elle ouvert sa première usine hors Algérie ?",
        answers: [
            "France",
            "Maroc",
            "Tunisie",
            "Italie"
            
        ],
        correctAnswer: "Tunisie"
    },
    
    
    {
        question: "Avec quelle marque Saïda a-t-elle lancé une collaboration pour la vente de produits en 2018 ?",
        answers: [
            "Coca-Cola",
            "Unilever",
            "Nestlé",
            "Danone"
        ],
        correctAnswer: "Nestlé"
    },
    {
        question: "Quel est l'objectif principal des campagnes publicitaires de Saïda ?",
        answers: [
            "Promouvoir des nouveaux produits",
            "Augmenter les ventes à court terme",
            "Renforcer la notoriété de la marque",
            "Célébrer les événements annuels de l'entreprise"
        ],
        correctAnswer: "Renforcer la notoriété de la marque"
    },
    {
        question: "Quelle est la mission principale de Saïda dans ses campagnes marketing ?",
        answers: [
            "Fidéliser les consommateurs",
            "Promouvoir les ventes saisonnières",
            "Développer des partenariats avec des célébrités",
            "Élargir son réseau de distribution à l'international"
        ],
        correctAnswer: "Fidéliser les consommateurs"
    },
    {
        question: "Parmi ces marques, laquelle est un concurrent direct de Saïda sur le marché des biscuits ?",
        answers: [
            "Danone",
            "Le Prince",
            "Oreo",
            "Lays"
        ],
        correctAnswer: "Le Prince"
    },
    
    
    
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answersElement.innerHTML = currentQuestion.answers
        .map((answer) => `<li><button class="answer-btn">${answer}</button></li>`)
        .join("");

    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", handleAnswerClick);
    });
}

function handleAnswerClick(event) {
    const selectedAnswer = event.target.innerText;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        resultElement.innerText = "Bonne réponse !";
    } else {
        resultElement.innerText = "Mauvaise réponse. Essayez encore!";
    }

    scoreElement.innerText = `Score: ${score}`;
    resultContainer.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resultContainer.classList.add("hidden");
        displayQuestion();
    } else {
        resultElement.innerText = "Félicitations, vous avez terminé le quiz !";
        nextButton.innerText = "Recommencer";
        nextButton.addEventListener("click", () => {
            location.reload();
        });
    }
});

displayQuestion();
