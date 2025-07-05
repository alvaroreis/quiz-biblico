// Importa as funcionalidades dos outros módulos
import {getProjectName, getQuizDataPath, getTeamsDataPath} from './utils.js';
import { loadGameData, saveGameProgress, loadTeamsData, saveTeamsData } from './storage.js';
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
const pathData = getQuizDataPath(); // Variável atualizada aqui
const teamsDataPath = getTeamsDataPath(); // Caminho para o arquivo JSON de equipes

// Variáveis para gerenciamento de equipes
// Adicione 'color' com um valor padrão para novas equipes
// A propriedade 'score' agora é um array de números
let teams = []; // Array de objetos de equipe: [{ id: 'uuid', name: 'Team A', score: [10, 20], maxScore: 5000, color: '#007bff' }]
let currentTeamId = null; // ID da equipe atualmente selecionada
let editingTeamId = null; // ID da equipe que está sendo editada no modal

// Variável para rastrear a tela anterior
let previousScreenId = "quiz-selection-screen"; // Define um padrão inicial


// Referências aos elementos HTML (agora obtidas no DOMContentLoaded)
let quizSelectionScreen;
let quizSelect;
let loadQuizButton;

let startScreen;
let levelSelectionScreen;
let questionSelectionScreen;
let questionDisplayScreen;
let scoreboardScreen;

let startButton;
let levelOptionsContainer;
let currentQuestionOptions;

let gameToolbar;
let globalBackButton;
let answerButtonToolbar;
let answerCheckButtonToolbar;
let hintButtonToolbar;
let clearProgressButton;
let showScoreboardButton;
let backToMainMenuButton;

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

// Elementos da tela de placar
let newTeamNameInput;
let addTeamButton;
let teamsListContainer;
// Removida a referência a teamSelectQuestion, pois não será mais usado na tela de perguntas
// let teamSelectQuestion;

// Elementos do novo diálogo de atualização manual
let manualScoreDialog;
let manualScoreDialogTitle;
let manualScoreTeamName;
let currentXpInput;
let maxXpInput;
let colorSelect; // Novo seletor de cor
let hexColorInput; // Novo input para HEX
let saveManualScoreButton;
let cancelManualScoreButton;
let toggleAnswerButtonsSwitch; // Referência ao novo switch

// Referência ao wrapper principal das telas
let mainScreensWrapper;


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
    scoreboardScreen = document.getElementById("scoreboard-screen");

    startButton = document.getElementById("start-button");
    levelOptionsContainer = document.getElementById("level-options-container");
    currentQuestionOptions = document.getElementById("current-question-options");

    gameToolbar = document.getElementById("game-toolbar");
    globalBackButton = document.getElementById("global-back-button");
    answerButtonToolbar = document.getElementById("answer-button-toolbar");
    answerCheckButtonToolbar = document.getElementById("answer-check-button-toolbar");
    hintButtonToolbar = document.getElementById("hint-button-toolbar");
    clearProgressButton = document.getElementById("clear-progress-button");
    showScoreboardButton = document.getElementById("show-scoreboard-button");
    backToMainMenuButton = document.getElementById("back-to-main-menu-button");

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

    // Novas referências para elementos de equipe
    newTeamNameInput = document.getElementById("new-team-name");
    addTeamButton = document.getElementById("add-team-button");
    teamsListContainer = document.getElementById("teams-list-container");
    // Removida a referência a teamSelectQuestion, pois não será mais usado na tela de perguntas
    // teamSelectQuestion = document.getElementById("team-select-question");

    // Referências para o novo diálogo de atualização manual
    manualScoreDialog = document.getElementById("manual-score-dialog");
    manualScoreDialogTitle = document.getElementById("manual-score-dialog-title");
    manualScoreTeamName = document.getElementById("manual-score-team-name");
    currentXpInput = document.getElementById("current-xp-input");
    maxXpInput = document.getElementById("max-xp-input");
    colorSelect = document.getElementById("color-select"); // Obtém a referência do select de cor
    hexColorInput = document.getElementById("hex-color-input"); // Obtém a referência do input de HEX
    saveManualScoreButton = document.getElementById("save-manual-score-button");
    cancelManualScoreButton = document.getElementById("cancel-manual-score-button");
    toggleAnswerButtonsSwitch = document.getElementById("toggle-answer-buttons"); // Obtém a referência do switch

    mainScreensWrapper = document.getElementById("main-screens-wrapper"); // Obtém a referência do wrapper
}


