// Objeto contendo todas as perguntas, divididas por nível de dificuldade.
// A estrutura foi alterada para um objeto único com 'title', 'subtitle' e um array 'data' para os níveis.
const quizData = {
  title: "Descubra o Emoji!",
  subtitle: "O que os emojis querem dizer?",
  fontSize: "4em", // NOVO: Campo de tamanho de fonte para a pergunta atual
  actions: {
    showToolbar: true,
    showAwnserButtons: false,
  },
  data: [
    {
      id: "old-testament-books",
      title: "Livros do Antigo Testamento",
      questions: [
        {
          question: "🌍👨‍👩‍👧‍👦🐍🍎🌊",
          options: { a: "Gênesis" },
          correct: "a",
          hint: "Criação, família, pecado, dilúvio",
        },
        {
          question: "🌊🚶‍♂️🚶‍♀️🔥⛰️📜",
          options: { a: "Êxodo" },
          correct: "a",
          hint: "Mar Vermelho, êxodo, sarça ardente, Monte Sinai, tábuas da lei",
        },
        {
          question: "📖🩸🙏🕊️",
          options: { a: "Levítico" },
          correct: "a",
          hint: "Lei, sacrifícios, pureza",
        },
        {
          question: "🏕️🚶‍♂️🚶‍♀️🗺️🔢",
          options: { a: "Números" },
          correct: "a",
          hint: "Caminhada no deserto, censo, jornada",
        },
        {
          question: "🗣️📜✨",
          options: { a: "Deuteronômio" },
          correct: "a",
          hint: "Discurso de Moisés, segunda lei, renovação da aliança",
        },
        {
          question: "💪🦁🍯✂️",
          options: { a: "Juízes" },
          correct: "a",
          hint: "Sansão, juízes, ciclo de desobediência",
        },
        {
          question: "🌾❤️👩‍❤️‍👨",
          options: { a: "Rute" },
          correct: "a",
          hint: "Campos de cevada, amor, casamento",
        },
        {
          question: "👑🐑👂",
          options: { a: "1 Samuel" },
          correct: "a",
          hint: "Rei, ovelhas, ouvir a Deus",
        },
        {
          question: "👑⚔️🎵",
          options: { a: "2 Samuel" },
          correct: "a",
          hint: "Rei Davi, batalhas, salmos",
        },
        {
          question: "1️⃣👑🏛️🔥",
          options: { a: "1 Reis" },
          correct: "a",
          hint: "Rei Salomão, templo, divisão do reino",
        },
        {
          question: "2️⃣👑🔥🌬️",
          options: { a: "2 Reis" },
          correct: "a",
          hint: "Reis, Elias, Eliseu, carro de fogo",
        },
        {
          question: "👑👸📜",
          options: { a: "Ester" },
          correct: "a",
          hint: "Rainha Ester, plano de salvação",
        },
        {
          question: "😥🌪️🙏✨",
          options: { a: "Jó" },
          correct: "a",
          hint: "Sofrimento, provação, fé",
        },
        {
          question: "🎵🙏💖🙌",
          options: { a: "Salmos" },
          correct: "a",
          hint: "Cânticos, louvor, oração",
        },
        {
          question: "💡🦉🗣️",
          options: { a: "Provérbios" },
          correct: "a",
          hint: "Sabedoria, conselhos, ensinamentos",
        },
        {
          question: "🕰️💨🤔",
          options: { a: "Eclesiastes" },
          correct: "a",
          hint: "Tempo, vaidade, reflexão",
        },
        {
          question: "🎙️🎶❤️🌹👰🤵",
          options: { a: "Cânticos" },
          correct: "a",
          hint: "Amor, casamento, poema",
        },
        {
          question: "😭💔📜",
          options: { a: "Jeremias" },
          correct: "a",
          hint: "Profeta chorão, destruição, lamento",
        },
        {
          question: "😭💔🌃",
          options: { a: "Lamentações" },
          correct: "a",
          hint: "Tristeza, destruição de Jerusalém",
        },
        {
          question: "👁️🔥🌪️👤",
          options: { a: "Ezequiel" },
          correct: "a",
          hint: "Visões, profecias, restauração",
        },
        {
          question: "🦁🔥👑",
          options: { a: "Daniel" },
          correct: "a",
          hint: "Cova dos leões, fornalha ardente, reinos",
        },
    
        {
          question: "🐳🌊🙏",
          options: { a: "Jonas" },
          correct: "a",
          hint: "Baleia, arrependimento",
        },
        {
          question: "⚖️👣🙏",
          options: { a: "Miquéias" },
          correct: "a",
          hint: "Justiça, andar com Deus",
        },
        {
          question: "🌊🔥⚔️",
          options: { a: "Naum" },
          correct: "a",
          hint: "Juízo sobre Nínive",
        },
        {
          question: "🤔🙏❓",
          options: { a: "Habacuque" },
          correct: "a",
          hint: "Perguntas a Deus, fé",
        },
        {
          question: "🌍🔥🙏",
          options: { a: "Sofonias" },
          correct: "a",
          hint: "Dia do Senhor, juízo",
        },
        {
          question: "🐎👑🙏",
          options: { a: "Zacarias" },
          correct: "a",
          hint: "Visões, Messias",
        },
        {
          question: "🙏🔥🎁",
          options: { a: "Malaquias" },
          correct: "a",
          hint: "Sacrifícios, dízimos, dia do Senhor",
        },
      ],
    },
    {
      id: "new-testament-books",
      title: "Livros do Novo Testamento",
      questions: [
        {
          question: "👶👑🗣️📖",
          options: { a: "Mateus" },
          correct: "a",
          hint: "Nascimento de Jesus, Rei, sermão da montanha",
        },
        {
          question: "🦁👑🏃‍♂️",
          options: { a: "Marcos" },
          correct: "a",
          hint: "Jesus servo, ação, milagres",
        },
        {
          question: "👨‍⚕️🌍🙏📖",
          options: { a: "Lucas" },
          correct: "a",
          hint: "Jesus homem, graça, parábolas",
        },
        {
          question: "❤️🌟📖🔥",
          options: { a: "João" },
          correct: "a",
          hint: "Jesus Deus, luz, amor",
        },
        {
          question: "🔥🌬️🌎",
          options: { a: "Atos" },
          correct: "a",
          hint: "Espírito Santo, Igreja, missões",
        },
        {
          question: "⚖️✝️🙏",
          options: { a: "Romanos" },
          correct: "a",
          hint: "Justificação pela fé, salvação",
        },
        {
          question: "❤️⛪🗣️",
          options: { a: "1 Coríntios" },
          correct: "a",
          hint: "Amor, dons espirituais, divisões",
        },
        {
          question: "💪💔🙏",
          options: { a: "2 Coríntios" },
          correct: "a",
          hint: "Fraqueza, sofrimento, consolo",
        },
        {
          question: "💒👑🛡️",
          options: { a: "Efésios" },
          correct: "a",
          hint: "Igreja, armadura de Deus, unidade",
        },
        {
          question: "😁🙏💖",
          options: { a: "Filipenses" },
          correct: "a",
          hint: "Alegria, contentamento, unidade",
        },
        {
          question: "👑🌟✝️",
          options: { a: "Colossenses" },
          correct: "a",
          hint: "Supremacia de Cristo, nova vida",
        },
        {
          question: "✝️💨🙏",
          options: { a: "1 Tessalonicenses" },
          correct: "a",
          hint: "Volta de Jesus, esperança",
        },
        {
          question: "✝️💨🕰️",
          options: { a: "2 Tessalonicenses" },
          correct: "a",
          hint: "Volta de Jesus, sinais, paciência",
        },
        {
          question: "👨‍🏫⛪✨",
          options: { a: "Tito" },
          correct: "a",
          hint: "Liderança, boas obras",
        },
        {
          question: "⛓️🤝❤️",
          options: { a: "Filemom" },
          correct: "a",
          hint: "Escravo, perdão, reconciliação",
        },
        {
          question: "👑✝️🙏",
          options: { a: "Hebreus" },
          correct: "a",
          hint: "Jesus sumo sacerdote, superioridade de Cristo",
        },
        {
          question: "🚶‍♂️🗣️🙏",
          options: { a: "Tiago" },
          correct: "a",
          hint: "Fé e obras, sabedoria prática",
        },
        {
          question: "✝️🔥🌍",
          options: { a: "1 Pedro" },
          correct: "a",
          hint: "Sofrimento, esperança, fé",
        },
        {
          question: "🚨📖🌟",
          options: { a: "2 Pedro" },
          correct: "a",
          hint: "Falsos mestres, profecia, segunda vinda",
        },
        {
          question: "❤️💡✝️",
          options: { a: "1 João" },
          correct: "a",
          hint: "Amor, luz, verdade",
        },
        {
          question: "🏡✝️",
          options: { a: "2 João" },
          correct: "a",
          hint: "Caminhar na verdade e amor",
        },
        {
          question: "🤝❤️",
          options: { a: "3 João" },
          correct: "a",
          hint: "Hospitalidade, cooperadores",
        },
        {
          question: "🛡️✝️",
          options: { a: "Judas" },
          correct: "a",
          hint: "Defender a fé, alertar contra falsos mestres",
        },
        {
          question: "🌍🔥😇👑",
          options: { a: "Apocalipse" },
          correct: "a",
          hint: "Fim dos tempos, visões, vitória de Cristo",
        },
      ],
    },
    {
      id: "bible-stories",
      title: "Histórias da Bíblia",
      questions: [
        {
          question: "🌍☀️🌙⭐️🐠🦅🌳🐄👨‍👩‍👧‍👦",
          options: { a: "A Criação" },
          correct: "a",
          hint: "Deus cria o mundo, o homem e a mulher em sete dias",
        },
        {
          question: "🌳🐍🍎👨‍👩‍👧‍👦😭",
          options: { a: "Adão e Eva e a Queda" },
          correct: "a",
          hint: "A primeira desobediência, expulsão do Jardim do Éden",
        },
        {
          question: "👨‍🌾🐑🩸🔪",
          options: { a: "Caim e Abel" },
          correct: "a",
          hint: "O primeiro assassinato, inveja e sacrifício",
        },
        {
          question: "🌧️🌊🛶🐘🦒🐅🕊️🌈",
          options: { a: "A Arca de Noé" },
          correct: "a",
          hint: "O dilúvio, salvação da família de Noé e dos animais",
        },
        {
          question: "🏗️🗼🏯🗣️🤔",
          options: { a: "A Torre de Babel" },
          correct: "a",
          hint: "Tentativa de construir uma torre até o céu, confusão de línguas",
        },
        {
          question: "👨‍👦🔪🐑🙏",
          options: { a: "Abraão e o Sacrifício de Isaque" },
          correct: "a",
          hint: "Fé e obediência de Abraão, provisão de Deus",
        },
        {
          question: "🌈🧥💭🌾👑🌽👨‍👩‍👦‍👦",
          options: { a: "José e os Sonhos do Egito" },
          correct: "a",
          hint: "José tem sonhos, interpreta os sonhos do Faraó sobre as vacas e o trigo, administra o Egito durante a fome, e reencontra sua família",
        },
        {
          question: "🔥🌳🗣️🙏",
          options: { a: "Moisés e a Sarça Ardente" },
          correct: "a",
          hint: "Deus chama Moisés para libertar o povo",
        },
        {
          question: "🐸🩸🦟🐄🔥🧊🦗💀",
          options: { a: "As Dez Pragas do Egito" },
          correct: "a",
          hint: "Juízos de Deus sobre o Egito para libertar Israel",
        },
        {
          question: "🌊🚶‍♂️🚶‍♀️🌊 🐎🌊",
          options: { a: "Abertura do Mar Vermelho" },
          correct: "a",
          hint: "Deus abre o mar para o povo passar e fecha sobre os egípcios",
        },
        {
          question: "⛰️📜🙏",
          options: { a: "Os Dez Mandamentos" },
          correct: "a",
          hint: "Deus entrega suas leis a Moisés no Monte Sinai",
        },
        {
          question: "🐑🍶🎺⚔️💪",
          options: { a: "Gideão e o Exército Pequeno" },
          correct: "a",
          hint: "Vitória de Israel com poucos homens, fé em Deus",
        },
        {
          question: "💪🦁🍯✂️😩",
          options: { a: "Sansão e Dalila" },
          correct: "a",
          hint: "Força de Sansão, fraqueza por Dalila, queda e redenção",
        },
        {
          question: "👦🐑🪨⚔️",
          options: { a: "Davi e Golias" },
          correct: "a",
          hint: "O jovem Davi derrota o gigante Golias com uma funda",
        },
        {
          question: "⛵️🌊🐳🙏🗣️",
          options: { a: "Jonas e a Baleia" },
          correct: "a",
          hint: "Jonas foge de Deus, é engolido por um grande peixe, se arrepende e prega",
        },
        {
          question: "🦁⛓️🙏😇",
          options: { a: "Daniel na Cova dos Leões" },
          correct: "a",
          hint: "Daniel é salvo dos leões por sua fé",
        },
        {
          question: "🌟👶🐑🏡",
          options: { a: "Jesus Nasce" },
          correct: "a",
          hint: "O nascimento de Jesus em Belém",
        },
        {
          question: "🌊🚶‍♂️⛵️🙏",
          options: { a: "Jesus Anda sobre as Águas" },
          correct: "a",
          hint: "Jesus caminha sobre o mar e Pedro tenta imitá-lo",
        },
        {
          question: "🐖💰🏡😔➡️🎉🥳",
          options: { a: "A Parábola do Filho Pródigo" },
          correct: "a",
          hint: "Filho que gasta tudo, se arrepende e é recebido com festa pelo pai",
        },
        {
          question: "👁️➡️✨🙏",
          options: { a: "Jesus Cura o Cego de Nascença" },
          correct: "a",
          hint: "Jesus restaura a visão de um homem cego de nascença",
        },
        {
          question: "🪦 💀 ✝️🗣️✨🚶‍➡️🙏",
          options: { a: "A Ressurreição de Lázaro" },
          correct: "a",
          hint: "Jesus ressuscita Lázaro dos mortos",
        },
        {
          question: "✝️👑💔😭",
          options: { a: "A Crucificação de Jesus" },
          correct: "a",
          hint: "Jesus morre na cruz por nossos pecados",
        },
        {
          question: "🪦🌅😇✨🙌",
          options: { a: "A Ressurreição de Jesus" },
          correct: "a",
          hint: "Jesus ressuscita dos mortos ao terceiro dia",
        },
        {
          question: "🔥🌬️🗣️🌎🙏",
          options: { a: "Pentecostes" },
          correct: "a",
          hint: "O Espírito Santo desce sobre os apóstolos, início da Igreja",
        },
      ],
    },
  ],
};

