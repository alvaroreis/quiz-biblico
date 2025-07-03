// As variáveis e funções de outros arquivos (default-quiz-data.js, storage.js, mario-animations.js)
// são assumidas como globais e carregadas antes deste script no HTML.

// Variável que irá armazenar os dados do quiz (carregados do localStorage ou padrão)
let quizData; // Será preenchida por loadGameData

// Variável para armazenar o tema atual (carregado do localStorage ou padrão)
let themeMode; // Será preenchida por loadGameData

// Variável para armazenar o tamanho da fonte da pergunta atual
let currentFontSize; // Será preenchida por loadGameData

// Variáveis de estado do jogo
let currentLevel = ""; // ID do nível de dificuldade atual (e.g., 'easy', 'medium', 'difficult')
let currentQuestionIndex = -1; // Índice da pergunta atual dentro do nível
// Objeto para rastrear quais perguntas foram respondidas em cada nível
// Ex: { easy: [0, 2], medium: [1] }
let answeredQuestions; // Será preenchida por loadGameData

// Referências aos elementos HTML
const quizSelectionScreen = document.getElementById("quiz-selection-screen");
const quizSelect = document.getElementById("quiz-select");
const loadQuizButton = document.getElementById("load-quiz-button");

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
const currentQuestionOptions = document.getElementById("current-question-options");

const gameToolbar = document.getElementById("game-toolbar");
const globalBackButton = document.getElementById("global-back-button");
const answerButtonToolbar = document.getElementById("answer-button-toolbar");
const answerCheckButtonToolbar = document.getElementById(
    "answer-check-button-toolbar"
);
const hintButtonToolbar = document.getElementById("hint-button-toolbar");
const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox"); // Referência ao checkbox

// Referências aos elementos do slider de fonte
const fontSizeSlider = document.getElementById("font-size-slider");
const fontSizeValueSpan = document.getElementById("font-size-value");
const fontSizeSliderContainer = document.querySelector(".font-size-slider-container"); // Container do slider de fonte


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

let selectedOption = null;


// --- Funções de Navegação e Lógica do Jogo ---

