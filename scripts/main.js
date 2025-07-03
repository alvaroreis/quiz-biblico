// Importa as funcionalidades dos outros módulos
import { loadGameData, saveGameProgress } from './storage.js';
import { startObstacleSpawning, showDarkScreen, hideDarkScreen } from './mario-animations.js';

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

// Variável para armazenar os dados de QUIZ_OPTIONS carregados do JSON
let QUIZ_OPTIONS_DATA = [];

// Caminho para o arquivo JSON do quiz
const pathData = '/data/quiz-data.json'; // Variável atualizada aqui

// Referências aos elementos HTML (agora obtidas no DOMContentLoaded)
let quizSelectionScreen;
let quizSelect;
let loadQuizButton;

let startScreen;
let levelSelectionScreen;
let questionSelectionScreen;
let questionDisplayScreen;

let startButton;
let levelOptionsContainer;
let currentQuestionOptions;

let gameToolbar;
let globalBackButton;
let answerButtonToolbar;
let answerCheckButtonToolbar;
let hintButtonToolbar;
let clearProgressButton; // Adicionada referência ao novo botão
let themeToggleCheckbox;

let fontSizeSlider;
let fontSizeValueSpan;
let fontSizeSliderContainer;

let hintDialog;
let dialogHintText;
let closeHintDialogButton;

let feedbackDialog;
let feedbackDialogTitle;
let feedbackDialogMessage;
let closeFeedbackDialogButton;

let levelTitle;
let questionCount;
let questionBlocksContainer;

let currentQuestionElement;
let optionButtons;

let selectedOption = null;

/**
 * Obtém todas as referências DOM. Chamado no DOMContentLoaded.
 */