// Variáveis de estado do jogo
let currentLevel = ""; // ID do nível de dificuldade atual (e.g., 'easy', 'medium', 'difficult')
let currentQuestionIndex = -1; // Índice da pergunta atual dentro do nível
// Objeto para rastrear quais perguntas foram respondidas em cada nível
// Ex: { easy: [0, 2], medium: [1] }
let answeredQuestions = {};

// Referências aos elementos HTML
const startScreen = document.getElementById("start-screen");
const levelSelectionScreen = document.getElementById("level-selection-screen");
const questionSelectionScreen = document.getElementById(
  "question-selection-screen"
);
const questionDisplayScreen = document.getElementById(
  "question-display-screen"
);

const startButton = document.getElementById("start-button");
const levelOptionsContainer = document.getElementById(
  "level-options-container"
);
const currentQuestionOptions = document.querySelector(".options-container"); // Selecionado pela classe

const gameToolbar = document.getElementById("game-toolbar");
const globalBackButton = document.getElementById("global-back-button");
const answerButtonToolbar = document.getElementById("answer-button-toolbar");
const answerCheckButtonToolbar = document.getElementById(
  "answer-check-button-toolbar"
);
const hintButtonToolbar = document.getElementById("hint-button-toolbar");

const hintDialog = document.getElementById("hint-dialog");
const dialogHintText = document.getElementById("dialog-hint-text");
const closeHintDialogButton = document.getElementById(
  "close-hint-dialog-button"
);

