// Objeto contendo todas as perguntas, divididas por nível de dificuldade.
// A estrutura foi alterada para um objeto único com 'title', 'subtitle' e um array 'data' para os níveis.
const quizData = {
  title: "Descubra o Emoji!",
  subtitle: "O que os emojis querem dizer?",
  fontSize: "5em", // NOVO: Campo de tamanho de fonte para a pergunta atual
  actions: {
    showToolbar: true,
    showAwnserButtons: false,
  },
  data: [
    {
      id: "old-testament",
      title: "Antigo Testamento",
      questions: [
        {
          question: "SRENMUO",
          options: {
            a: "Números",
          },
          correct: "a",
          hint: "Descreve a contagem e as peregrinações do povo de Israel no deserto.",
        },
        {
          question: "OONEDRETMUIO",
          options: {
            a: "Deuteronômio",
          },
          correct: "a",
          hint: 'É o livro da "segunda lei", que reitera as instruções de Deus antes da entrada em Canaã.',
        },
        {
          question: "SCANOCIT",
          options: {
            a: "Cânticos",
          },
          correct: "a",
          hint: "Um poema de amor que celebra o relacionamento entre um homem e uma mulher.",
        },
        {
          question: "SAABDIA",
          options: {
            a: "Obadias",
          },
          correct: "a",
          hint: "O profeta mais curto do Antigo Testamento, que fala sobre a queda de Edom.",
        },
        {
          question: "OJ",
          options: {
            a: "Jó",
          },
          correct: "a",
          hint: "Um livro que explora o sofrimento humano e a soberania de Deus através da história de um homem justo.",
        },
        {
          question: "GAUDE",
          options: {
            a: "Ageu",
          },
          correct: "a",
          hint: "Profeta que incentivou o povo a reconstruir o Templo após o exílio.",
        },
        {
          question: "ERUT",
          options: {
            a: "Rute",
          },
          correct: "a",
          hint: "A história de uma nora fiel que encontra amor e redenção em Belém.",
        },
        {
          question: "SAAMLIC",
          options: {
            a: "Malaquias",
          },
          correct: "a",
          hint: "É o último profeta antes do silêncio de 400 anos, e fala sobre dízimos e ofertas.",
        },
        {
          question: "SACECOSLTIEA",
          options: {
            a: "Eclesiastes",
          },
          correct: "a",
          hint: "Reflete sobre o sentido da vida e a vaidade das coisas sob o sol.",
        },
        {
          question: "SARCINOC1",
          options: {
            a: "1 Crônicas",
          },
          correct: "a",
          hint: "Começa com longas genealogias e fala sobre o reinado de Davi.",
        },
        {
          question: "XOOED",
          options: {
            a: "Êxodo",
          },
          correct: "a",
          hint: "A libertação de Israel do Egito e a entrega dos Dez Mandamentos.",
        },
        {
          question: "PRORSVEBOI",
          options: {
            a: "Provérbios",
          },
          correct: "a",
          hint: "Um livro cheio de sabedoria prática e conselhos para a vida diária.",
        },
        {
          question: "SANJO",
          options: {
            a: "Jonas",
          },
          correct: "a",
          hint: "O profeta que tentou fugir da missão de pregar em Nínive e acabou na barriga de um peixe.",
        },
        {
          question: "ASIAIS",
          options: {
            a: "Isaías",
          },
          correct: "a",
          hint: 'Conhecido como o "príncipe dos profetas", fala muito sobre a vinda do Messias.',
        },
        {
          question: "EL1UMAS",
          options: {
            a: "1 Samuel",
          },
          correct: "a",
          hint: "Conta a história do último juiz de Israel e a ascensão do primeiro rei, Saul.",
        },
        {
          question: "SASJEMRIE",
          options: {
            a: "Jeremias",
          },
          correct: "a",
          hint: 'Conhecido como o "profeta chorão", ele alertou sobre o juízo iminente de Jerusalém.',
        },
        {
          question: "SOMA",
          options: {
            a: "Amós",
          },
          correct: "a",
          hint: "Um pastor e agricultor que profetizou contra a injustiça social.",
        },
        {
          question: "SOONAFIS",
          options: {
            a: "Sofonias",
          },
          correct: "a",
          hint: 'Anuncia o "Dia do Senhor" e a restauração de Israel.',
        },
        {
          question: "NIELDAN",
          options: {
            a: "Daniel",
          },
          correct: "a",
          hint: "Um jovem judeu no exílio que interpretou sonhos e sobreviveu à cova dos leões.",
        },
        {
          question: "CAZARISA",
          options: {
            a: "Zacarias",
          },
          correct: "a",
          hint: "Profeta que teve visões sobre a reconstrução de Jerusalém e a vinda do Messias.",
        },
        {
          question: "SRDAES",
          options: {
            a: "Esdras",
          },
          correct: "a",
          hint: "Narra o retorno dos judeus do exílio babilônico e a reconstrução do Templo.",
        },
        {
          question: "ABCUHAQB",
          options: {
            a: "Habacuque",
          },
          correct: "a",
          hint: "O profeta que questiona a Deus sobre a injustiça e a maldade, e encontra resposta na fé.",
        },
        {
          question: "IVLTCEOI",
          options: {
            a: "Levítico",
          },
          correct: "a",
          hint: "Contém muitas leis sobre sacrifícios, pureza e santidade para o povo de Deus.",
        },
        {
          question: "NEIAMEAS",
          options: {
            a: "Neemias",
          },
          correct: "a",
          hint: "O copeiro do rei que liderou a reconstrução dos muros de Jerusalém.",
        },
        {
          question: "OJ",
          options: {
            a: "Jó",
          },
          correct: "a",
          hint: "Um livro que explora o sofrimento humano e a soberania de Deus através da história de um homem justo.",
        },
        {
          question: "OEJL",
          options: {
            a: "Joel",
          },
          correct: "a",
          hint: "Um profeta que descreve uma praga de gafanhotos e fala sobre o derramamento do Espírito.",
        },
        {
          question: "OEJSU",
          options: {
            a: "Josué",
          },
          correct: "a",
          hint: "A história da conquista da Terra Prometida sob a liderança de um grande capitão.",
        },
        {
          question: "QUIAEMIS",
          options: {
            a: "Miquéias",
          },
          correct: "a",
          hint: "Predisse que o Messias nasceria em Belém.",
        },
        {
          question: "SAIEOS",
          options: {
            a: "Oséias",
          },
          correct: "a",
          hint: "Profeta que usou o relacionamento com sua esposa para ilustrar o amor infiel de Israel por Deus.",
        },
        {
          question: "SEGNEIS",
          options: {
            a: "Gênesis",
          },
          correct: "a",
          hint: 'O livro do "início", que narra a criação, a queda e os primeiros patriarcas.',
        },
        {
          question: "SEIR1",
          options: {
            a: "1 Reis",
          },
          correct: "a",
          hint: "Conta a ascensão de Salomão e a divisão do reino de Israel.",
        },
        {
          question: "SLAMOS",
          options: {
            a: "Salmos",
          },
          correct: "a",
          hint: "Uma coleção de cânticos, orações e poemas para louvar a Deus.",
        },
        {
          question: "UANM",
          options: {
            a: "Naum",
          },
          correct: "a",
          hint: "Anuncia a destruição da grande cidade de Nínive.",
        },
        {
          question: "ZEUEQIL",
          options: {
            a: "Ezequiel",
          },
          correct: "a",
          hint: "O profeta que teve visões complexas, como o vale de ossos secos.",
        },
        {
          question: "ZIUEJS",
          options: {
            a: "Juízes",
          },
          correct: "a",
          hint: "Relata o período em que Israel era governado por líderes carismáticos antes dos reis.",
        },
      ],
    },
    {
      id: "new-testament",
      title: "Novo Testamento",
      questions: [
        {
          question: "SCAMOR",
          options: {
            a: "Marcos",
          },
          correct: "a",
          hint: "O Evangelho mais curto e dinâmico, que mostra Jesus como o Servo sofredor.",
        },
        {
          question: "OAOJ1",
          options: {
            a: "1 João",
          },
          correct: "a",
          hint: "Fala sobre o amor de Deus, a comunhão e a certeza da salvação.",
        },
        {
          question: "STOA",
          options: {
            a: "Atos",
          },
          correct: "a",
          hint: "Narra o início da Igreja após a ascensão de Jesus e a expansão do Evangelho.",
        },
        {
          question: "USBHRE",
          options: {
            a: "Hebreus",
          },
          correct: "a",
          hint: "Exalta a superioridade de Jesus sobre anjos, Moisés e sacerdotes, e fala sobre a fé.",
        },
        {
          question: "SEFIOSE",
          options: {
            a: "Efésios",
          },
          correct: "a",
          hint: "Fala sobre a unidade da igreja como o corpo de Cristo e a armadura de Deus.",
        },
        {
          question: "COSECOLNSSES",
          options: {
            a: "Colossenses",
          },
          correct: "a",
          hint: "Paulo combate falsas doutrinas e exalta a supremacia de Cristo.",
        },
        {
          question: "SDJAU",
          options: {
            a: "Judas",
          },
          correct: "a",
          hint: "Uma pequena carta que exorta os crentes a lutar pela fé contra falsos mestres.",
        },
        {
          question: "TIO1OTEM",
          options: {
            a: "1 Timóteo",
          },
          correct: "a",
          hint: "Paulo escreve a seu jovem discípulo dando instruções sobre como pastorear a igreja.",
        },
        {
          question: "OTAGI",
          options: {
            a: "Tiago",
          },
          correct: "a",
          hint: "Uma carta prática que enfatiza que a fé sem obras é morta.",
        },
        {
          question: "DREPE1",
          options: {
            a: "1 Pedro",
          },
          correct: "a",
          hint: "Encoraja os cristãos a perseverarem em meio ao sofrimento e perseguição.",
        },
        {
          question: "LIPENSESFI",
          options: {
            a: "Filipenses",
          },
          correct: "a",
          hint: "Uma carta de alegria escrita da prisão, incentivando à unidade e à humildade de Cristo.",
        },
        {
          question: "OAOJ",
          options: {
            a: "João",
          },
          correct: "a",
          hint: "O Evangelho que apresenta Jesus como o Verbo encarnado e enfatiza sua divindade.",
        },
        {
          question: "OSNORAM",
          options: {
            a: "Romanos",
          },
          correct: "a",
          hint: "A carta mais completa de Paulo, que explica a doutrina da salvação pela fé.",
        },
        {
          question: "OTIT",
          options: {
            a: "Tito",
          },
          correct: "a",
          hint: "Paulo instrui seu jovem colaborador sobre a organização e conduta na igreja.",
        },
        {
          question: "POCAALISPE",
          options: {
            a: "Apocalipse",
          },
          correct: "a",
          hint: "O último livro da Bíblia, com visões proféticas sobre o fim dos tempos e a volta de Jesus.",
        },
        {
          question: "S1CENAOSLOTENSI",
          options: {
            a: "1 Tessalonicenses",
          },
          correct: "a",
          hint: "Escrita por Paulo, fala sobre a segunda vinda de Cristo e a vida cristã.",
        },
        {
          question: "SIN1COTROI",
          options: {
            a: "1 Coríntios",
          },
          correct: "a",
          hint: "Paulo corrige problemas na igreja de Corinto, como divisões e imoralidade, e fala sobre o amor.",
        },
        {
          question: "SLUCA",
          options: {
            a: "Lucas",
          },
          correct: "a",
          hint: "O Evangelho mais detalhado, escrito por um médico, que enfatiza a humanidade de Jesus e sua atenção aos marginalizados.",
        },
        {
          question: "STAGALAA",
          options: {
            a: "Gálatas",
          },
          correct: "a",
          hint: "Paulo defende a justificação pela fé, não pelas obras da lei.",
        },
        {
          question: "SUTEAM",
          options: {
            a: "Mateus",
          },
          correct: "a",
          hint: "O Evangelho que apresenta Jesus como o Messias prometido, com foco em seus ensinamentos (Sermão da Montanha).",
        },
        {
          question: "OMELNFILE",
          options: {
            a: "Filemom",
          },
          correct: "a",
          hint: "A menor carta de Paulo, pedindo perdão e aceitação para um escravo fugitivo.",
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
  if (quizData.fontSize) {
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