/**
 * Exibe uma tela específica e esconde as outras, e gerencia a visibilidade dos botões da toolbar.
 * @param {string} screenId O ID da tela a ser exibida.
 */
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");

  // Esconde a toolbar por padrão em todas as telas
  gameToolbar.classList.add("hidden");
  hintDialog.close();
  feedbackDialog.close();
  hideDarkScreen();

  // Esconde o slider de fonte por padrão em todas as telas
  fontSizeSliderContainer.classList.add('hidden'); // Esconde o slider por padrão

  // Lógica de visibilidade da toolbar e botões específicos por tela
  if (screenId === "question-display-screen") {
    gameToolbar.classList.remove("hidden");
    globalBackButton.dataset.targetScreen = "question-selection-screen";
    globalBackButton.classList.remove("hidden");
    hintButtonToolbar.classList.remove("hidden");
    fontSizeSliderContainer.classList.remove('hidden'); // Mostra o slider apenas na tela de pergunta

    // Lógica para showAwnserButtons e currentQuestionOptions
    if (quizData && quizData.actions) { // Ensure quizData.actions is defined
      if (!quizData.actions.showAwnserButtons) {
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.remove("hidden");
        currentQuestionOptions.classList.add("hidden"); // Oculta as opções de resposta
        // Adiciona classe para centralizar e remover cursor quando opções não são mostradas
        questionDisplayScreen.classList.add('no-answer-options');
      } else {
        answerButtonToolbar.classList.remove("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        currentQuestionOptions.classList.remove("hidden"); // Mostra as opções de resposta
        // Remove classe se as opções forem mostradas
        questionDisplayScreen.classList.remove('no-answer-options');
      }
    } else {
      // Fallback if quizData.actions is not yet available (shouldn't happen on this screen generally)
      answerButtonToolbar.classList.remove("hidden");
      answerCheckButtonToolbar.classList.add("hidden");
      currentQuestionOptions.classList.remove("hidden");
      questionDisplayScreen.classList.remove('no-answer-options'); // Garante que a classe seja removida
    }
  } else if (screenId === "level-selection-screen") {
    gameToolbar.classList.remove("hidden");
    globalBackButton.dataset.targetScreen = "start-screen"; // Voltar da seleção de nível para a tela inicial
    globalBackButton.classList.remove("hidden"); // Mostrar botão voltar
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
    currentQuestionOptions.classList.remove("hidden"); // Garante que esteja visível em outras telas
    questionDisplayScreen.classList.remove('no-answer-options'); // Garante que a classe seja removida
  } else if (screenId === "question-selection-screen") {
    gameToolbar.classList.remove("hidden");
    globalBackButton.dataset.targetScreen = "level-selection-screen";
    globalBackButton.classList.remove("hidden");
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
    currentQuestionOptions.classList.remove("hidden"); // Garante que esteja visível em outras telas
    questionDisplayScreen.classList.remove('no-answer-options'); // Garante que a classe seja removida
  } else if (screenId === "quiz-selection-screen") {
    gameToolbar.classList.add("hidden");
    globalBackButton.classList.add("hidden"); // Sem botão voltar na seleção de quiz
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
    currentQuestionOptions.classList.remove("hidden"); // Garante que esteja visível em outras telas
    questionDisplayScreen.classList.remove('no-answer-options'); // Garante que a classe seja removida
  } else { // start-screen
    gameToolbar.classList.remove('hidden'); // Toolbar oculta na tela inicial
    globalBackButton.dataset.targetScreen = "quiz-selection-screen"; // Voltar da tela inicial para a seleção de quiz
    globalBackButton.classList.remove("hidden"); // Mostrar botão voltar
    answerButtonToolbar.classList.add('hidden');
    answerCheckButtonToolbar.classList.add('hidden');
    hintButtonToolbar.classList.add('hidden');
    currentQuestionOptions.classList.remove("hidden"); // Garante que esteja visível em outras telas
    questionDisplayScreen.classList.remove('no-answer-options'); // Garante que a classe seja removida
  }

  // Certificar-se de que a toolbar está oculta se quizData.actions.showToolbar for false
  if (quizData && quizData.actions && !quizData.actions.showToolbar) {
    gameToolbar.classList.add("hidden");
  }
  // O botão de tema e o slider de fonte agora são elementos independentes e sempre visíveis (controlados por esta função).
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
  const selectedLevelObject = quizData.data.find(
      (level) => level.id === levelId
  );
  if (!selectedLevelObject) {
    console.error("Nível não encontrado:", levelId);
    return;
  }

  currentLevel = levelId;
  answeredQuestions[currentLevel] = answeredQuestions[currentLevel] || {};
  levelTitle.textContent = selectedLevelObject.title;
  questionCount.textContent = `${selectedLevelObject.questions.length} Perguntas`;
  renderQuestionBlocks(levelId);
  showScreen("question-selection-screen");
}

/**
 * Renderiza os blocos de perguntas clicáveis para o nível atual.
 * @param {string} levelId
 * O ID do nível de dificuldade atual.
 */