const feedbackDialog = document.getElementById("feedback-dialog");
const feedbackDialogTitle = document.getElementById("feedback-dialog-title");
const feedbackDialogMessage = document.getElementById(
  "feedback-dialog-message"
);
const closeFeedbackDialogButton = document.getElementById(
  "close-feedback-dialog-button"
);

const levelTitle = document.getElementById("level-title");
const questionCount = document.getElementById("question-count");
const questionBlocksContainer = document.getElementById("question-blocks");

const currentQuestionElement = document.getElementById("current-question");
const optionButtons = document.querySelectorAll(".option-button");

let selectedOption = null; // Armazena a opção selecionada pelo jogador

// --- Elementos da Animação ---
const marioAnimationArea = document.getElementById("mario-animation-area");
const marioCharacter = document.getElementById("mario-character");
const obstacleContainer = document.getElementById(
  "obstacle-animation-container"
);

let isJumping = false; // Estado do pulo do Mario
let jumpTimeout; // Para controlar o tempo do pulo

// --- Funções de Animação ---

/**
 * Faz o Mario pular.
 */
function marioJump() {
  if (!isJumping) {
    isJumping = true;
    marioCharacter.style.animation = "marioJump 0.8s ease-out forwards"; // Aplica a animação de pulo
    // Remove a animação de pulo após um tempo para que possa ser aplicada novamente
    jumpTimeout = setTimeout(() => {
      marioCharacter.style.animation = "marioRun 0.5s steps(2) infinite"; // Volta para a animação de corrida
      isJumping = false;
    }, 800); // Duração do pulo deve corresponder à duração da animação CSS
  }
}

