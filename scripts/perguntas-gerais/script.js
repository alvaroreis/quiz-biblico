// Objeto contendo todas as perguntas, divididas por nível de dificuldade.
// A estrutura foi alterada para um objeto único com 'title', 'subtitle' e um array 'data' para os níveis.
const quizData = {
  title: "Quiz Bíblico:<br> Perguntas Gerais da Biblia!",
  subtitle: "Vamos testar seu conhecimento!",
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
          question: "Quem construiu a arca para se salvar do Grande Dilúvio?",
          options: { a: "Noé" },
          correct: "a",
          hint: "Gênesis 6:14",
        },
        {
          question: "Qual gigante foi derrotado por Davi com uma pedra?",
          options: { a: "Golias" },
          correct: "a",
          hint: "1 Samuel 17:49-50",
        },
        {
          question: "Quem foi engolido por um grande peixe?",
          options: { a: "Jonas" },
          correct: "a",
          hint: "Jonas 1:17",
        },
        {
          question: "Qual foi o primeiro casal humano criado por Deus?",
          options: { a: "Adão e Eva" },
          correct: "a",
          hint: "Gênesis 2:7, 22",
        },
        {
          question: "Quem liderou os israelitas para fora do Egito?",
          options: { a: "Moisés" },
          correct: "a",
          hint: "Êxodo 3:10",
        },
        {
          question: "Em que cidade Jesus nasceu?",
          options: { a: "Belém" },
          correct: "a",
          hint: "Mateus 2:1",
        },
        {
          question: "Qual apóstolo negou Jesus três vezes?",
          options: { a: "Pedro" },
          correct: "a",
          hint: "Mateus 26:69-75",
        },
        {
          question: "Quem foi vendido como escravo pelos seus próprios irmãos?",
          options: { a: "José" },
          correct: "a",
          hint: "Gênesis 37:28",
        },
        {
          question: "Quantos discípulos Jesus escolheu para segui-lo de perto?",
          options: { a: "Doze" },
          correct: "a",
          hint: "Mateus 10:1-4",
        },
        {
          question: "De quem era a força que vinha dos longos cabelos?",
          options: { a: "Sansão" },
          correct: "a",
          hint: "Juízes 16:17",
        },
        {
          question:
            "Qual foi o primeiro milagre de Jesus registrado no Evangelho de João?",
          options: { a: "Transformar água em vinho." },
          correct: "a",
          hint: "João 2:1-11",
        },
        {
          question:
            "Que sinal Deus colocou no céu como promessa de nunca mais destruir a terra com um dilúvio?",
          options: { a: "O arco-íris" },
          correct: "a",
          hint: "Gênesis 9:13",
        },
        {
          question: "Quem recebeu os Dez Mandamentos no Monte Sinai?",
          options: { a: "Moisés" },
          correct: "a",
          hint: "Êxodo 20:1-17",
        },
        {
          question: "Quem foi o primeiro rei de Israel?",
          options: { a: "Saul" },
          correct: "a",
          hint: "1 Samuel 10:24",
        },
        {
          question: "Qual o nome do jardim onde Adão e Eva viviam?",
          options: { a: "Jardim do Éden" },
          correct: "a",
          hint: "Gênesis 2:8",
        },
        {
          question: 'Quem foi o "pai da fé"?',
          options: { a: "Abraão" },
          correct: "a",
          hint: "Romanos 4:16",
        },
        {
          question: "Que instrumento Davi tocava?",
          options: { a: "Harpa" },
          correct: "a",
          hint: "1 Samuel 16:23",
        },
        {
          question: "Quem subiu em uma árvore para ver Jesus?",
          options: { a: "Zaqueu" },
          correct: "a",
          hint: "Lucas 19:4",
        },
        {
          question: "Qual era o nome da mãe de Jesus?",
          options: { a: "Maria" },
          correct: "a",
          hint: "Lucas 1:30-31",
        },
        {
          question: "Qual foi o apóstolo que traiu Jesus?",
          options: { a: "Judas Iscariotes" },
          correct: "a",
          hint: "Mateus 26:14-16",
        },
      ],
    },
    {
      id: "medium",
      title: "Nível Médio",
      questions: [
        {
          question: "Qual profeta foi alimentado por corvos?",
          options: { a: "Elias" },
          correct: "a",
          hint: "1 Reis 17:6",
        },
        {
          question:
            "Qual era a profissão de Pedro antes de se tornar apóstolo?",
          options: { a: "Pescador" },
          correct: "a",
          hint: "Mateus 4:18-19",
        },
        {
          question: "Qual livro da Bíblia é uma coleção de cânticos e poemas?",
          options: { a: "Salmos" },
          correct: "a",
          hint: "(Título do Livro)",
        },
        {
          question: "Quem foi a única mulher que serviu como juíza de Israel?",
          options: { a: "Débora" },
          correct: "a",
          hint: "Juízes 4:4",
        },
        {
          question: "Qual profeta foi jogado em uma cova de leões?",
          options: { a: "Daniel" },
          correct: "a",
          hint: "Daniel 6:16",
        },
        {
          question: "Que rei construiu o primeiro Templo em Jerusalém?",
          options: { a: "Salomão" },
          correct: "a",
          hint: "1 Reis 6:1",
        },
        {
          question: "Quem foi o primeiro mártir do cristianismo?",
          options: { a: "Estêvão" },
          correct: "a",
          hint: "Atos 7:59-60",
        },
        {
          question: "Qual era o nome da esposa de Isaque?",
          options: { a: "Rebeca" },
          correct: "a",
          hint: "Gênesis 24:67",
        },
        {
          question:
            "Quem era o irmão de Moisés que se tornou o primeiro sumo sacerdote?",
          options: { a: "Arão" },
          correct: "a",
          hint: "Êxodo 28:1",
        },
        {
          question:
            "Qual dos doze discípulos duvidou da ressurreição de Jesus até que pudesse ver e tocar em suas feridas?",
          options: { a: "Tomé" },
          correct: "a",
          hint: "João 20:24-25",
        },
        {
          question:
            "Qual o nome da cidade cujas muralhas caíram depois que os israelitas marcharam ao seu redor por sete dias?",
          options: { a: "Jericó" },
          correct: "a",
          hint: "Josué 6:20",
        },
        {
          question: "Qual era o nome do profeta que ungiu Davi como rei?",
          options: { a: "Samuel" },
          correct: "a",
          hint: "1 Samuel 16:13",
        },
        {
          question: "Quem escreveu o livro de Apocalipse?",
          options: { a: "João" },
          correct: "a",
          hint: "Apocalipse 1:1",
        },
        {
          question:
            "Que rainha judia salvou seu povo de um massacre planejado por Hamã?",
          options: { a: "Ester" },
          correct: "a",
          hint: "Ester 7:3-4",
        },
        {
          question:
            "Quem era a mulher de Ló que se transformou em uma estátua de sal?",
          options: { a: "(O nome dela não é mencionado)" },
          correct: "a",
          hint: "Gênesis 19:26",
        },
        {
          question: "De qual tribo de Israel Jesus era descendente?",
          options: { a: "Tribo de Judá" },
          correct: "a",
          hint: "Hebreus 7:14",
        },
        {
          question: 'Qual apóstolo era conhecido como "o médico amado"?',
          options: { a: "Lucas" },
          correct: "a",
          hint: "Colossenses 4:14",
        },
        {
          question: "Quem era o sogro de Moisés?",
          options: { a: "Jetro (ou Reuel)" },
          correct: "a",
          hint: "Êxodo 3:1",
        },
        {
          question:
            "Qual era o nome do profeta que Deus enviou para repreender o rei Davi após seu pecado com Bate-Seba?",
          options: { a: "Natã" },
          correct: "a",
          hint: "2 Samuel 12:1",
        },
        {
          question:
            "Para qual cidade Jonas foi enviado para pregar, contra a sua vontade inicial?",
          options: { a: "Nínive" },
          correct: "a",
          hint: "Jonas 1:2",
        },
      ],
    },
    {
      id: "difficult",
      title: "Nível Difícil",
      questions: [
        {
          question:
            "Qual profeta foi ordenado a se casar com uma prostituta como um sinal da infidelidade de Israel?",
          options: { a: "Oséias" },
          correct: "a",
          hint: "Oséias 1:2-3",
        },
        {
          question:
            "Em qual ilha o apóstolo João recebeu as visões que deram origem ao livro do Apocalipse?",
          options: { a: "Ilha de Patmos" },
          correct: "a",
          hint: "Apocalipse 1:9",
        },
        {
          question:
            "Qual era o nome do profeta que ungiu tanto Saul quanto Davi como reis?",
          options: { a: "Samuel" },
          correct: "a",
          hint: "1 Samuel 10:1; 16:13",
        },
        {
          question:
            "Quem foi o rei que prometeu sacrificar a primeira coisa que saísse de sua casa ao voltar vitorioso de uma batalha, e foi sua própria filha?",
          options: { a: "Jefté" },
          correct: "a",
          hint: "Juízes 11:30-39",
        },
        {
          question:
            "Qual é o nome do levita que, junto com sua esposa Safira, mentiu ao Espírito Santo sobre o valor de uma propriedade vendida e morreu?",
          options: { a: "Ananias" },
          correct: "a",
          hint: "Atos 5:1-10",
        },
        {
          question:
            "Qual profeta viu uma visão de Deus em um carro celestial com quatro seres viventes e rodas cheias de olhos?",
          options: { a: "Ezequiel" },
          correct: "a",
          hint: "Ezequiel 1:4-21",
        },
        {
          question:
            "Qual dos Evangelhos é conhecido por começar com 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus'?",
          options: { a: "Evangelho de João" },
          correct: "a",
          hint: "João 1:1",
        },
        {
          question:
            "Quem foi o imperador romano durante o período em que Jesus Cristo nasceu?",
          options: { a: "César Augusto" },
          correct: "a",
          hint: "Lucas 2:1",
        },
        {
          question:
            "Qual livro do Antigo Testamento narra a história da rainha Ester?",
          options: { a: "Livro de Ester" },
          correct: "a",
          hint: "(Título do livro)",
        },
        {
          question:
            "Qual era o nome do sumo sacerdote que interrogou Pedro e João após a cura do paralítico na porta do templo?",
          options: { a: "Anás" },
          correct: "a",
          hint: "Atos 4:6",
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
