// Referências aos elementos DOM, inicializadas diretamente ao carregar o script.
// Isso garante que estejam disponíveis quando as funções que os utilizam forem chamadas.
let marioCharacter = document.getElementById("mario-character");
let obstacleContainer = document.getElementById("obstacle-animation-container");
let darkScreen = document.getElementById("dark-screen");

let isJumping = false;
let jumpTimeout;
let obstacleInterval;

/**
 * Faz o Mario pular.
 */
function marioJump() {
    if (!isJumping) {
        isJumping = true;
        marioCharacter.style.animation = 'marioJump 0.8s ease-out forwards'; // Aplica a animação de pulo
        // Remove a animação de pulo após um tempo para que possa ser aplicada novamente
        jumpTimeout = setTimeout(() => {
            marioCharacter.style.animation = 'marioRun 0.5s steps(2) infinite'; // Volta para a animação de corrida
            isJumping = false;
        }, 800); // Duração do pulo deve corresponder à duração da animação CSS
    }
}

/**
 * Gera e move obstáculos aleatoriamente.
 */
function spawnObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle'); // Adiciona uma classe para estilização
    obstacleContainer.appendChild(obstacle);

    // Define a posição inicial do obstáculo (fora da tela à direita)
    obstacle.style.left = '100%';

    // Inicia a animação de movimento do obstáculo
    obstacle.style.animation = `moveObstacle 8s linear forwards`; // 'forwards' para que ele pare no final

    // Remove o obstáculo após ele sair da tela para otimização
    obstacle.addEventListener('animationend', () => {
        obstacle.remove();
    });

    // Lógica simples para fazer o Mario pular quando um obstáculo se aproxima
    // Isso é uma simulação, não uma detecção de colisão precisa
    const obstacleAnimationDuration = 8000; // 8 segundos (deve corresponder à animação CSS)
    // Ajustado para que o Mario pule antes do obstáculo chegar à sua posição
    const marioJumpTriggerTime = obstacleAnimationDuration * 0.77; // Ajuste este valor para sincronizar o salto

    setTimeout(() => {
        marioJump();
    }, marioJumpTriggerTime);
}

/**
 * Inicia o ciclo de spawn de obstáculos em intervalos regulares.
 */
function startObstacleSpawning() {
    // Spawna um obstáculo a cada X segundos (ajustável)
    obstacleInterval = setInterval(spawnObstacle, 3000); // Spawna um obstáculo a cada 3 segundos
}

/**
 * Para o ciclo de spawn de obstáculos.
 */
function stopObstacleSpawning() {
    clearInterval(obstacleInterval);
}

/**
 * Mostra a tela escura.
 */
function showDarkScreen() {
    // Adicionado uma verificação defensiva caso o elemento ainda não esteja disponível (improvável com a nova inicialização)
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
function hideDarkScreen() {
    // Adicionado uma verificação defensiva caso o elemento ainda não esteja disponível (improvável com a nova inicialização)
    if (darkScreen) {
        darkScreen.classList.remove('visible');
        darkScreen.classList.add('hidden');
    } else {
        console.warn("hideDarkScreen called but darkScreen element not found.");
    }
}