// --- Funções de Navegação e Lógica do Jogo ---

/**
 * Exibe uma tela específica e esconde as outras, e gerencia a visibilidade dos botões da toolbar.
 * @param {string} screenId O ID da tela a ser exibida.
 */
function showScreen(screenId) {
    // Esconde todas as telas
    document.querySelectorAll(".screen").forEach((screen) => {
        // Antes de esconder a tela atual, salva seu ID como a tela anterior
        if (screen.classList.contains("active")) {
            previousScreenId = screen.id;
        }
        screen.classList.remove("active");
    });
    // Ativa a nova tela
    document.getElementById(screenId).classList.add("active");

    // Esconde a toolbar por padrão em todas as telas
    gameToolbar.classList.add("hidden");
    hintDialog.close();
    feedbackDialog.close();
    manualScoreDialog.close(); // Fecha o diálogo de score manual
    hideDarkScreen();

    // Esconde o slider de fonte e os botões de gerenciamento de progresso/placar por padrão
    fontSizeSliderContainer.classList.add('hidden');
    clearProgressButton.classList.add("hidden");
    showScoreboardButton.classList.add("hidden");
    toggleAnswerButtonsSwitch.parentElement.classList.add("hidden"); // Esconde o switch por padrão

    // Gerencia a classe 'mbt-65' no mainScreensWrapper
    if (screenId === "scoreboard-screen") {
        mainScreensWrapper.classList.remove("mbt-65");
    } else {
        mainScreensWrapper.classList.add("mbt-65");
    }

    // Garante que as opções de resposta estejam visíveis por padrão,
    // e serão ocultadas ou não dependendo da lógica abaixo.
    currentQuestionOptions.classList.remove("hidden");
    // Removida a linha que mostra/esconde teamSelectQuestion, pois ele não está mais na tela de perguntas
    // teamSelectQuestion.classList.add("hidden"); // Esconde o seletor de equipe por padrão

    // Lógica de visibilidade da toolbar e botões específicos por tela
    if (screenId === "question-display-screen") {
        gameToolbar.classList.remove("hidden");
        globalBackButton.dataset.targetScreen = "question-selection-screen";
        globalBackButton.classList.remove("hidden");
        hintButtonToolbar.classList.remove("hidden");
        fontSizeSliderContainer.classList.remove('hidden'); // Mostra o slider apenas na tela de pergunta
        showScoreboardButton.classList.add("hidden"); // Oculta o botão do placar na tela de perguntas
        toggleAnswerButtonsSwitch.parentElement.classList.remove("hidden"); // Mostra o switch na tela de perguntas

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
        showScoreboardButton.classList.remove("hidden"); // Mostra o botão do placar
    } else if (screenId === "question-selection-screen") {
        gameToolbar.classList.remove("hidden");
        globalBackButton.dataset.targetScreen = "level-selection-screen";
        globalBackButton.classList.remove("hidden");
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        hintButtonToolbar.classList.add("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
        showScoreboardButton.classList.remove("hidden"); // Mostra o botão do placar
    } else if (screenId === "quiz-selection-screen") {
        gameToolbar.classList.add("hidden");
        globalBackButton.classList.add("hidden");
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        hintButtonToolbar.classList.add("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
        showScoreboardButton.classList.add("hidden"); // Esconde o botão do placar
    } else if (screenId === "scoreboard-screen") { // Lógica para a tela de placar
        gameToolbar.classList.add("hidden"); // Esconde a toolbar na tela de placar
        globalBackButton.classList.add("hidden"); // Esconde o botão de voltar global
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        hintButtonToolbar.classList.add("hidden");
        clearProgressButton.classList.add("hidden");
        showScoreboardButton.classList.add("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
        // O botão 'back-to-main-menu-button' é visível por padrão no HTML para esta tela
    }
    else { // start-screen
        gameToolbar.classList.remove('hidden');
        globalBackButton.dataset.targetScreen = "quiz-selection-screen";
        globalBackButton.classList.remove("hidden");
        answerButtonToolbar.classList.add('hidden');
        answerCheckButtonToolbar.classList.add('hidden');
        hintButtonToolbar.classList.add('hidden');
        questionDisplayScreen.classList.remove('no-answer-options');
        clearProgressButton.classList.remove("hidden"); // Mostrar apenas na start-screen
        showScoreboardButton.classList.remove("hidden"); // Mostra o botão do placar
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

    // Atualiza o estado do switch e dos botões de resposta
    toggleAnswerButtonsSwitch.checked = quizData.actions.showAwnserButtons;
    updateAnswerButtonVisibility(quizData.actions.showAwnserButtons);


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
    // Removido o alerta e a verificação de currentTeamId aqui, pois a pontuação é manual
    // if (!currentTeamId) {
    //     alert("Por favor, selecione uma equipe antes de responder!");
    //     return;
    // }

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
        // Removida a chamada para updateTeamScore aqui, pois a pontuação é manual
        // updateTeamScore(currentTeamId, 1); // Adiciona 1 ponto à equipe atual
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
    // Removido o alerta e a verificação de currentTeamId aqui, pois a pontuação é manual
    // if (!currentTeamId) {
    //     alert("Por favor, selecione uma equipe antes de marcar a resposta!");
    //     return;
    // }

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
    // Removida a chamada para updateTeamScore aqui, pois a pontuação é manual
    // updateTeamScore(currentTeamId, 1); // Adiciona 1 ponto à equipe atual

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
 * Renderiza a lista de equipes no placar.
 */
function renderTeamScoreboard() {
    teamsListContainer.innerHTML = "";
    if (teams.length === 0) {
        teamsListContainer.innerHTML = "<p>Nenhuma equipe adicionada ainda.</p>";
        return;
    }

    // Ordena as equipes pela pontuação total em ordem decrescente
    const sortedTeams = [...teams].sort((a, b) => {
        const scoreA = Array.isArray(a.score) ? a.score.reduce((sum, val) => sum + val, 0) : a.score;
        const scoreB = Array.isArray(b.score) ? b.score.reduce((sum, val) => sum + val, 0) : b.score;
        return scoreB - scoreA;
    });

    sortedTeams.forEach(team => {
        const currentTotalScore = Array.isArray(team.score) ? team.score.reduce((sum, val) => sum + val, 0) : team.score;
        const teamMaxScore = team.maxScore || 100; // Garante um maxScore padrão
        const progressBarWidth = Math.min(100, (currentTotalScore / teamMaxScore) * 100);

        const teamItem = document.createElement("div");
        teamItem.classList.add("team-item");
        teamItem.dataset.teamId = team.id; // Adiciona o ID da equipe ao item
        teamItem.innerHTML = `
            <span class="team-name">${team.name}</span>
            <div class="team-progress-bar-container">
                <div class="team-progress-bar" style="width: ${progressBarWidth}%; background-color: ${team.color || 'var(--mario-green)'};"></div>
                <div class="team-score-text">${currentTotalScore} / ${teamMaxScore} XP</div>
            </div>
            <button class="delete-team-button" data-team-id="${team.id}">X</button>
        `;
        teamsListContainer.appendChild(teamItem);
    });

    // Adiciona event listeners para os botões de exclusão
    document.querySelectorAll(".delete-team-button").forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Impede que o clique na lixeira acione o clique na barra de progresso
            const teamIdToDelete = event.target.dataset.teamId;
            if (confirm(`Tem certeza que deseja remover a equipe "${teams.find(t => t.id === teamIdToDelete).name}"?`)) {
                teams = teams.filter(team => team.id !== teamIdToDelete);
                // currentTeamId não é mais relevante para seleção na tela de perguntas, mas pode ser para outras lógicas
                // Se a equipe ativa for removida, limpa o currentTeamId
                if (currentTeamId === teamIdToDelete) {
                    currentTeamId = null;
                }
                saveTeamsData(teams, currentTeamId); // Salva as equipes atualizadas
                renderTeamScoreboard(); // Re-renderiza o placar
                // populateTeamSelector(); // Não é mais necessário aqui, pois o seletor não está na tela de perguntas
                alert("Equipe removida com sucesso!");
            }
        });
    });

    // Adiciona event listeners para clicar na barra de progresso
    document.querySelectorAll(".team-item").forEach(item => {
        item.addEventListener("click", (event) => {
            const teamIdToEdit = event.currentTarget.dataset.teamId;
            const teamToEdit = teams.find(team => team.id === teamIdToEdit);
            if (teamToEdit) {
                editingTeamId = teamIdToEdit; // Define a equipe que está sendo editada
                showManualScoreInputModal(teamToEdit);
            }
        });
    });
}

/**
 * Adiciona uma nova equipe.
 */
function addTeam() {
    const teamName = newTeamNameInput.value.trim();
    if (teamName) {
        if (teams.some(team => team.name.toLowerCase() === teamName.toLowerCase())) {
            alert("Já existe uma equipe com este nome!");
            return;
        }
        const newTeam = {
            id: crypto.randomUUID(), // Gera um ID único para a equipe
            name: teamName,
            score: [], // Inicializa score como um array vazio
            maxScore: 100, // Valor inicial para a pontuação máxima
            color: '#4CAF50' // Cor padrão para novas equipes (verde Mario)
        };
        teams.push(newTeam);
        newTeamNameInput.value = ""; // Limpa o input
        saveTeamsData(teams, currentTeamId); // Salva as equipes atualizadas
        renderTeamScoreboard(); // Atualiza o placar
        // populateTeamSelector(); // Não é mais necessário aqui, pois o seletor não está na tela de perguntas
        alert(`Equipe "${teamName}" adicionada!`);
    } else {
        alert("Por favor, digite um nome para a equipe.");
    }
}

/**
 * Atualiza a pontuação de uma equipe.
 * @param {string} teamId O ID da equipe a ser atualizada.
 * @param {number} points Os pontos a serem adicionados.
 */
function updateTeamScore(teamId, points) {
    const teamIndex = teams.findIndex(team => team.id === teamId);
    if (teamIndex !== -1) {
        // Adiciona os novos pontos ao array de score
        teams[teamIndex].score.push(points);
        saveTeamsData(teams, currentTeamId); // Salva as equipes atualizadas
        renderTeamScoreboard(); // Atualiza o placar
    } else {
        console.error("Equipe não encontrada para atualizar pontuação:", teamId);
    }
}

/**
 * Exibe o diálogo para atualização manual de pontuação.
 * @param {object} team O objeto da equipe a ser editada.
 */
function showManualScoreInputModal(team) {
    manualScoreDialogTitle.textContent = `Atualizar Pontuação da Equipe:`;
    manualScoreTeamName.textContent = team.name;
    // Exibe a soma dos scores no input de XP Atual
    currentXpInput.value = Array.isArray(team.score) ? team.score.reduce((sum, val) => sum + val, 0) : team.score;
    maxXpInput.value = team.maxScore;

    // Define a cor no seletor ou no campo HEX
    const commonColors = Array.from(colorSelect.options).map(opt => opt.value);
    if (commonColors.includes(team.color)) {
        colorSelect.value = team.color;
        hexColorInput.value = ''; // Limpa o campo HEX se a cor for comum
    } else {
        colorSelect.value = ''; // Seleciona a opção vazia se a cor não for comum
        hexColorInput.value = team.color; // Exibe o HEX
    }

    manualScoreDialog.showModal();
}

/**
 * Atualiza a pontuação e a pontuação máxima de uma equipe manualmente.
 */
function updateTeamScoreAndMaxManually() {
    const teamIndex = teams.findIndex(team => team.id === editingTeamId);
    if (teamIndex === -1) {
        alert("Erro: Equipe não encontrada para atualização manual.");
        return;
    }

    const newScore = parseInt(currentXpInput.value, 10);
    const newMaxScore = parseInt(maxXpInput.value, 10);
    let newColor = colorSelect.value; // Pega a cor do select

    // Se o select não foi usado (valor vazio), tenta pegar do campo HEX
    if (!newColor && hexColorInput.value.trim()) {
        const hex = hexColorInput.value.trim();
        // Validação básica de HEX (opcional, pode ser mais robusta)
        if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
            newColor = hex;
        } else {
            alert("Por favor, insira um valor HEX válido (ex: #FF00FF).");
            return;
        }
    } else if (!newColor) {
        // Se nem o select nem o HEX foram preenchidos, usa a cor atual ou um padrão
        newColor = teams[teamIndex].color || '#4CAF50';
    }


    if (isNaN(newScore) || newScore < 0) {
        alert("Por favor, insira um valor de XP atual válido (número positivo).");
        return;
    }
    if (isNaN(newMaxScore) || newMaxScore <= 0) {
        alert("Por favor, insira um valor de XP máximo válido (número positivo maior que zero).");
        return;
    }
    if (newScore > newMaxScore) {
        alert("A pontuação atual não pode ser maior que a pontuação máxima.");
        return;
    }

    teams[teamIndex].score = [newScore]; // Substitui o array de score pelo novo valor total
    teams[teamIndex].maxScore = newMaxScore;
    teams[teamIndex].color = newColor; // Salva a nova cor
    saveTeamsData(teams, currentTeamId);
    renderTeamScoreboard();
    manualScoreDialog.close();
    // Removido o alert de sucesso
}


