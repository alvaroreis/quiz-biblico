/**
 * Carrega os dados do quiz e o progresso do localStorage.
 * Se não houver dados salvos, usa os dados padrão e os salva.
 * @param {object} defaultQuizData O objeto de dados padrão do quiz.
 * @param {string} quizIdForLoading O ID do quiz atual para carregar o progresso.
 * @returns {object} Um objeto contendo os dados do quiz e o progresso respondido.
 */
export function loadGameData(defaultQuizData, quizIdForLoading) { // Adicionado quizIdForLoading
    let quizDataLoaded;
    let answeredQuestionsLoaded;

    // Tenta carregar o quizData do localStorage
    // Nota: Agora o quizData salvo no localStorage é a configuração COMPLETA do quiz selecionado.
    const savedQuizData = localStorage.getItem('currentQuizConfig'); // Chave mais específica
    if (savedQuizData) {
        try {
            quizDataLoaded = JSON.parse(savedQuizData);
            // Garante que o quizData carregado tenha o ID correto, especialmente se foi salvo sem ele.
            // Isso é uma verificação defensiva.
            if (!quizDataLoaded.id && quizIdForLoading) {
                quizDataLoaded.id = quizIdForLoading;
            }
        } catch (e) {
            console.error("Erro ao analisar quizData do localStorage, usando dados padrão.", e);
            quizDataLoaded = { ...defaultQuizData, id: quizIdForLoading }; // Usa o padrão e adiciona o ID
            localStorage.setItem('currentQuizConfig', JSON.stringify(quizDataLoaded)); // Salva o padrão
        }
    } else {
        // Se não houver quizData salvo, usa o padrão passado e salva
        quizDataLoaded = { ...defaultQuizData, id: quizIdForLoading }; // Adiciona o ID aqui
        localStorage.setItem('currentQuizConfig', JSON.stringify(quizDataLoaded));
    }

    // Tenta carregar o answeredQuestions do localStorage
    // A chave para answeredQuestions agora deve ser específica para o quiz atual
    const savedAnsweredQuestions = localStorage.getItem(`answeredQuestions_${quizDataLoaded.id}`);
    if (savedAnsweredQuestions) {
        try {
            answeredQuestionsLoaded = JSON.parse(savedAnsweredQuestions);
        } catch (e) {
            console.error("Erro ao analisar answeredQuestions do localStorage, inicializando vazio.", e);
            answeredQuestionsLoaded = {}; // Inicializa vazio em caso de erro
        }
    } else {
        // Se não houver progresso salvo, inicializa
        answeredQuestionsLoaded = {};
    }

    return { quizData: quizDataLoaded, answeredQuestions: answeredQuestionsLoaded };
}

/**
 * Salva o progresso das perguntas respondidas no localStorage.
 * @param {object} answeredQuestionsToSave O objeto que rastreia as perguntas respondidas.
 * @param {string} quizId O ID do quiz atual para salvar o progresso.
 */
export function saveGameProgress(answeredQuestionsToSave, quizId) {
    localStorage.setItem(`answeredQuestions_${quizId}`, JSON.stringify(answeredQuestionsToSave));
}

// Funções de salvamento e carregamento de equipes
/**
 * Salva os dados das equipes e a equipe atualmente selecionada no localStorage.
 * @param {Array<Object>} teamsData Array de objetos de equipe.
 * @param {string|null} currentTeamId ID da equipe atualmente selecionada.
 */
export function saveTeamsData(teamsData, currentTeamId) {
    localStorage.setItem('teamsData', JSON.stringify(teamsData));
    localStorage.setItem('currentSelectedTeamId', currentTeamId);
}

/**
 * Carrega os dados das equipes e a equipe atualmente selecionada do localStorage.
 * @returns {Object} Um objeto contendo o array de equipes e o ID da equipe atual.
 */
export function loadTeamsData() {
    const savedTeams = localStorage.getItem('teamsData');
    const savedCurrentTeamId = localStorage.getItem('currentSelectedTeamId');
    let teams = [];
    let currentTeamId = null;

    if (savedTeams) {
        try {
            teams = JSON.parse(savedTeams);
        } catch (e) {
            console.error("Erro ao analisar dados de equipes do localStorage, inicializando vazio.", e);
            teams = [];
        }
    }

    if (savedCurrentTeamId) {
        currentTeamId = savedCurrentTeamId;
    }

    return { teams, currentTeamId };
}
