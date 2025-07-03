/**
 * Carrega os dados do quiz e o progresso do localStorage.
 * Se não houver dados salvos, usa os dados padrão e os salva.
 * @param {object} defaultQuizData O objeto de dados padrão do quiz.
 * @returns {object} Um objeto contendo os dados do quiz e o progresso respondido.
 */
function loadGameData(defaultQuizData) {
    let quizDataLoaded;
    let answeredQuestionsLoaded;

    // Tenta carregar o quizData do localStorage
    // Nota: Agora o quizData salvo no localStorage é a configuração COMPLETA do quiz selecionado.
    const savedQuizData = localStorage.getItem('currentQuizConfig'); // Chave mais específica
    if (savedQuizData) {
        try {
            quizDataLoaded = JSON.parse(savedQuizData);
        } catch (e) {
            console.error("Erro ao analisar quizData do localStorage, usando dados padrão.", e);
            quizDataLoaded = defaultQuizData; // Usa o padrão passado como argumento
            localStorage.setItem('currentQuizConfig', JSON.stringify(quizDataLoaded)); // Salva o padrão
        }
    } else {
        // Se não houver quizData salvo, usa o padrão passado e salva
        quizDataLoaded = defaultQuizData;
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
function saveGameProgress(answeredQuestionsToSave, quizId) {
    localStorage.setItem(`answeredQuestions_${quizId}`, JSON.stringify(answeredQuestionsToSave));
}