function renderQuestionBlocks(levelId) {
  const selectedLevelObject = quizData.data.find(
      (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  questionBlocksContainer.innerHTML = "";
  selectedLevelObject.questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.classList.add("question-block");
    block.dataset.questionIndex = index;
    block.textContent = index + 1;
    if (answeredQuestions[currentLevel] && answeredQuestions[currentLevel][index]) {
      block.classList.add("answered");
      block.textContent = "";
    }
    block.addEventListener("click", () => {
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
  showDarkScreen();
  const selectedLevelObject = quizData.data.find(
      (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  currentQuestionIndex = index;
  const qData = selectedLevelObject.questions[index];

  currentQuestionElement.textContent = qData.question;

  // Aplica a fonte e o tamanho da fonte do quiz
  if(quizData.font) {
    currentQuestionElement.style.fontFamily = quizData.font;
  } else {
    currentQuestionElement.style.fontFamily = ''; // Remove se não houver fonte definida no quiz
  }
  // Aplica o tamanho da fonte do slider, se houver, senão volta ao padrão do CSS ou quizData.fontSize
  if (currentFontSize) {
    currentQuestionElement.style.setProperty('font-size', `${currentFontSize}em`, 'important');
  } else if (quizData.fontSize) {
    currentQuestionElement.style.setProperty('font-size', quizData.fontSize, 'important');
  } else {
    currentQuestionElement.style.removeProperty('font-size'); // Remove a propriedade para o CSS padrão ser aplicado
  }


  optionButtons.forEach((button) => {
    const optionKey = button.dataset.option;
    if (qData.options[optionKey] !== undefined) {
      button.textContent = `${optionKey.toUpperCase()}) ${
          qData.options[optionKey]
      }`;
      button.classList.remove("selected", "correct-answer", "incorrect-answer");
      button.disabled = false;
      button.onclick = () => selectOption(button);
      button.style.display = '';
    } else {
      button.style.display = 'none';
    }
  });

  // Ajuste aqui: Define o estado inicial dos botões da toolbar
  if (!quizData.actions.showAwnserButtons) {
    answerButtonToolbar.disabled = true;
    answerCheckButtonToolbar.disabled = false;
    optionButtons.forEach(button => button.disabled = true);
  } else {
    answerButtonToolbar.disabled = true;
    answerCheckButtonToolbar.disabled = true;
    optionButtons.forEach(button => button.disabled = false);
  }

  hintButtonToolbar.classList.remove("hidden");
  hintButtonToolbar.disabled = false;

  setTimeout(() => {
    showScreen("question-display-screen");
    hideDarkScreen();
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }, 300);
}

/**
 * Marca a opção selecionada pelo jogador.
 * @param {HTMLElement} selectedButton O botão de opção que foi clicado.
 */
function selectOption(selectedButton) {
  optionButtons.forEach((button) => button.classList.remove("selected"));
  selectedButton.classList.add("selected");
  selectedOption = selectedButton.dataset.option;

  if (quizData.actions.showAwnserButtons) {
    answerButtonToolbar.disabled = false;
  } else {
    answerCheckButtonToolbar.disabled = false;
  }
}

/**
 * Verifica a resposta do jogador e fornece feedback em um diálogo.
 */
function checkAnswer() {
  if (!selectedOption) return;

  const selectedLevelObject = quizData.data.find(
      (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
    checkCorrect();
    if (!answeredQuestions[currentLevel]) {
      answeredQuestions[currentLevel] = {};
    }
    answeredQuestions[currentLevel][currentQuestionIndex] = true;
    saveGameProgress(answeredQuestions, quizData.id);
  } else {
    feedbackDialogTitle.textContent = "Ops!";
    feedbackDialogMessage.textContent = "Tente novamente!";
    feedbackDialogMessage.style.color = "var(--mario-red)";
    optionButtons.forEach((button) => {
      if (button.dataset.option === selectedOption) {
        button.classList.add("incorrect-answer");
      }
    });
  }
  feedbackDialog.showModal();
  answerButtonToolbar.disabled = true;
  answerCheckButtonToolbar.disabled = true;
  hintButtonToolbar.classList.add("hidden");
  hintDialog.close();
}

/**
 * Marca a resposta correta e fornece feedback.
 * Usado quando quizData.actions.showAwnserButtons é false.
 */
function checkCorrectAnswer() {
  const selectedLevelObject = quizData.data.find(
      (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  const correctOptionKey = qData.correct;

  selectedOption = correctOptionKey;

  optionButtons.forEach((button) => {
    button.classList.remove("selected", "incorrect-answer");
    if (button.dataset.option === correctOptionKey) {
      button.classList.add("correct-answer");
    }
    button.disabled = true;
  });


  checkCorrect();
  if (!answeredQuestions[currentLevel]) {
    answeredQuestions[currentLevel] = {};
  }
  answeredQuestions[currentLevel][currentQuestionIndex] = true;
  saveGameProgress(answeredQuestions, quizData.id);

  answerButtonToolbar.disabled = true;
  answerCheckButtonToolbar.disabled = true;
  hintButtonToolbar.classList.add("hidden");
  hintDialog.close();
  feedbackDialog.showModal();
}

function checkCorrect() {
  feedbackDialogTitle.textContent = "Certo!";
  feedbackDialogMessage.textContent = "Você ganhou uma moeda!";
  feedbackDialogMessage.style.color = "var(--mario-green)";
  optionButtons.forEach((button) => {
    if (button.dataset.option === selectedOption) {
      button.classList.add("correct-answer");
    }
  });
  if (!answeredQuestions[currentLevel] || !answeredQuestions[currentLevel][currentQuestionIndex]) {
    if (!answeredQuestions[currentLevel]) {
      answeredQuestions[currentLevel] = {};
    }
    answeredQuestions[currentLevel][currentQuestionIndex] = true;
    const questionBlock = document.querySelector(
        `.question-block[data-question-index="${currentQuestionIndex}"]`
    );
    if (questionBlock) {
      questionBlock.classList.add("answered");
      questionBlock.textContent = "";
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
  hintDialog.showModal();
  hintButtonToolbar.disabled = true;
}

/**
 * Renderiza os botões de seleção de nível dinamicamente.
 */
function renderLevelSelectionButtons() {
  levelOptionsContainer.innerHTML = "";
  if (quizData.data && Array.isArray(quizData.data)) {
    quizData.data.forEach((level) => {
      const button = document.createElement("button");
      button.classList.add("level-button", "mario-button");
      button.dataset.level = level.id;
      button.textContent = level.title;
      button.addEventListener("click", () => {
        selectLevel(level.id);
      });
      levelOptionsContainer.appendChild(button);
    });
  } else {
    console.error("quizData.data não é um array ou está indefinido:", quizData.data);
  }
}

/**
 * Configura a tela de seleção de quiz.
 * Popula o combobox e gerencia o carregamento do quiz.
 */
function setupQuizSelectionScreen() {
  quizSelect.innerHTML = '';

  QUIZ_OPTIONS.forEach(quizOption => {
    const option = document.createElement('option');
    option.value = quizOption.id;
    option.textContent = quizOption.name;
    quizSelect.appendChild(option);
  });

  const lastSelectedQuizId = localStorage.getItem('currentSelectedQuizId');
  if (lastSelectedQuizId && QUIZ_OPTIONS.some(q => q.id === lastSelectedQuizId)) {
    quizSelect.value = lastSelectedQuizId;
  }

  showScreen("quiz-selection-screen");
  startScreen.classList.remove('active');
  levelSelectionScreen.classList.remove('active');
  questionSelectionScreen.classList.remove('active');
  questionDisplayScreen.classList.remove('active');

  loadQuizButton.addEventListener('click', () => {
    const selectedQuizId = quizSelect.value;
    localStorage.setItem('currentSelectedQuizId', selectedQuizId);

    // NOVO: Limpa quizData e appFontSize do localStorage ao carregar um novo quiz
    localStorage.removeItem('currentQuizConfig');
    localStorage.removeItem('appFontSize');

    const selectedQuizOption = QUIZ_OPTIONS.find(q => q.id === selectedQuizId);
    if (selectedQuizOption) {
      localStorage.setItem('appThemeMode', selectedQuizOption.data.theme || 'light');
      // Define o valor inicial do slider com base em quizData.fontSize ou 2.0 (novo mínimo)
      const initialFontSize = selectedQuizOption.data.fontSize ? parseFloat(selectedQuizOption.data.fontSize) : 2.0;
      localStorage.setItem('appFontSize', initialFontSize);
      localStorage.setItem('currentQuizConfig', JSON.stringify(selectedQuizOption.data));

      const loadedData = loadGameData(selectedQuizOption.data);
      quizData = loadedData.quizData;
      answeredQuestions = loadedData.answeredQuestions;
      initializeGame();
    } else {
      console.error("Quiz selecionado não encontrado nos QUIZ_OPTIONS.");
    }
  });
}


/**
 * Função para inicializar o jogo (dados do quiz e progresso)
 */
function initializeGame() {
  themeMode = localStorage.getItem('appThemeMode') || 'light';
  // Carrega o tamanho da fonte do localStorage, ou usa o valor padrão do quiz, ou 2.0 (novo mínimo)
  currentFontSize = localStorage.getItem('appFontSize') || (quizData.fontSize ? parseFloat(quizData.fontSize) : 2.0);

  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(themeMode + "-theme");

  document.getElementById("start-screen").querySelector("h1").innerHTML =
      quizData.title;
  document.getElementById("start-screen").querySelector("h2").textContent =
      quizData.subtitle;

  showScreen("start-screen");
  renderLevelSelectionButtons();
  startObstacleSpawning();
  gameToolbar.classList.add("hidden");

  // O event listener para o botão "Iniciar Aventura" AQUI.
  // Isso garante que ele seja anexado depois que o quizData é carregado e a start-screen é exibida.
  startButton.addEventListener("click", startGame);

  // Define o estado inicial do checkbox de tema
  themeToggleCheckbox.checked = (themeMode === 'dark');

  // Define o estado inicial do slider de fonte e do span de valor
  fontSizeSlider.value = currentFontSize;
  // Formata para ter sempre uma casa decimal
  fontSizeValueSpan.textContent = `${parseFloat(currentFontSize).toFixed(1)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Anexar event listeners para os botões da toolbar uma única vez.
  globalBackButton.addEventListener("click", () => {
    const targetScreenId = globalBackButton.dataset.targetScreen;
    if (targetScreenId === "quiz-selection-screen") { // Se o destino é a tela de seleção de quiz
      // Limpa os dados do quiz atual e o progresso do localStorage
      localStorage.removeItem('currentSelectedQuizId');
      localStorage.removeItem('appThemeMode');
      localStorage.removeItem('appFontSize'); // Limpa a preferência de tamanho de fonte
      // A chave do answeredQuestions é dinâmica, então precisamos do quizData.id atual
      if (quizData && quizData.id) {
        localStorage.removeItem(`answeredQuestions_${quizData.id}`);
      }
      // Redefine as variáveis globais
      quizData = undefined;
      answeredQuestions = {};
      currentFontSize = undefined; // Reseta o tamanho da fonte
      // Volta para a tela de seleção de quiz
      setupQuizSelectionScreen();
    } else if (targetScreenId) { // Para outros destinos de "Voltar"
      showScreen(targetScreenId);
      if (targetId === "question-selection-screen") { // Corrigido: targetId para targetScreenId
        renderQuestionBlocks(currentLevel);
      }
    } else { // Fallback, caso não haja targetScreenId
      showScreen("start-screen");
    }
  });

  answerButtonToolbar.addEventListener("click", checkAnswer);
  answerCheckButtonToolbar.addEventListener("click", checkCorrectAnswer);
  hintButtonToolbar.addEventListener("click", showHint);

  themeToggleCheckbox.addEventListener("change", () => { // Listener para o checkbox de tema
    themeMode = themeToggleCheckbox.checked ? 'dark' : 'light';
    localStorage.setItem('appThemeMode', themeMode);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(themeMode + "-theme");
  });

  // Listener para o slider de tamanho da fonte
  fontSizeSlider.addEventListener("input", (event) => {
    currentFontSize = event.target.value;
    // Formata para ter sempre uma casa decimal
    fontSizeValueSpan.textContent = `${parseFloat(currentFontSize).toFixed(1)}`;
    localStorage.setItem('appFontSize', currentFontSize); // Salva a preferência do usuário
    // Aplica o novo tamanho da fonte imediatamente se estiver na tela de pergunta
    if (document.getElementById("question-display-screen").classList.contains("active")) {
      currentQuestionElement.style.setProperty('font-size', `${currentFontSize}em`, 'important');
    }
  });

  closeHintDialogButton.addEventListener("click", () => {
    hintDialog.close();
  });

  closeFeedbackDialogButton.addEventListener("click", () => {
    feedbackDialog.close();
    if (selectedOption !== null) {
      const selectedLevelObject = quizData.data.find(
          (level) => level.id === currentLevel
      );
      if (!selectedLevelObject) return;

      optionButtons.forEach((button) => {
        if (button.dataset.option === selectedOption) {
          button.classList.remove("incorrect-answer");
        }
        button.disabled = false;
        button.classList.remove("selected");
      });
      answerButtonToolbar.disabled = false;
      answerCheckButtonToolbar.disabled = false;
      hintButtonToolbar.classList.remove("hidden");
      selectedOption = null;
    }
  });

  const lastSelectedQuizId = localStorage.getItem('currentSelectedQuizId');
  if (lastSelectedQuizId) {
    const selectedQuizOption = QUIZ_OPTIONS.find(q => q.id === lastSelectedQuizId);
    if (selectedQuizOption) {
      const loadedData = loadGameData(selectedQuizOption.data);
      quizData = loadedData.quizData;
      answeredQuestions = loadedData.answeredQuestions;
      initializeGame();
      return;
    }
  }
  setupQuizSelectionScreen();
});