/**
 * Popula o seletor de equipe na tela de pergunta.
 * Esta função agora é responsável apenas por popular o seletor de equipe,
 * que pode ser usado em outras telas se necessário.
 * Não é mais chamada na loadQuestion, pois o seletor foi removido da tela de perguntas.
 */
function populateTeamSelector() {
    // Verifica se o elemento existe antes de tentar manipulá-lo
    // Esta função não é mais usada para popular o seletor de equipe na tela de perguntas,
    // pois o seletor foi removido de lá.
    // No entanto, é mantida caso seja necessário popular um seletor em outra parte da UI.
    // Se teamSelectQuestion for null (porque o elemento foi removido do HTML), esta verificação evita erros.
    if (document.getElementById("team-select-question")) { // Usar uma verificação mais robusta aqui
        const teamSelectQuestionElement = document.getElementById("team-select-question");
        teamSelectQuestionElement.innerHTML = '<option value="">Selecione uma Equipe</option>';
        teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.id;
            option.textContent = team.name;
            teamSelectQuestionElement.appendChild(option);
        });
        // Define a equipe selecionada se houver uma
        if (currentTeamId && teams.some(team => team.id === currentTeamId)) {
            teamSelectQuestionElement.value = currentTeamId;
        } else {
            currentTeamId = null; // Garante que currentTeamId seja nulo se a equipe não existir
        }
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
    scoreboardScreen.classList.remove('active'); // Garante que a tela de placar também está oculta

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

    // populateTeamSelector(); // Não é mais necessário aqui, pois o seletor não está na tela de perguntas
}