/**
 * Gera e move obstáculos aleatoriamente.
 */
function spawnObstacle() {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle"); // Adiciona uma classe para estilização
  obstacleContainer.appendChild(obstacle);

  // Define a posição inicial do obstáculo (fora da tela à direita)
  obstacle.style.left = "100%";

  // Inicia a animação de movimento do obstáculo
  obstacle.style.animation = `moveObstacle 8s linear forwards`; // 'forwards' para que ele pare no final

  // Remove o obstáculo após ele sair da tela para otimização
  obstacle.addEventListener("animationend", () => {
    obstacle.remove();
  });

  // Lógica simples para fazer o Mario pular quando um obstáculo se aproxima
  // Isso é uma simulação, não uma detecção de colisão precisa
  const obstacleAnimationDuration = 8000; // 8 segundos (deve corresponder à animação CSS)
  // Ajustado para que o Mario pule antes do obstáculo chegar à sua posição
  const marioJumpTriggerTime = obstacleAnimationDuration * 0.77; // Alterado de 0.3 para 0.85 para pular mais cedo

  setTimeout(() => {
    marioJump();
  }, marioJumpTriggerTime);
}

/**
 * Inicia o ciclo de spawn de obstáculos em intervalos regulares.
 */
function startObstacleSpawning() {
  // Spawna um obstáculo a cada X segundos (ajustável)
  setInterval(spawnObstacle, 3000); // Spawna um obstáculo a cada 3 segundos
}

