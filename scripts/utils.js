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