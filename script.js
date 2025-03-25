import { gameData } from "./gameData.js";

let currentPhase = 0;
let lives = 3;

// Definição das partes do jogo
const FIRST_PART_END = 7;   // Final da floresta
const SECOND_PART_END = 28; // Final do rio

// Pré-carregar imagens
function preloadImages() {
    const images = ['Floresta.jpeg', 'Rio.jpeg', 'Guardião.jpeg'];
    images.forEach(img => {
        new Image().src = `images/${img}`;
    });
}
preloadImages();

// Função para definir imagem de fundo
function setBackgroundImage(imageName) {
    document.body.style.backgroundImage = `url('images/${imageName}')`;
}

// Função para buscar um enigma em português
function fetchRandomEnigma() {
    const enigmas = [
        {
            question: "O que é, o que é? Quanto mais você tira, maior eu fico.",
            correct_answer: "Um buraco",
            incorrect_answers: ["A escuridão", "Um segredo", "O tempo"],
        },
        {
    question:
      "Eu posso ser quebrado sem ser segurado, sem ser tocado ou mesmo visto. O que sou eu?",
    correct_answer: "Uma promessa",
    incorrect_answers: ["O silêncio", "Um espelho", "A esperança"],
  },
  {
    question:
      "Eu sou sempre buscado, mas nunca totalmente alcançado. Posso ser encontrado na jornada, mas nunca no destino. O que sou eu?",
    correct_answer: "O sentido da vida",
    incorrect_answers: ["A felicidade", "O sucesso", "A paz"],
  },
  {
    question:
      "Sou forte, mas invisível. Posso ser curta ou longa. Às vezes corro, às vezes arrasto. Sem mim, nada acontece. O que sou?",
    correct_answer: "O tempo",
    incorrect_answers: ["O vento", "O pensamento", "O destino"],
  },
  {
    question:
      "Quanto mais me gasto, menos tenho. Se tento guardá-la, ela se perde. Se a uso bem, ganho mais dela. O que sou?",
    correct_answer: "A sabedoria",
    incorrect_answers: ["A paciência", "A experiência", "A energia"],
  },
  {
    question:
      "Sou um espelho, mas não reflete o rosto. Mostro o passado e ensino para o futuro. O que sou?",
    correct_answer: "A história",
    incorrect_answers: ["A memória", "A verdade", "O conhecimento"],
  },
  {
    question:
      "Sou invisível, mas posso ser sentido. Posso unir ou separar. Quanto mais sincero sou, mais forte me torno. O que sou?",
    correct_answer: "O amor",
    incorrect_answers: ["A confiança", "A esperança", "O medo"],
  },
    ];
    return enigmas[Math.floor(Math.random() * enigmas.length)];
}

// Função para adaptar o enigma
function adaptEnigma(apiData) {
    return {
        text: apiData.question,
        choices: [
            { text: apiData.correct_answer, nextPhase: 31, loseLife: false, loseAllLives: false },
            { text: apiData.incorrect_answers[0], nextPhase: 32, loseLife: true, loseAllLives: false },
            { text: apiData.incorrect_answers[1], nextPhase: 32, loseLife: true, loseAllLives: false },
            { text: apiData.incorrect_answers[2], nextPhase: 33, loseLife: true, loseAllLives: false }
        ],
    };
}

// Função para carregar o enigma final
function loadFinalEnigma() {
    const enigma = fetchRandomEnigma();
    const adaptedEnigma = adaptEnigma(enigma);
    gameData[30] = {
        text: "O guardião diz: 'Antes de passar você precisa responder o enigma final: " + adaptedEnigma.text + "'",
        choices: adaptedEnigma.choices,
    };
}

// Função para reiniciar o jogo
function resetGame() {
    lives = 3;
    currentPhase = 0;
    updateGame();
}

// Função principal para atualizar o jogo
function updateGame() {
    // Atualiza o background conforme a fase
    if (currentPhase === 0) {
        setBackgroundImage('CapaJogo.webp');
    } else if (currentPhase > 0 && currentPhase <= FIRST_PART_END) {
        setBackgroundImage('Floresta.jpeg');
    } else if (currentPhase <= SECOND_PART_END) {
        setBackgroundImage('Rio.jpeg');
    } else {
        setBackgroundImage('Guardião.jpeg');
    }
    const phase = gameData[currentPhase];
    document.getElementById("narrative").textContent = phase.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    phase.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            if (choice.nextPhase === -1) {
                alert("Você saiu do jogo. Até mais!");
                return;
            }

            if (choice.loseAllLives) {
                lives = 0;
                alert("Você perdeu todas as vidas. Fim de Jogo!");
                resetGame();
                return;
            }

            if (choice.loseLife) {
                lives -= 1;
                if (lives <= 0) {
                    alert("Você perdeu todas as vidas. Fim de Jogo!");
                    resetGame();
                    return;
                } else {
                    alert(`Você perdeu uma vida! Vidas restantes: ${lives}`);
                }
            }

            currentPhase = choice.nextPhase;
            updateGame();
        });
        choicesContainer.appendChild(button);
    });

    document.getElementById("lives").textContent = lives;
}

// Inicialização
loadFinalEnigma();
setBackgroundImage('Floresta.jpeg'); // Imagem inicial
updateGame();