// --- Funções de Navegação e Lógica do Jogo ---

/**
 * Exibe uma tela específica e esconde as outras, e gerencia a visibilidade dos botões da toolbar.
 * @param {string} screenId O ID da tela a ser exibida.
 */
function showScreen(screenId) {
  debugger;
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");

  // Esconde a toolbar por padrão em todas as telas
  gameToolbar.classList.add("hidden");
  hintDialog.close(); // Garante que o diálogo da dica esteja fechado ao mudar de tela
  feedbackDialog.close(); // Garante que o diálogo de feedback esteja fechado ao mudar de tela

  // Mostra a toolbar e seus botões relevantes apenas na tela de perguntas
  if (screenId === "question-display-screen") {
    gameToolbar.classList.remove("hidden");
    globalBackButton.dataset.targetScreen = "question-selection-screen"; // Volta para a seleção de perguntas
    globalBackButton.classList.remove("hidden");
    hintButtonToolbar.classList.remove("hidden");
    answerButtonToolbar.classList.remove("hidden");
    answerCheckButtonToolbar.classList.add("hidden");

    if (!quizData.actions.showAwnserButtons) {
      answerButtonToolbar.classList.add("hidden");
      answerCheckButtonToolbar.classList.remove("hidden");
    }
  } else if (screenId === "level-selection-screen") {
    // Na tela de seleção de nível, a toolbar deve estar oculta, mas o botão "Voltar" deve ser visível.
    gameToolbar.classList.add("hidden"); // Toolbar oculta
    globalBackButton.dataset.targetScreen = "start-screen";
    globalBackButton.classList.remove("hidden"); // Botão Voltar visível
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
  } else if (screenId === "question-selection-screen") {
    // Na tela de seleção de perguntas, a toolbar deve estar oculta, mas o botão "Voltar" deve ser visível.
    gameToolbar.classList.add("hidden"); // Toolbar oculta
    globalBackButton.dataset.targetScreen = "level-selection-screen";
    globalBackButton.classList.remove("hidden"); // Botão Voltar visível
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
  }
  // Se for a tela inicial ('start-screen'), a toolbar permanece oculta

  // Controla a visibilidade da toolbar e dos botões de resposta com base em quizData.actions
  if (!quizData.actions.showToolbar) {
    gameToolbar.classList.add("hidden");
  } else {
    gameToolbar.classList.remove("hidden");
  }

  if (!quizData.actions.showAwnserButtons) {
    currentQuestionOptions.classList.add("hidden");
    answerButtonToolbar.classList.add("hidden");
  } else {
    currentQuestionOptions.classList.remove("hidden");
    answerButtonToolbar.classList.remove("hidden");
  }
}

