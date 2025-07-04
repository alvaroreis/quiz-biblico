/**
 * Obtém o nome do projeto (nome da pasta raiz após o domínio)
 * a partir da URL atual.
 * Ex: Para 'https://alvaroreis.github.io/quiz-biblico/resource/index.html', retorna 'resource'.
 */
export function getProjectName() {
    const path = window.location.pathname; // Ex: /resource/index.html ou /resource/scripts/main.js

    // Remove a barra inicial se existir
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // Divide o caminho em partes e pega a primeira parte, que seria o nome do projeto
    const parts = cleanPath.split('/');

    // A primeira parte (índice 0) deve ser o nome do projeto
    // A menos que esteja no domínio raiz, aí pode ser vazio.
    return parts[0] || ''; // Retorna a primeira parte ou string vazia se não houver
}


/**
 * Retorna o caminho para o arquivo quiz-data.json baseado no ambiente de execução.
 * Se for localhost, busca em ../assets/data/quiz-data.json.
 * Caso contrário (assumindo GitHub Pages), busca na URL raw.githubusercontent.com.
 * @returns {string} O caminho (URL) para o arquivo quiz-data.json.
 */
export function getQuizDataPath() {
    // Verifica se o hostname indica um ambiente local (localhost ou 127.0.0.1)
    const host = window.location.hostname;
    const isLocalhost = host === 'localhost' || host === '127.0.0.1';

    if (isLocalhost) {
        // Caminho para o ambiente de desenvolvimento local (assumindo que main.js está em scripts/)
        // e quiz-data.json está em assets/data/
        return '../assets/data/quiz-data.json';
    } else {
        // Caminho para o ambiente de produção no GitHub Pages
        // É crucial que esta URL corresponda ao caminho real do seu arquivo no repositório.
        // Certifique-se de que a pasta 'assets' e 'data' existam no seu branch 'main' (ou 'master')
        // no seu repositório 'quiz-biblico'.
        return 'https://raw.githubusercontent.com/alvaroreis/quiz-biblico/main/assets/data/quiz-data.json';
    }
}