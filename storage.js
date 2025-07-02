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
    const savedQuizData = localStorage.getItem('quizData');
    if (savedQuizData) {
        try {
            quizDataLoaded = JSON.parse(savedQuizData);
        } catch (e) {
            console.error("Erro ao analisar quizData do localStorage, usando dados padrão.", e);
            quizDataLoaded = defaultQuizData;
            localStorage.setItem('quizData', JSON.stringify(quizDataLoaded)); // Salva o padrão
        }
    } else {
        // Se não houver quizData salvo, usa o padrão e salva
        quizDataLoaded = defaultQuizData;
        localStorage.setItem('quizData', JSON.stringify(quizDataLoaded));
    }

    // Tenta carregar o answeredQuestions do localStorage
    const savedAnsweredQuestions = localStorage.getItem('answeredQuestions');
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
 */
function saveGameProgress(answeredQuestionsToSave) {
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestionsToSave));
}