/**
 * Inicia o jogo, transicionando para a tela de seleção de nível.
 */
function startGame() {
  showScreen("level-selection-screen");
}

/**
 * Seleciona um nível de dificuldade e exibe as perguntas disponíveis.
 * @param {string} levelId O ID do nível selecionado ('easy', 'medium', 'difficult').
 */
function selectLevel(levelId) {
  // Encontra o objeto de nível correspondente ao ID dentro de quizData.data
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === levelId
  );
  if (!selectedLevelObject) {
    console.error("Nível não encontrado:", levelId);
    return;
  }

  currentLevel = levelId;
  // Inicializa o array de perguntas respondidas para o nível, se ainda não existir
  answeredQuestions[currentLevel] = answeredQuestions[currentLevel] || [];
  levelTitle.textContent = selectedLevelObject.title; // Usa o título do objeto de nível
  questionCount.textContent = `${selectedLevelObject.questions.length} Perguntas`;
  renderQuestionBlocks(levelId); // Renderiza os blocos de perguntas para o nível
  showScreen("question-selection-screen");
}

/**
 * Renderiza os blocos de perguntas clicáveis para o nível atual.
 * Cada bloco representa uma pergunta e mostra se já foi respondida.
 * @param {string} levelId O ID do nível de dificuldade atual.
 */
function renderQuestionBlocks(levelId) {
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  questionBlocksContainer.innerHTML = ""; // Limpa os blocos existentes
  selectedLevelObject.questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.classList.add("question-block");
    block.dataset.questionIndex = index; // Armazena o índice da pergunta no dataset
    block.textContent = index + 1; // Define o número da pergunta (começando de 1)
    // Adiciona a classe 'answered' se a pergunta já foi respondida neste nível
    if (answeredQuestions[currentLevel].includes(index)) {
      block.classList.add("answered");
      block.textContent = ""; // Oculta o número se a pergunta já foi respondida
    }
    // Adiciona um evento de clique para carregar a pergunta
    block.addEventListener("click", () => {
      // Só carrega a pergunta se ela ainda não foi respondida
      if (!block.classList.contains("answered")) {
        loadQuestion(levelId, index);
      }
    });
    questionBlocksContainer.appendChild(block);
  });
}

/**
 * Carrega e exibe uma pergunta específica na tela de exibição de perguntas.
 * @param {string} levelId O ID do nível da pergunta.
 * @param {number} index O índice da pergunta dentro do nível.
 */
