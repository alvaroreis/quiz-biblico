// Objeto contendo todas as perguntas, divididas por nível de dificuldade.
// A estrutura foi alterada para um objeto único com 'title', 'subtitle' e um array 'data' para os níveis.
const quizData = {
  title: "Quiz Bíblico:<br> Charadas da Biblia!",
  subtitle: "Cuidado com as pegadinhas!",
  actions: {
    showToolbar: true,
    showAwnserButtons: false,
  },
  data: [
    {
      id: "easy",
      title: "Nível Fácil",
      questions: [
        {
          question:
            "Fui salvo das águas em um cesto e me tornei líder do meu povo. Quem sou eu?",
          options: { a: "Moisés" },
          correct: "a",
          hint: "Êxodo 2:3-10",
        },
        {
          question:
            "Construí uma arca grande e salvei minha família e os animais do dilúvio. Quem sou eu?",
          options: { a: "Noé" },
          correct: "a",
          hint: "Gênesis 6:13-22",
        },
        {
          question:
            "Venci um gigante com uma pedra e uma funda e me tornei rei de Israel. Quem sou eu?",
          options: { a: "Davi" },
          correct: "a",
          hint: "1 Samuel 17",
        },
        {
          question: "Nasci em Belém e sou o Salvador do mundo. Quem sou eu?",
          options: { a: "Jesus" },
          correct: "a",
          hint: "Lucas 2:1-20",
        },
        {
          question: "Minha esposa, Eva, foi a primeira mulher. Quem sou eu?",
          options: { a: "Adão" },
          correct: "a",
          hint: "Gênesis 2:20-25",
        },
        {
          question: "Traí Jesus por trinta moedas de prata. Quem sou eu?",
          options: { a: "Judas Iscariotes" },
          correct: "a",
          hint: "Mateus 26:14-16",
        },
        {
          question:
            "Fui jogado na cova dos leões, mas Deus me salvou. Quem sou eu?",
          options: { a: "Daniel" },
          correct: "a",
          hint: "Daniel 6",
        },
        {
          question:
            "Fui o homem mais forte, mas perdi minha força quando meu cabelo foi cortado. Quem sou eu?",
          options: { a: "Sansão" },
          correct: "a",
          hint: "Juízes 16",
        },
        {
          question:
            "Fui um profeta que foi engolido por um grande peixe. Quem sou eu?",
          options: { a: "Jonas" },
          correct: "a",
          hint: "Jonas 1:17",
        },
        {
          question: "Fui a mãe de Jesus. Quem sou eu?",
          options: { a: "Maria" },
          correct: "a",
          hint: "Lucas 1:26-38",
        },
        {
          question:
            "Sou um livro da Bíblia que começa com 'No princípio, criou Deus os céus e a terra.' Qual livro sou eu?",
          options: { a: "Gênesis" },
          correct: "a",
          hint: "Gênesis 1:1",
        },
        {
          question:
            "Eu sou o décimo mandamento. Não cobiçarás a casa do teu próximo, não cobiçarás a mulher do teu próximo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma do teu próximo. O que sou eu?",
          options: { a: "Não cobiçar" },
          correct: "a",
          hint: "Êxodo 20:17",
        },
        {
          question: "O que a Bíblia diz que devemos fazer em tudo?",
          options: { a: "Dar graças" },
          correct: "a",
          hint: "1 Tessalonicenses 5:18",
        },
        {
          question:
            "Quem é conhecido por sua sabedoria e pediu a Deus um coração que soubesse discernir?",
          options: { a: "Salomão" },
          correct: "a",
          hint: "1 Reis 3:5-12",
        },
        {
          question: "Qual é o último livro da Bíblia?",
          options: { a: "Apocalipse" },
          correct: "a",
          hint: "Apocalipse 1:1",
        },
      ],
    },
    {
      id: "medium",
      title: "Nível Médio",
      questions: [
        {
          question:
            "Fui um homem justo, salvo de Sodoma e Gomorra, mas minha esposa se tornou uma estátua de sal. Quem sou eu?",
          options: { a: "Ló" },
          correct: "a",
          hint: "Gênesis 19:15-26",
        },
        {
          question:
            "Tive um sonho com uma escada que ia até o céu e Deus renovou Sua aliança comigo ali. Quem sou eu?",
          options: { a: "Jacó" },
          correct: "a",
          hint: "Gênesis 28:10-22",
        },
        {
          question:
            "Fui o primeiro rei de Israel, mas desobedeci a Deus. Quem sou eu?",
          options: { a: "Saul" },
          correct: "a",
          hint: "1 Samuel 10, 15",
        },
        {
          question:
            "Fui uma rainha corajosa que salvou seu povo de um plano maligno, arriscando sua própria vida. Quem sou eu?",
          options: { a: "Ester" },
          correct: "a",
          hint: "Ester 4:13-16",
        },
        {
          question:
            "Fui o irmão de Moisés e me tornei o primeiro sumo sacerdote. Quem sou eu?",
          options: { a: "Arão" },
          correct: "a",
          hint: "Êxodo 7:1-7",
        },
        {
          question:
            "Fui um profeta que subiu ao céu em um carro de fogo. Quem sou eu?",
          options: { a: "Elias" },
          correct: "a",
          hint: "2 Reis 2:11",
        },
        {
          question:
            "Fui cego, mas Jesus me curou. Comecei a segui-Lo e glorificá-Lo. Quem sou eu?",
          options: { a: "Bartimeu" },
          correct: "a",
          hint: "Marcos 10:46-52",
        },
        {
          question:
            "Fui uma das duas esposas de Jacó e mãe de José e Benjamim. Morri no caminho para Efrata. Quem sou eu?",
          options: { a: "Raquel" },
          correct: "a",
          hint: "Gênesis 29:1-30, 35:16-19",
        },
        {
          question:
            "Fui um apóstolo que negou Jesus três vezes antes do galo cantar. Quem sou eu?",
          options: { a: "Pedro" },
          correct: "a",
          hint: "Mateus 26:69-75",
        },
        {
          question:
            "Minha cidade foi destruída porque o povo adorou um bezerro de ouro. Qual cidade sou eu?",
          options: { a: "Sodoma" },
          correct: "a",
          hint: "Gênesis 19",
        },
        {
          question:
            "Qual o nome do jardim onde Jesus orou intensamente antes de ser preso?",
          options: { a: "Getsêmani" },
          correct: "a",
          hint: "Mateus 26:36-46",
        },
        {
          question: "Qual era o nome do discípulo que Jesus amava?",
          options: { a: "João" },
          correct: "a",
          hint: "João 13:23",
        },
        {
          question:
            "Qual profeta desafiou os profetas de Baal no Monte Carmelo?",
          options: { a: "Elias" },
          correct: "a",
          hint: "1 Reis 18:16-40",
        },
        {
          question: "Em qual cidade nasceu o apóstolo Paulo?",
          options: { a: "Tarso" },
          correct: "a",
          hint: "Atos 21:39",
        },
        {
          question:
            "Qual era o nome do homem rico que pediu o corpo de Jesus para o sepultamento?",
          options: { a: "José de Arimateia" },
          correct: "a",
          hint: "Mateus 27:57-60",
        },
        {
          question: "Qual animal falou com Balaão?",
          options: { a: "Jumenta" },
          correct: "a",
          hint: "Números 22:21-35",
        },
        {
          question:
            "Qual a cidade conhecida por suas muralhas que caíram após os israelitas marcharem ao redor dela?",
          options: { a: "Jericó" },
          correct: "a",
          hint: "Josué 6",
        },
        {
          question: "Qual o nome do pai de João Batista?",
          options: { a: "Zacarias" },
          correct: "a",
          hint: "Lucas 1:5-25",
        },
        {
          question:
            "Fui o discípulo que duvidou da ressurreição de Jesus até que pudesse tocar em Suas feridas. Quem sou eu?",
          options: { a: "Tomé" },
          correct: "a",
          hint: "João 20:24-29",
        },
        {
          question:
            "Qual o nome do livro que contém a história de Davi e Golias?",
          options: { a: "1 Samuel" },
          correct: "a",
          hint: "1 Samuel 17",
        },
      ],
    },
    {
      id: "difficult",
      title: "Nível Difícil",
      questions: [
        {
          question:
            "Fui um profeta que teve uma visão de um vale de ossos secos que ganharam vida. Quem sou eu?",
          options: { a: "Ezequiel" },
          correct: "a",
          hint: "Ezequiel 37:1-14",
        },
        {
          question:
            "Fui um rei justo que orou por cura e teve mais quinze anos de vida adicionados. Quem sou eu?",
          options: { a: "Ezequias" },
          correct: "a",
          hint: "2 Reis 20:1-11",
        },
        {
          question:
            "Minha história é contada em um dos poucos livros da Bíblia que levam o nome de uma mulher e fala de fidelidade e lealdade. Qual livro e quem sou eu?",
          options: { a: "Rute" },
          correct: "a",
          hint: "Livro de Rute",
        },
        {
          question:
            "Fui um mestre da lei que foi visitar Jesus à noite para entender melhor o Reino de Deus. Quem sou eu?",
          options: { a: "Nicodemos" },
          correct: "a",
          hint: "João 3:1-21",
        },
        {
          question:
            "Quem foi o profeta que ungiu tanto Saul quanto Davi como reis?",
          options: { a: "Samuel" },
          correct: "a",
          hint: "1 Samuel 10:1, 16:13",
        },
        {
          question:
            "Em qual dos evangelhos encontramos a parábola do Filho Pródigo?",
          options: { a: "Lucas" },
          correct: "a",
          hint: "Lucas 15:11-32",
        },
        {
          question:
            "Qual era o nome do sumo sacerdote que presidiu o julgamento de Jesus?",
          options: { a: "Caifás" },
          correct: "a",
          hint: "Mateus 26:57-68",
        },
        {
          question:
            "Qual apóstolo foi apedrejado e deixado como morto em Listra, mas se levantou e continuou a pregar?",
          options: { a: "Paulo" },
          correct: "a",
          hint: "Atos 14:19-20",
        },
        {
          question:
            "Qual o nome da profetisa que ajudou o rei Josias a entender as palavras da Lei?",
          options: { a: "Hulda" },
          correct: "a",
          hint: "2 Reis 22:14-20",
        },
        {
          question:
            "Fui um homem rico que se tornou um seguidor de Jesus e era de Jericó. Eu era muito baixo. Quem sou eu?",
          options: { a: "Zaqueu" },
          correct: "a",
          hint: "Lucas 19:1-10",
        },
        {
          question:
            "Qual rio foi dividido para que os israelitas pudessem entrar na Terra Prometida?",
          options: { a: "Rio Jordão" },
          correct: "a",
          hint: "Josué 3",
        },
        {
          question:
            "Quem foi o governador romano que lavou as mãos, declarando-se inocente da morte de Jesus?",
          options: { a: "Pôncio Pilatos" },
          correct: "a",
          hint: "Mateus 27:24",
        },
        {
          question:
            "Qual o nome do homem que foi levado para o céu sem experimentar a morte?",
          options: { a: "Enoque" },
          correct: "a",
          hint: "Gênesis 5:24, Hebreus 11:5",
        },
        {
          question:
            "Qual o profeta que foi exilado na ilha de Patmos e recebeu visões do fim dos tempos?",
          options: { a: "João (o apóstolo)" },
          correct: "a",
          hint: "Apocalipse 1:9",
        },
        {
          question:
            "Qual o nome do servo do sumo sacerdote que teve a orelha cortada por Pedro e foi curada por Jesus?",
          options: { a: "Malco" },
          correct: "a",
          hint: "João 18:10-11, Lucas 22:50-51",
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
  //answerCheckButtonToolbar.disabled = true; // Desabilita o botão de responder até uma opção ser selecionada
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
