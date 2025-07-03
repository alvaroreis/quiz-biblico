let marioCharacter;
let obstacleContainer;
let darkScreen;

let isJumping = false;
let jumpTimeout;
let obstacleInterval;
let animationsActive = true; // Variável para controlar se as animações estão ativas

// Função de inicialização para obter referências DOM
function initializeAnimationElements() {
    marioCharacter = document.getElementById("mario-character");
    obstacleContainer = document.getElementById("obstacle-animation-container");
    darkScreen = document.getElementById("dark-screen");
}

/**
 * Faz o Mario pular.
 */
export function marioJump() {
    if (!animationsActive) return; // Não pula se as animações estiverem desativadas
    if (!marioCharacter) initializeAnimationElements();
    if (!isJumping) {
        isJumping = true;
        marioCharacter.style.animation = 'marioJump 0.8s ease-out forwards';
        jumpTimeout = setTimeout(() => {
            marioCharacter.style.animation = 'marioRun 0.5s steps(2) infinite';
            isJumping = false;
        }, 800);
    }
}

/**
 * Gera e move obstáculos aleatoriamente.
 */
export function spawnObstacle() {
    if (!animationsActive) return; // Não gera obstáculos se as animações estiverem desativadas
    if (!obstacleContainer) initializeAnimationElements();

    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacleContainer.appendChild(obstacle);

    obstacle.style.left = '100%';
    obstacle.style.animation = `moveObstacle 8s linear forwards`;

    obstacle.addEventListener('animationend', () => {
        obstacle.remove();
    });

    const obstacleAnimationDuration = 8000;
    const marioJumpTriggerTime = obstacleAnimationDuration * 0.74;

    setTimeout(() => {
        marioJump();
    }, marioJumpTriggerTime);
}

/**
 * Inicia o ciclo de spawn de obstáculos em intervalos regulares.
 */
export function startObstacleSpawning() {
    // Limpa qualquer intervalo existente antes de iniciar um novo
    if (obstacleInterval) {
        clearInterval(obstacleInterval);
    }
    if (animationsActive) { // Só inicia se as animações estiverem ativas
        obstacleInterval = setInterval(spawnObstacle, 3000);
    }
}

/**
 * Para o ciclo de spawn de obstáculos.
 */
export function stopObstacleSpawning() {
    clearInterval(obstacleInterval);
    // Remove quaisquer obstáculos existentes para limpar a tela
    if (obstacleContainer) {
        obstacleContainer.innerHTML = '';
    }
    // Garante que o Mario volte ao estado de corrida se estava pulando
    if (marioCharacter) {
        clearTimeout(jumpTimeout);
        marioCharacter.style.animation = 'marioRun 0.5s steps(2) infinite';
        isJumping = false;
    }
}

/**
 * Mostra a tela escura.
 */
export function showDarkScreen() {
    if (!darkScreen) initializeAnimationElements();
    if (darkScreen) {
        darkScreen.classList.remove('hidden');
        darkScreen.classList.add('visible');
    } else {
        console.warn("showDarkScreen called but darkScreen element not found.");
    }
}

/**
 * Oculta a tela escura.
 */
export function hideDarkScreen() {
    if (!darkScreen) initializeAnimationElements();
    if (darkScreen) {
        darkScreen.classList.remove('visible');
        darkScreen.classList.add('hidden');
    } else {
        console.warn("hideDarkScreen called but darkScreen element not found.");
    }
}

// Lógica de responsividade para ativar/desativar animações
function checkAnimationStatus() {
    // Verifica se a largura da tela é menor que 768px
    const isSmallScreen = window.innerWidth < 768;

    if (isSmallScreen && animationsActive) {
        // Se for tela pequena e animações estiverem ativas, desativa
        animationsActive = false;
        stopObstacleSpawning();
        // Opcional: ajustar a animação do Mario para um estado parado ou de corrida simples
        if (marioCharacter) {
            marioCharacter.style.animation = 'marioRun 0.5s steps(2) infinite'; // Volta para corrida simples
        }
    } else if (!isSmallScreen && !animationsActive) {
        // Se for tela grande e animações estiverem inativas, ativa
        animationsActive = true;
        startObstacleSpawning();
    }
}

// Adiciona o listener para o redimensionamento da janela
window.addEventListener('resize', checkAnimationStatus);

// Chama a função uma vez ao carregar o script para definir o estado inicial
document.addEventListener("DOMContentLoaded", () => {
    initializeAnimationElements(); // Garante que os elementos DOM estejam disponíveis
    checkAnimationStatus();
});