function getDOMElements() {
    quizSelectionScreen = document.getElementById("quiz-selection-screen");
    quizSelect = document.getElementById("quiz-select");
    loadQuizButton = document.getElementById("load-quiz-button");

    startScreen = document.getElementById("start-screen");
    levelSelectionScreen = document.getElementById("level-selection-screen");
    questionSelectionScreen = document.getElementById("question-selection-screen");
    questionDisplayScreen = document.getElementById("question-display-screen");

    startButton = document.getElementById("start-button");
    levelOptionsContainer = document.getElementById("level-options-container");
    currentQuestionOptions = document.getElementById("current-question-options");

    gameToolbar = document.getElementById("game-toolbar");
    globalBackButton = document.getElementById("global-back-button");
    answerButtonToolbar = document.getElementById("answer-button-toolbar");
    answerCheckButtonToolbar = document.getElementById("answer-check-button-toolbar");
    hintButtonToolbar = document.getElementById("hint-button-toolbar");
    clearProgressButton = document.getElementById("clear-progress-button"); // Obtendo a referência do novo botão
    themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");

    fontSizeSlider = document.getElementById("font-size-slider");
    fontSizeValueSpan = document.getElementById("font-size-value");
    fontSizeSliderContainer = document.querySelector(".font-size-slider-container");

    hintDialog = document.getElementById("hint-dialog");
    dialogHintText = document.getElementById("dialog-hint-text");
    closeHintDialogButton = document.getElementById("close-hint-dialog-button");

    feedbackDialog = document.getElementById("feedback-dialog");
    feedbackDialogTitle = document.getElementById("feedback-dialog-title");
    feedbackDialogMessage = document.getElementById("feedback-dialog-message");
    closeFeedbackDialogButton = document.getElementById("close-feedback-dialog-button");

    levelTitle = document.getElementById("level-title");
    questionCount = document.getElementById("question-count");
    questionBlocksContainer = document.getElementById("question-blocks");

    currentQuestionElement = document.getElementById("current-question");
    optionButtons = document.querySelectorAll(".option-button");
}


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

    // Esconde o slider de fonte e o botão de limpar progresso por padrão em todas as telas
    fontSizeSliderContainer.classList.add('hidden');
    clearProgressButton.classList.add("hidden"); // Esconde o botão de limpar progresso por padrão

    // Garante que as opções de resposta estejam visíveis por padrão,
    // e serão ocultadas ou não dependendo da lógica abaixo.
    currentQuestionOptions.classList.remove("hidden");

    // Lógica de visibilidade da toolbar e botões específicos por tela
    if (screenId === "question-display-screen") {
        gameToolbar.classList.remove("hidden");
        globalBackButton.dataset.targetScreen = "question-selection-screen";
        globalBackButton.classList.remove("hidden");
        hintButtonToolbar.classList.remove("hidden");
        fontSizeSliderContainer.classList.remove('hidden'); // Mostra o slider apenas na tela de pergunta

        // Lógica para showAwnserButtons e currentQuestionOptions
        if (quizData && quizData.actions) {
            if (!quizData.actions.showAwnserButtons) {
                answerButtonToolbar.classList.add("hidden");
                answerCheckButtonToolbar.classList.remove("hidden");
                currentQuestionOptions.classList.add("hidden"); // Oculta as opções de resposta
                questionDisplayScreen.classList.add('no-answer-options');
            } else {
                answerButtonToolbar.classList.remove("hidden");
                answerCheckButtonToolbar.classList.add("hidden");
                questionDisplayScreen.classList.remove('no-answer-options');
            }
        } else {
            answerButtonToolbar.classList.remove("hidden");
            answerCheckButtonToolbar.classList.add("hidden");
            questionDisplayScreen.classList.remove('no-answer-options');
        }
    } else if (screenId === "level-selection-screen") {
        gameToolbar.classList.remove("hidden");
        globalBackButton.dataset.targetScreen = "start-screen";
        globalBackButton.classList.remove("hidden");
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        hintButtonToolbar.classList.add("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
        // clearProgressButton.classList.remove("hidden"); // Removido daqui
    } else if (screenId === "question-selection-screen") {
        gameToolbar.classList.remove("hidden");
        globalBackButton.dataset.targetScreen = "level-selection-screen";
        globalBackButton.classList.remove("hidden");
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        hintButtonToolbar.classList.add("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
        // clearProgressButton.classList.remove("hidden"); // Removido daqui
    } else if (screenId === "quiz-selection-screen") {
        gameToolbar.classList.add("hidden");
        globalBackButton.classList.add("hidden");
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        hintButtonToolbar.classList.add("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
    } else { // start-screen
        gameToolbar.classList.remove('hidden');
        globalBackButton.dataset.targetScreen = "quiz-selection-screen";
        globalBackButton.classList.remove("hidden");
        answerButtonToolbar.classList.add('hidden');
        answerCheckButtonToolbar.classList.add('hidden');
        hintButtonToolbar.classList.add('hidden');
        questionDisplayScreen.classList.remove('no-answer-options');
        clearProgressButton.classList.remove("hidden"); // Mostrar apenas na start-screen
    }

    if (quizData && quizData.actions && !quizData.actions.showToolbar) {
        gameToolbar.classList.add("hidden");
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
 * @param {string} levelId O ID do nível de dificuldade atual.
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
        // Verifica se a pergunta foi respondida para o quiz e nível atuais
        if (answeredQuestions[currentLevel] && answeredQuestions[currentLevel][index]) {
            block.classList.add("answered");
            block.textContent = ""; // Remove o número se respondida
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

    if (quizData.font) {
        currentQuestionElement.style.fontFamily = quizData.font;
    } else {
        currentQuestionElement.style.fontFamily = '';
    }
    if (currentFontSize) {
        currentQuestionElement.style.setProperty('font-size', `${currentFontSize}em`, 'important');
    } else if (quizData.fontSize) {
        currentQuestionElement.style.setProperty('font-size', quizData.fontSize, 'important');
    } else {
        currentQuestionElement.style.removeProperty('font-size');
    }

    optionButtons.forEach((button) => {
        const optionKey = button.dataset.option;
        if (qData.options[optionKey] !== undefined) {
            button.textContent = `${optionKey.toUpperCase()}) ${qData.options[optionKey]}`;
            button.classList.remove("selected", "correct-answer", "incorrect-answer");
            button.disabled = false;
            button.onclick = () => selectOption(button);
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    });

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
        // O answeredQuestions já está correto para o quiz atual
        if (!answeredQuestions[currentLevel]) {
            answeredQuestions[currentLevel] = {};
        }
        answeredQuestions[currentLevel][currentQuestionIndex] = true;
        saveGameProgress(answeredQuestions, quizData.id); // quizData.id garante que é salvo para o quiz específico
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
    // O answeredQuestions já está correto para o quiz atual
    if (!answeredQuestions[currentLevel]) {
        answeredQuestions[currentLevel] = {};
    }
    answeredQuestions[currentLevel][currentQuestionIndex] = true;
    saveGameProgress(answeredQuestions, quizData.id); // quizData.id garante que é salvo para o quiz específico

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
    // A lógica de salvamento já está na checkAnswer e checkCorrectAnswer, não precisa duplicar aqui
    // Apenas atualiza a UI do bloco de pergunta
    if (!answeredQuestions[currentLevel] || !answeredQuestions[currentLevel][currentQuestionIndex]) {
        // Esta parte é importante para a UI, mesmo que o save já tenha ocorrido
        if (!answeredQuestions[currentLevel]) {
            answeredQuestions[currentLevel] = {};
        }
        answeredQuestions[currentLevel][currentQuestionIndex] = true; // Marca como respondida na memória
        const questionBlock = document.querySelector(
            `.question-block[data-question-index="${currentQuestionIndex}"]`
        );
        if (questionBlock) {
            questionBlock.classList.add("answered");
            questionBlock.textContent = ""; // Remove o número
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

    QUIZ_OPTIONS_DATA.forEach(quizOption => { // Usar QUIZ_OPTIONS_DATA carregado
        const option = document.createElement('option');
        option.value = quizOption.id;
        option.textContent = quizOption.name;
        quizSelect.appendChild(option);
    });

    const lastSelectedQuizId = localStorage.getItem('currentSelectedQuizId');
    if (lastSelectedQuizId && QUIZ_OPTIONS_DATA.some(q => q.id === lastSelectedQuizId)) {
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

        // Limpa o progresso das perguntas respondidas em memória para o novo quiz
        answeredQuestions = {}; // <--- Adicionado para garantir um estado limpo

        localStorage.removeItem('currentQuizConfig');
        localStorage.removeItem('appFontSize');
        // REMOVIDO: localStorage.removeItem('appThemeMode');

        const selectedQuizOption = QUIZ_OPTIONS_DATA.find(q => q.id === selectedQuizId); // Usar QUIZ_OPTIONS_DATA
        if (selectedQuizOption) {
            // Apenas define o tema se não houver um tema salvo no localStorage
            if (!localStorage.getItem('appThemeMode')) {
                localStorage.setItem('appThemeMode', selectedQuizOption.data.theme || 'light');
            }
            const initialFontSize = selectedQuizOption.data.fontSize ? parseFloat(selectedQuizOption.data.fontSize) : 1.5;
            localStorage.setItem('appFontSize', initialFontSize);
            // Ao salvar currentQuizConfig, inclua o ID do quiz para que loadGameData possa usá-lo
            localStorage.setItem('currentQuizConfig', JSON.stringify({ ...selectedQuizOption.data, id: selectedQuizOption.id }));

            const loadedData = loadGameData(selectedQuizOption.data, selectedQuizId); // Pass selectedQuizId aqui
            quizData = loadedData.quizData; // quizData agora terá a propriedade 'id'
            answeredQuestions = loadedData.answeredQuestions; // Isso irá carregar o progresso específico do quiz ou um objeto vazio
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
    currentFontSize = localStorage.getItem('appFontSize') || (quizData.fontSize ? parseFloat(quizData.fontSize) : 1.5);

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

    startButton.addEventListener("click", startGame);

    themeToggleCheckbox.checked = (themeMode === 'dark');

    fontSizeSlider.value = currentFontSize;
    fontSizeValueSpan.textContent = `${parseFloat(currentFontSize).toFixed(1)}`;
}

document.addEventListener("DOMContentLoaded", async () => { // Adicionado 'async' aqui
    getDOMElements(); // Obtém as referências DOM quando o DOM estiver carregado

    // Carrega os dados do quiz do arquivo JSON
    try {
        const response = await fetch(pathData); // Usando a variável pathData
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        QUIZ_OPTIONS_DATA = await response.json();
    } catch (error) {
        console.error("Erro ao carregar quiz-data.json:", error);
        // Fallback ou tratamento de erro, talvez usar um quiz padrão embutido
        QUIZ_OPTIONS_DATA = []; // Ou um array vazio para evitar erros
    }


    globalBackButton.addEventListener("click", () => {
        const targetScreenId = globalBackButton.dataset.targetScreen;
        if (targetScreenId === "quiz-selection-screen") {
            localStorage.removeItem('currentSelectedQuizId');
            // REMOVIDO: localStorage.removeItem('appThemeMode');
            localStorage.removeItem('appFontSize');
            if (quizData && quizData.id) {
                localStorage.removeItem(`answeredQuestions_${quizData.id}`);
            }
            quizData = undefined;
            answeredQuestions = {}; // <--- Adicionado para garantir um estado limpo ao voltar
            currentFontSize = undefined;
            setupQuizSelectionScreen();
        } else if (targetScreenId) {
            showScreen(targetScreenId);
            if (targetScreenId === "question-selection-screen") {
                renderQuestionBlocks(currentLevel);
            }
        } else {
            showScreen("start-screen");
        }
    });

    answerButtonToolbar.addEventListener("click", checkAnswer);
    answerCheckButtonToolbar.addEventListener("click", checkCorrectAnswer);
    hintButtonToolbar.addEventListener("click", showHint);

    clearProgressButton.addEventListener("click", () => { // Adicionado event listener para o botão de limpar progresso
        if (confirm("Tem certeza que deseja limpar todo o progresso deste quiz?")) {
            localStorage.removeItem(`answeredQuestions_${quizData.id}`); // Limpa o progresso no localStorage
            answeredQuestions = {}; // Reinicializa o objeto de progresso em memória
            if (document.getElementById("question-selection-screen").classList.contains("active")) {
                renderQuestionBlocks(currentLevel); // Recarrega a tela para refletir as mudanças
            }
            alert("Progresso limpo com sucesso!");
        }
    });

    themeToggleCheckbox.addEventListener("change", () => {
        themeMode = themeToggleCheckbox.checked ? 'dark' : 'light';
        localStorage.setItem('appThemeMode', themeMode);
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(themeMode + "-theme");
    });

    fontSizeSlider.addEventListener("input", (event) => {
        currentFontSize = event.target.value;
        fontSizeValueSpan.textContent = `${parseFloat(currentFontSize).toFixed(1)}`;
        localStorage.setItem('appFontSize', currentFontSize);
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
        const selectedQuizOption = QUIZ_OPTIONS_DATA.find(q => q.id === lastSelectedQuizId); // Usar QUIZ_OPTIONS_DATA
        if (selectedQuizOption) {
            // Ao carregar, passe o ID do quiz para loadGameData
            const loadedData = loadGameData(selectedQuizOption.data, selectedQuizOption.id);
            quizData = loadedData.quizData;
            answeredQuestions = loadedData.answeredQuestions;
            initializeGame();
            return;
        }
    }
    setupQuizSelectionScreen();
});