function loadQuestion(levelId, index) {
  debugger;
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  currentQuestionIndex = index;
  const qData = selectedLevelObject.questions[index]; // Dados da pergunta

  currentQuestionElement.textContent = qData.question; // Define o texto da pergunta

  // Aplica a fonte e o tamanho de fonte definidos em quizData
  if(quizData.fontSize) {
    currentQuestionElement.style.fontSize = quizData.fontSize;
  }

  // Preenche e reinicia os botões de opção
  optionButtons.forEach((button) => {
    const optionKey = button.dataset.option;
    button.textContent = `${optionKey.toUpperCase()}) ${
      qData.options[optionKey]
    }`;
    button.classList.remove("selected", "correct-answer", "incorrect-answer"); // Limpa estilos anteriores
    button.disabled = false; // Habilita o botão
    // Adiciona listener para seleção da opção
    button.onclick = () => selectOption(button);
  });

  answerButtonToolbar.disabled = true; // Desabilita o botão de responder até uma opção ser selecionada
  answerCheckButtonToolbar.disabled = false; // Desabilita o botão de responder até uma opção ser selecionada
  hintButtonToolbar.classList.remove("hidden"); // Garante que o botão de dica apareça
  hintButtonToolbar.disabled = false; // Habilita o botão de dica

  showScreen("question-display-screen"); // Exibe a tela da pergunta
}

/**
 * Marca a opção selecionada pelo jogador.
 * @param {HTMLElement} selectedButton O botão de opção que foi clicado.
 */
function selectOption(selectedButton) {
  // Remove a classe 'selected' de todos os botões de opção
  optionButtons.forEach((button) => button.classList.remove("selected"));
  // Adiciona a classe 'selected' ao botão clicado
  selectedButton.classList.add("selected");
  selectedOption = selectedButton.dataset.option; // Armazena a opção selecionada
  answerButtonToolbar.disabled = false; // Habilita o botão "Responder"
  answerCheckButtonToolbar.disabled = false; // Habilita o botão "Responder"
  // Limpa feedback anterior e estilos de resposta
  optionButtons.forEach((button) => {
    button.classList.remove("correct-answer", "incorrect-answer");
  });
}

/**
 * Verifica a resposta do jogador e fornece feedback em um diálogo.
 */
function checkAnswer() {
  if (!selectedOption) return; // Não faz nada se nenhuma opção foi selecionada

  // Acessar quizData.data para encontrar o nível
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  // Desabilita todos os botões de opção após a resposta
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
    checkCorrect(); // Reseta a seleção
  } else {
    feedbackDialogTitle.textContent = "Ops!";
    feedbackDialogMessage.textContent = "Tente novamente!";
    feedbackDialogMessage.style.color = "var(--mario-red)";
    // Adiciona estilo para a resposta incorreta selecionada
    optionButtons.forEach((button) => {
      if (button.dataset.option === selectedOption) {
        button.classList.add("incorrect-answer");
      }
    });
  }
  feedbackDialog.showModal(); // Abre o diálogo de feedback
  answerButtonToolbar.disabled = true; // Impede múltiplas respostas
  answerCheckButtonToolbar.disabled = true; // Impede múltiplas respostas
  hintButtonToolbar.classList.add("hidden"); // Esconde a dica após responder
  // selectedOption = null; // Reseta a seleção
  hintDialog.close(); // Fecha o diálogo da dica se estiver aberto
}

/**
 * Verifica a resposta do jogador e fornece feedback em um diálogo.
 */
function checkCorrectAnswer() {
  debugger;
  selectedButton = Array.from(optionButtons).filter(
    (button) => button.dataset.option == "a"
  )[0];

  if (!selectedButton) return; // Não faz nada se nenhuma opção foi selecionada
  // Adiciona a classe 'selected' ao botão clicado
  selectedButton.classList.add("selected");
  // Armazena a opção selecionada
  selectedOption = selectedButton.dataset.option; // Armazena a opção selecionada
  if (!selectedOption) return; // Não faz nada se nenhuma opção foi selecionada

  // Acessar quizData.data para encontrar o nível
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[0];
  // Desabilita todos os botões de opção após a resposta
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
    checkCorrect(); // Reseta a seleção
  }
  answerButtonToolbar.disabled = true; // Impede múltiplas respostas
  answerCheckButtonToolbar.disabled = true; // Impede múltiplas respostas
  hintButtonToolbar.classList.add("hidden"); // Esconde a dica após responder
  // selectedOption = null; // Reseta a seleção
  hintDialog.close(); // Fecha o diálogo da dica se estiver aberto
}

