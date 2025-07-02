/**
 * Carrega os dados do quiz e o progresso do localStorage.
 * Se não houver dados salvos, usa os dados padrão e os salva.
 * @param {object} defaultQuizData O objeto de dados padrão do quiz.
 * @returns {object} Um objeto contendo os dados do quiz e o progresso respondido.
 */
function loadGameData(defaultQuizData) {
    let quizData;
    let answeredQuestions;

    // Tenta carregar o quizData do localStorage
    const savedQuizData = localStorage.getItem('quizData');
    if (savedQuizData) {
        try {
            quizData = JSON.parse(savedQuizData);
        } catch (e) {
            console.error("Erro ao analisar quizData do localStorage, usando dados padrão.", e);
            quizData = defaultQuizData;
            localStorage.setItem('quizData', JSON.stringify(quizData)); // Salva o padrão
        }
    } else {
        // Se não houver quizData salvo, usa o padrão e salva
        quizData = defaultQuizData;
        localStorage.setItem('quizData', JSON.stringify(quizData));
    }

    // Tenta carregar o answeredQuestions do localStorage
    const savedAnsweredQuestions = localStorage.getItem('answeredQuestions');
    if (savedAnsweredQuestions) {
        try {
            answeredQuestions = JSON.parse(savedAnsweredQuestions);
        } catch (e) {
            console.error("Erro ao analisar answeredQuestions do localStorage, inicializando vazio.", e);
            answeredQuestions = {}; // Inicializa vazio em caso de erro
        }
    } else {
        // Se não houver progresso salvo, inicializa
        answeredQuestions = {};
    }

    return { quizData, answeredQuestions };
}

/**
 * Salva o progresso das perguntas respondidas no localStorage.
 * @param {object} answeredQuestions O objeto que rastreia as perguntas respondidas.
 */
function saveGameProgress(answeredQuestions) {
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
}