/**
 * Atualiza a visibilidade dos botões de resposta e opções com base no estado do switch.
 * @param {boolean} showButtons Se true, mostra os botões de resposta e opções. Se false, oculta.
 */
function updateAnswerButtonVisibility(showButtons) {
    if (showButtons) {
        answerButtonToolbar.classList.remove("hidden");
        answerCheckButtonToolbar.classList.add("hidden");
        currentQuestionOptions.classList.remove("hidden");
        questionDisplayScreen.classList.remove('no-answer-options');
        optionButtons.forEach(button => button.disabled = false); // Re-habilita as opções
    } else {
        answerButtonToolbar.classList.add("hidden");
        answerCheckButtonToolbar.classList.remove("hidden");
        currentQuestionOptions.classList.add("hidden");
        questionDisplayScreen.classList.add('no-answer-options');
        optionButtons.forEach(button => button.disabled = true); // Desabilita as opções
    }
    answerButtonToolbar.disabled = true; // Sempre desabilita o botão "Responder" até uma opção ser selecionada
    answerCheckButtonToolbar.classList.remove("hidden"); // "Marcar Correta" sempre habilitado se visível
}


document.addEventListener("DOMContentLoaded", async () => { // Adicionado 'async' aqui
    getDOMElements(); // Obtém as referências DOM quando o DOM estiver carregado
    const { teams: loadedTeams, currentTeamId: loadedCurrentTeamId } = loadTeamsData();
    teams = loadedTeams;
    currentTeamId = loadedCurrentTeamId;

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

    // Carrega os dados das equipes do teams.json se não houver dados salvos no localStorage
    const savedTeamsData = localStorage.getItem('teamsData');
    if (!savedTeamsData || JSON.parse(savedTeamsData).length === 0) { // Se não há dados salvos ou o array está vazio
        try {
            const teamsResponse = await fetch(teamsDataPath);
            if (!teamsResponse.ok) {
                throw new Error(`HTTP error! status: ${teamsResponse.status}`);
            }
            const initialTeamsData = await teamsResponse.json();
            teams = initialTeamsData.teams.map(team => ({
                id: team.id || crypto.randomUUID(), // Garante um ID se o JSON não tiver
                name: team.name,
                score: Array.isArray(team.score) ? team.score : [team.score || 0], // Garante que score é um array
                maxScore: initialTeamsData.maxScore || 100, // Usa o maxScore do JSON ou um padrão
                color: team.color || '#4CAF50' // Usa a cor do JSON ou um padrão
            }));
            // Salva os dados iniciais no localStorage para persistência
            saveTeamsData(teams, null); // currentTeamId inicial é null
        } catch (error) {
            console.error("Erro ao carregar teams.json:", error);
            // Se teams.json falhar, teams permanece como array vazio (default)
        }
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
    showScoreboardButton.addEventListener("click", () => { // Event listener para o botão "Placar"
        renderTeamScoreboard(); // Renderiza o placar antes de mostrar a tela
        // populateTeamSelector(); // Não é mais necessário aqui, pois o seletor não está na tela de perguntas
        showScreen("scoreboard-screen");
    });
    backToMainMenuButton.addEventListener("click", () => { // Event listener para o botão "Voltar ao Menu Principal" na tela de placar
        showScreen(previousScreenId); // Volta para a tela anterior
    });

    addTeamButton.addEventListener("click", addTeam); // Event listener para adicionar equipe
    newTeamNameInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTeam();
        }
    });

    // Removido o event listener para teamSelectQuestion, pois ele não está mais na tela de perguntas
    // teamSelectQuestion.addEventListener("change", (event) => {
    //     currentTeamId = event.target.value;
    //     saveTeamsData(teams, currentTeamId); // Salva a equipe selecionada
    // });

    saveManualScoreButton.addEventListener("click", updateTeamScoreAndMaxManually);
    cancelManualScoreButton.addEventListener("click", () => {
        manualScoreDialog.close();
    });
    // Adiciona listener para mudança no select de cor para preencher o HEX
    colorSelect.addEventListener('change', () => {
        if (colorSelect.value) {
            hexColorInput.value = colorSelect.value;
        }
    });
    // Adiciona listener para input no campo HEX para limpar o select
    hexColorInput.addEventListener('input', () => {
        if (hexColorInput.value) {
            colorSelect.value = ''; // Limpa a seleção do dropdown se o HEX for digitado
        }
    });

    // Event listener para o novo switch de botões de resposta
    toggleAnswerButtonsSwitch.addEventListener('change', () => {
        // Atualiza a propriedade quizData.actions.showAwnserButtons
        quizData.actions.showAwnserButtons = toggleAnswerButtonsSwitch.checked;
        // Re-renderiza a visibilidade dos botões e opções imediatamente
        updateAnswerButtonVisibility(quizData.actions.showAwnserButtons);
    });


    clearProgressButton.addEventListener("click", () => { // Adicionado event listener para o botão de limpar progresso
        if (confirm("Tem certeza que deseja limpar todo o progresso deste quiz e as pontuações das equipes?")) {
            localStorage.removeItem(`answeredQuestions_${quizData.id}`); // Limpa o progresso no localStorage
            answeredQuestions = {}; // Reinicializa o objeto de progresso em memória

            // Limpa as pontuações das equipes
            teams.forEach(team => {
                team.score = []; // Reinicia o score para um array vazio
                team.maxScore = 100; // Reinicia o maxScore também
                team.color = '#4CAF50'; // Reinicia a cor para o padrão
            });
            saveTeamsData(teams, currentTeamId); // Salva as equipes com pontuações zeradas

            if (document.getElementById("question-selection-screen").classList.contains("active")) {
                renderQuestionBlocks(currentLevel); // Recarrega a tela para refletir as mudanças
            }
            renderTeamScoreboard(); // Atualiza o placar após limpar
            alert("Progresso e pontuações limpos com sucesso!");
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
        const selectedQuizOption = QUIZ_OPTIONS_DATA.find(q => q.id === lastSelectedQuizId);
        if (selectedQuizOption) {
            const loadedData = loadGameData(selectedQuizOption.data, selectedQuizOption.id);
            quizData = loadedData.quizData;
            answeredQuestions = loadedData.answeredQuestions;
            initializeGame();
            return;
        }
    }
    setupQuizSelectionScreen();
});