function checkCorrect() {
  feedbackDialogTitle.textContent = "Certo!";
  feedbackDialogMessage.textContent = "Você ganhou uma moeda!";
  feedbackDialogMessage.style.color = "var(--mario-green)";
  // Adiciona estilo para a resposta correta
  optionButtons.forEach((button) => {
    if (button.dataset.option === selectedOption) {
      button.classList.add("correct-answer");
    }
  });
  // Marca a pergunta como respondida no array e atualiza o bloco visualmente
  if (!answeredQuestions[currentLevel].includes(currentQuestionIndex)) {
    answeredQuestions[currentLevel].push(currentQuestionIndex);
    // Encontra o bloco de pergunta correspondente e adiciona a classe 'answered'
    const questionBlock = document.querySelector(
      `.question-block[data-question-index="${currentQuestionIndex}"]`
    );
    if (questionBlock) {
      questionBlock.classList.add("answered");
      questionBlock.textContent = ""; // Oculta o número do bloco
    }
  }

  selectedOption = null;
}

/**
 * Exibe a dica para a pergunta atual em um diálogo.
 */
function showHint() {
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  dialogHintText.textContent = qData.hint;
  hintDialog.showModal(); // Abre o diálogo
  hintButtonToolbar.disabled = true; // Desabilita a dica após ser usada
}

/**
 * Renderiza os botões de seleção de nível dinamicamente.
 */
function renderLevelSelectionButtons() {
  levelOptionsContainer.innerHTML = ""; // Limpa os botões existentes
  quizData.data.forEach((level) => {
    // Itera sobre quizData.data
    const button = document.createElement("button");
    button.classList.add("level-button", "mario-button");
    button.dataset.level = level.id;
    button.textContent = level.title;
    button.addEventListener("click", () => {
      selectLevel(level.id);
    });
    levelOptionsContainer.appendChild(button);
  });
}

// --- Event Listeners ---

// Evento para o botão "Iniciar Aventura"
startButton.addEventListener("click", startGame);

// Evento para o botão "Voltar" na toolbar
globalBackButton.addEventListener("click", () => {
  const targetScreenId = globalBackButton.dataset.targetScreen;
  if (targetScreenId) {
    showScreen(targetScreenId);
    // Se estiver voltando para a tela de seleção de perguntas, renderize os blocos novamente
    if (targetScreenId === "question-selection-screen") {
      renderQuestionBlocks(currentLevel);
    }
  } else {
    // Caso padrão para voltar ao início se não houver targetScreen definido
    showScreen("start-screen");
  }
});

// Evento para o botão "Responder" na toolbar
answerButtonToolbar.addEventListener("click", checkAnswer);

// Evento para o botão "Responder" na toolbar
answerCheckButtonToolbar.addEventListener("click", checkCorrectAnswer);

// Evento para o botão "Dica" na toolbar
hintButtonToolbar.addEventListener("click", showHint);

// Evento para fechar o diálogo da dica
closeHintDialogButton.addEventListener("click", () => {
  hintDialog.close();
});

// Evento para fechar o diálogo de feedback
closeFeedbackDialogButton.addEventListener("click", () => {
  feedbackDialog.close();

  if (!selectedOption) return; // Não faz nada se nenhuma opção foi selecionada

  // Acessar quizData.data para encontrar o nível
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  // Desabilita todos os botões de opção após a resposta
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
  } else {
    // Adiciona estilo para a resposta incorreta selecionada
    optionButtons.forEach((button) => {
      if (button.dataset.option === selectedOption) {
        button.classList.remove("incorrect-answer");
      }
    });

    // Habilita todos os botões de opção após a resposta
    optionButtons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("incorrect-answer");
      button.classList.remove("selected");
    });
  }
});

// Inicializa a tela de início e renderiza os botões de seleção de nível quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Preenche os títulos da tela inicial dinamicamente
  document.getElementById("start-screen").querySelector("h1").innerHTML =
    quizData.title;
  document.getElementById("start-screen").querySelector("h2").textContent =
    quizData.subtitle;

  showScreen("start-screen");
  renderLevelSelectionButtons(); // Renderiza os botões de nível ao carregar a página
  startObstacleSpawning(); // Inicia a animação de obstáculos
  gameToolbar.classList.add("hidden"); // Garante que a toolbar esteja oculta inicialmente
});
