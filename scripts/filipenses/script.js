// Objeto contendo todas as perguntas, divididas por nível de dificuldade.
// A estrutura foi alterada para um objeto único com 'title', 'subtitle' e um array 'data' para os níveis.
const quizData = {
    title: 'Quiz Bíblico:<br>A Carta aos Filipenses!',
    subtitle: 'Uma aventura de conhecimento no mundo do Paulo!',
    actions: {
        showToolbar: true,
        showAwnserButtons: false,
    },
    data: [
        {
            id: 'easy',
            title: 'Nível Fácil',
            questions: [
                {
                    question: "Qual apóstolo escreveu a carta aos Filipenses?",
                    options: { a: "Pedro", b: "João", c: "Paulo", d: "Tiago" },
                    correct: "c",
                    hint: "Pense em quem escreveu a maioria das epístolas do Novo Testamento, muitas delas da prisão."
                },
                {
                    question: "Em qual cidade ficava a igreja para quem Paulo escreveu esta carta?",
                    options: { a: "Éfeso", b: "Corinto", c: "Filipos", d: "Roma" },
                    correct: "c",
                    hint: "O nome da cidade está no título do livro."
                },
                {
                    question: "Complete o versículo: 'Posso todas as coisas naquele que me _____________.' (Filipenses 4:13)",
                    options: { a: "ama", b: "chama", c: "fortalece", d: "salva" },
                    correct: "c",
                    hint: "Este versículo fala sobre a capacidade de suportar e superar desafios com auxílio divino."
                },
                {
                    question: "Qual a saudação inicial de Paulo aos Filipenses no capítulo 1?",
                    options: { a: "Graça e paz a vós, da parte de Deus nosso Pai e do Senhor Jesus Cristo.", b: "Que o amor de Deus esteja convosco.", c: "Alegrai-vos sempre no Senhor.", d: "Saúdo-vos em nome do Senhor." },
                    correct: "a",
                    hint: "Pense na fórmula usual de saudação nas epístolas paulinas."
                },
                {
                    question: "Qual a atitude principal que Paulo encoraja os Filipenses a ter uns para com os outros no capítulo 2?",
                    options: { a: "Competição e rivalidade", b: "Individualismo e auto-suficiência", c: "Humildade e consideração mútua", d: "Busca por poder e autoridade" },
                    correct: "c",
                    hint: "Pense no exemplo que Paulo usa para ilustrar essa atitude."
                },
                {
                    question: "Qual a expressão de gratidão de Paulo aos Filipenses por sua 'participação no evangelho' (Filipenses 1:5)?",
                    options: { a: "Ele agradece a Deus por eles em cada oração.", b: "Ele promete visitá-los em breve para expressar sua gratidão.", c: "Ele envia-lhes presentes como sinal de agradecimento.", d: "Ele escreve uma canção de louvor em honra a eles." },
                    correct: "a",
                    hint: "Pense em como Paulo, como apóstolo, geralmente se relacionava com as igrejas que amava."
                }
            ]
        },
        {
            id: 'medium',
            title: 'Nível Médio',
            questions: [
                {
                    question: "O que Paulo menciona repetidamente na carta como motivo de sua alegria, mesmo estando preso?",
                    options: { a: "A expectativa de ser solto em breve", b: "O apoio financeiro que recebeu de outras igrejas", c: "O avanço do Evangelho apesar de suas correntes", d: "A oportunidade de escrever mais cartas da prisão" },
                    correct: "c",
                    hint: "Sua alegria não dependia das circunstâncias externas, mas do propósito de sua vida."
                },
                {
                    question: "Qual é o tema principal da carta aos Filipenses?",
                    options: { a: "A salvação pela fé e não pelas obras da lei", b: "A segunda vinda de Cristo", c: "A alegria em Cristo, união e humildade", d: "A defesa contra falsos mestres" },
                    correct: "c",
                    hint: "Pense na emoção que Paulo expressa frequentemente e nos conselhos que ele dá sobre a convivência mútua."
                },
                {
                    question: "Qual exemplo de humildade Paulo cita em Filipenses 2:5-8, para encorajar os crentes a terem a mesma atitude?",
                    options: { a: "O exemplo de Moisés, que renunciou ao trono do Egito", b: "O exemplo de Jesus Cristo, que se esvaziou a si mesmo", c: "O exemplo de Davi, que esperou no Senhor para ser rei", d: "O exemplo de Paulo, que se tornou servo de todos" },
                    correct: "b",
                    hint: "Pense na figura central do cristianianismo e em sua encarnação e sacrifício."
                },
                {
                    question: "Qual a razão principal pela qual Paulo envia Epafrodito de volta aos Filipenses?",
                    options: { a: "Para que Epafrodito pudesse descansar, pois estava doente.", b: "Para que ele pudesse trazer mais ofertas para Paulo.", c: "Para que ele pudesse fundar uma nova igreja.", d: "Para que ele pudesse ser o novo pastor da igreja." },
                    correct: "a",
                    hint: "Pense na condição física e emocional de Epafrodito, e na preocupação de Paulo com o bem-estar dos Filipenses."
                },
                {
                    question: "O que Paulo diz sobre seu 'viver' e seu 'morrer' em Filipenses 1:21?",
                    options: { a: "Para mim o viver é Cristo e o morrer é o ganho.", b: "Para mim o viver é a liberdade e o morrer é a paz.", c: "Para mim o viver é pregar e o morrer é descansar.", d: "Para mim o viver é servir e o morrer é ser coroado." },
                    correct: "a",
                    hint: "Essa é uma das declarações mais conhecidas de Paulo sobre o propósito de sua vida."
                },
                {
                    question: "Em Filipenses 1:6, Paulo expressa confiança de que 'Aquele que em vós começou a boa obra a aperfeiçoará até ao Dia de Cristo Jesus'. A que 'boa obra' ele se refere?",
                    options: { a: "A obra de pregação do evangelho pelos Filipenses.", b: "A obra de construção do templo em Filipos.", c: "A obra de salvação e santificação na vida dos crentes.", d: "A obra de arrecadação de ofertas para os santos em Jerusalém." },
                    correct: "c",
                    hint: "Pense no que Deus faz na vida de cada pessoa que crê."
                },
                {
                    question: "Qual é a 'carta de recomendação' que Paulo menciona para Timóteo em Filipenses 2:19-22?",
                    options: { a: "Uma carta física de Paulo para a igreja de Filipos.", b: "Sua reputação como bom pregador e mestre.", c: "Seu caráter e serviço fiel a Cristo e ao Evangelho.", d: "Sua origem familiar e posição social." },
                    correct: "c",
                    hint: "Pense no que realmente importa para Paulo em um servo de Cristo."
                },
                {
                    question: "Qual o significado da palavra 'koinoia' (comunhão/participação) em Filipenses, especialmente em 1:5 e 2:1?",
                    options: { a: "Refere-se apenas à comunhão em refeições e celebrações sociais.", b: "Significa compartilhar bens materiais apenas com os necessitados.", c: "Envolve uma parceria profunda e compartilhamento em todos os aspectos da vida cristã, incluindo o evangelho e o sofrimento.", d: "Indica uma submissão hierárquica a líderes religiosos." },
                    correct: "c",
                    hint: "Pense na profundidade do relacionamento e do propósito que une os crentes em Cristo."
                }
            ]
        },
        {
            id: 'difficult',
            title: 'Nível Difícil',
            questions: [
                {
                    question: "De acordo com Filipenses 3:7-8, o que Paulo considerou 'perda' e 'esterco' por amor a Cristo?",
                    options: { a: "Seus bens materiais e sua família", b: "Sua cidadania romana e sua liberdade", c: "Seus privilégios religiosos e sua justiça própria", d: "Seus amigos e sua reputação" },
                    correct: "c",
                    hint: "Ele está se referindo a tudo aquilo em que ele antes confiava para sua justificação perante Deus."
                },
                {
                    question: "Qual é o 'fruto dos lábios' que os Filipenses são encorajados a oferecer a Deus em 4:18?",
                    options: { a: "Pregação do evangelho", b: "Louvor e ações de graças", c: "Orações intercessórias", d: "Testemunho pessoal" },
                    correct: "b",
                    hint: "Pense em uma forma de adoração que envolve a fala e expressa gratidão."
                },
                {
                    question: "Qual a advertência de Paulo em Filipenses 3:2 sobre 'cães' e 'maus obreiros'?",
                    options: { a: "Contra os gentios que não se convertem", b: "Contra os líderes religiosos que pervertiam o evangelho da graça pela circuncisão", c: "Contra os que se opunham ao seu ministério", d: "Contra os idólatras e pagãos" },
                    correct: "b",
                    hint: "Pense nos grupos religiosos da época que insistiam em práticas da Lei Mosaica para a salvação."
                },
                {
                    question: "Em Filipenses 4:6-7, Paulo instrui os crentes a não andarem ansiosos, mas a apresentar suas petições a Deus. Qual é a promessa que segue essa instrução?",
                    options: { a: "Deus suprirá todas as suas necessidades", b: "A paz de Deus, que excede todo o entendimento", c: "Terão vida abundante e eterna", d: "Serão libertos de todas as tribulações" },
                    correct: "b",
                    hint: "Pense no estado mental e espiritual que Deus oferece quando confiamos Nele e oramos."
                },
                {
                    question: "Qual é o propósito da admoestação de Paulo sobre a 'circuncisão', conforme Filipenses 3:3?",
                    options: { a: "Para encorajar todos os crentes a serem circuncidados fisicamente.", b: "Para distinguir entre judeus e gentios convertidos.", c: "Para enfatizar que a verdadeira circuncisão é a do coração, pelo Espírito.", d: "Para proibir a circuncisão de bebês cristãos." },
                    correct: "c",
                    hint: "Pense na diferença entre rituais externos e uma transformação espiritual interna."
                },
                {
                    question: "Qual a exortação de Paulo em Filipenses 2:14-16 sobre a conduta dos crentes em meio a uma 'geração corrompida e perversa'?",
                    options: { a: "Para que se isolem do mundo e evitem contato com pecadores.", b: "Para que reclamem e questionem a autoridade.", c: "Para que façam todas as coisas sem murmurações nem contendas, brilhando como luzeiros no mundo.", d: "Para que defendam o evangelho com argumentos filosóficos." },
                    correct: "c",
                    hint: "Pense no contraste que Paulo faz entre o comportamento dos crentes e o do mundo ao redor."
                },
                {
                    question: "Em Filipenses 4:5, Paulo diz: 'Seja a vossa eqüidade notória a todos os homens. Perto está o Senhor.' O que significa 'equidade' nesse contexto?",
                    options: { a: "Riqueza material e prosperidade financeira.", b: "Justiça rigorosa e observância estrita da lei.", c: "Moderação, bondade, razoabilidade e clemência.", d: "Inteligência superior e sabedoria humana." },
                    correct: "c",
                    hint: "Pense em como uma pessoa justa e paciente se comporta em suas interações."
                },
                {
                    question: "Afinal, qual era a principal preocupação de Paulo ao escrever a carta aos Filipenses?",
                    options: { a: "Pedir ajuda financeira para suas necessidades.", b: "Conclamá-los à alegria e à unidade em Cristo, e alertá-los contra falsos ensinadores.", c: "Organizar a estrutura eclesiástica da igreja de Filipos.", d: "Dar instruções detalhadas sobre a ceia do Senhor." },
                    correct: "b",
                    hint: "Pense nos sentimentos que ele expressa e nos perigos que ele aponta."
                },
                {
                    question: "Paulo menciona a 'árvore' que dá frutos de justiça em Filipenses 1:11. A que 'frutos de justiça' ele se refere?",
                    options: { a: "Resultados de boas obras e caridade realizadas pelos crentes.", b: "Consequências diretas da observância da lei mosaica.", c: "As virtudes e o caráter de Cristo manifestados na vida dos crentes, através de Jesus Cristo.", d: "Bênçãos materiais e prosperidade concedidas por Deus." },
                    correct: "c",
                    hint: "Pense na fonte desses frutos e no seu propósito final."
                },
                {
                    question: "Em Filipenses 1:27, Paulo exorta os crentes a se comportarem 'dignamente do evangelho de Cristo'. O que isso implica, segundo o contexto?",
                    options: { a: "Viver uma vida de luxo para mostrar a bênção de Deus.", b: "Lutar uns com os outros pela verdade da doutrina.", c: "Permanecer firmes em um só espírito, lutando juntos pela fé do evangelho.", d: "Ignorar as perseguições e viver em paz isolada." },
                    correct: "c",
                    hint: "Pense na forma como a comunidade cristã deve agir em união diante dos desafios."
                },
                {
                    question: "Em Filipenses 3:12-14, Paulo fala sobre 'prosseguir para o alvo'. Qual é esse alvo?",
                    options: { a: "Alcançar a perfeição moral e ética por seus próprios esforços.", b: "Ser reconhecido e aclamado pelos outros crentes.", c: "O prêmio da soberana vocação de Deus em Cristo Jesus, que é a ressurreição e a semelhança com Cristo.", d: "Acumular conhecimento teológico e doutrinário." },
                    correct: "c",
                    hint: "Pense no propósito final da vida cristã, que está além desta vida terrena."
                },
                {
                    question: "Qual o conselho de Paulo sobre os pensamentos em Filipenses 4:8? Ele diz para pensarmos em tudo que é...",
                    options: { a: "Rentável, popular e conveniente.", b: "Verdadeiro, respeitável, justo, puro, amável, de boa fama, e se há alguma virtude e louvor.", c: "Ambicioso, competitivo e focado em si mesmo.", d: "Fácil, divertido e relaxante." },
                    correct: "b",
                    hint: "Pense nas qualidades que elevam o caráter e agradam a Deus."
                },
                {
                    question: "Em Filipenses 2:3, Paulo adverte contra o 'partidarismo' e a 'vanglória'. O que ele sugere em seu lugar?",
                    options: { a: "Buscar reconhecimento e elogios dos outros.", b: "Considerar os outros superiores a si mesmos.", c: "Defender a própria opinião a todo custo.", d: "Focar apenas em seus próprios interesses e necessidades." },
                    correct: "b",
                    hint: "Pense na atitude que Jesus demonstrou ao se esvaziar."
                },
                {
                    question: "O que Paulo diz sobre a sua 'esperança' e a 'salvação' em Filipenses 1:20?",
                    options: { a: "Que Cristo será engrandecido em seu corpo, seja pela vida, seja pela morte.", b: "Que ele será libertado da prisão e continuará a pregar.", c: "Que sua salvação depende de seus próprios esforços para pregar o evangelho.", d: "Que a salvação dos Filipenses está garantida se eles seguirem suas instruções à risca." },
                    correct: "a",
                    hint: "Pense na dedicação total de Paulo a Cristo e ao evangelho, mesmo diante da morte."
                },
                {
                    question: "Paulo se refere a si mesmo como 'cidadão do céu' em Filipenses 3:20. O que isso significa para ele e para os crentes?",
                    options: { a: "Que ele tinha dupla cidadania, romana e celestial.", b: "Que a verdadeira pátria dos crentes é o céu, de onde esperam o Salvador.", c: "Que eles deveriam se desinteressar pelos assuntos terrenos.", d: "Que eles iriam literalmente se mudar para o céu antes da morte." },
                    correct: "b",
                    hint: "Pense na sua identidade e no seu verdadeiro lar, que não é deste mundo."
                },
                {
                    question: "Em Filipenses 4:11-12, Paulo fala sobre estar contente 'em toda e qualquer situação'. Qual é o segredo dele para essa satisfação?",
                    options: { a: "Ele tinha aprendido a arte de viver com o que tinha, sem depender de ninguém.", b: "Ele havia encontrado a verdadeira felicidade na filosofia estoica.", c: "Ele havia aprendido o segredo de todas as coisas em Cristo, que o fortalecia.", d: "Ele recebia grandes quantidades de ajuda financeira das igrejas." },
                    correct: "c",
                    hint: "Pense na fonte de sua força interior para lidar com as adversidades e a abundância."
                }
            ]
        }
    ]
};


// Variáveis de estado do jogo
let currentLevel = ""; // ID do nível de dificuldade atual (e.g., 'easy', 'medium', 'difficult')
let currentQuestionIndex = -1; // Índice da pergunta atual dentro do nível
// Objeto para rastrear quais perguntas foram respondidas em cada nível
// Ex: { easy: [0, 2], medium: [1] }
let answeredQuestions = {};

// Referências aos elementos HTML
const startScreen = document.getElementById("start-screen");
const levelSelectionScreen = document.getElementById("level-selection-screen");
const questionSelectionScreen = document.getElementById(
  "question-selection-screen"
);
const questionDisplayScreen = document.getElementById(
  "question-display-screen"
);

const startButton = document.getElementById("start-button");
const levelOptionsContainer = document.getElementById(
  "level-options-container"
);
const currentQuestionOptions = document.querySelector(".options-container"); // Selecionado pela classe

const gameToolbar = document.getElementById("game-toolbar");
const globalBackButton = document.getElementById("global-back-button");
const answerButtonToolbar = document.getElementById("answer-button-toolbar");
const answerCheckButtonToolbar = document.getElementById(
  "answer-check-button-toolbar"
);
const hintButtonToolbar = document.getElementById("hint-button-toolbar");

const hintDialog = document.getElementById("hint-dialog");
const dialogHintText = document.getElementById("dialog-hint-text");
const closeHintDialogButton = document.getElementById(
  "close-hint-dialog-button"
);

const feedbackDialog = document.getElementById("feedback-dialog");
const feedbackDialogTitle = document.getElementById("feedback-dialog-title");
const feedbackDialogMessage = document.getElementById(
  "feedback-dialog-message"
);
const closeFeedbackDialogButton = document.getElementById(
  "close-feedback-dialog-button"
);

const levelTitle = document.getElementById("level-title");
const questionCount = document.getElementById("question-count");
const questionBlocksContainer = document.getElementById("question-blocks");

const currentQuestionElement = document.getElementById("current-question");
const optionButtons = document.querySelectorAll(".option-button");

let selectedOption = null; // Armazena a opção selecionada pelo jogador

// --- Elementos da Animação ---
const marioAnimationArea = document.getElementById("mario-animation-area");
const marioCharacter = document.getElementById("mario-character");
const obstacleContainer = document.getElementById(
  "obstacle-animation-container"
);

let isJumping = false; // Estado do pulo do Mario
let jumpTimeout; // Para controlar o tempo do pulo

// --- Funções de Animação ---

/**
 * Faz o Mario pular.
 */
function marioJump() {
  if (!isJumping) {
    isJumping = true;
    marioCharacter.style.animation = "marioJump 0.8s ease-out forwards"; // Aplica a animação de pulo
    // Remove a animação de pulo após um tempo para que possa ser aplicada novamente
    jumpTimeout = setTimeout(() => {
      marioCharacter.style.animation = "marioRun 0.5s steps(2) infinite"; // Volta para a animação de corrida
      isJumping = false;
    }, 800); // Duração do pulo deve corresponder à duração da animação CSS
  }
}

/**
 * Gera e move obstáculos aleatoriamente.
 */
function spawnObstacle() {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle"); // Adiciona uma classe para estilização
  obstacleContainer.appendChild(obstacle);

  // Define a posição inicial do obstáculo (fora da tela à direita)
  obstacle.style.left = "100%";

  // Inicia a animação de movimento do obstáculo
  obstacle.style.animation = `moveObstacle 8s linear forwards`; // 'forwards' para que ele pare no final

  // Remove o obstáculo após ele sair da tela para otimização
  obstacle.addEventListener("animationend", () => {
    obstacle.remove();
  });

  // Lógica simples para fazer o Mario pular quando um obstáculo se aproxima
  // Isso é uma simulação, não uma detecção de colisão precisa
  const obstacleAnimationDuration = 8000; // 8 segundos (deve corresponder à animação CSS)
  // Ajustado para que o Mario pule antes do obstáculo chegar à sua posição
  const marioJumpTriggerTime = obstacleAnimationDuration * 0.77; // Alterado de 0.3 para 0.85 para pular mais cedo

  setTimeout(() => {
    marioJump();
  }, marioJumpTriggerTime);
}

/**
 * Inicia o ciclo de spawn de obstáculos em intervalos regulares.
 */
function startObstacleSpawning() {
  // Spawna um obstáculo a cada X segundos (ajustável)
  setInterval(spawnObstacle, 3000); // Spawna um obstáculo a cada 3 segundos
}

// --- Funções de Navegação e Lógica do Jogo ---

/**
 * Exibe uma tela específica e esconde as outras, e gerencia a visibilidade dos botões da toolbar.
 * @param {string} screenId O ID da tela a ser exibida.
 */
function showScreen(screenId) {
  debugger;
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");

  // Esconde a toolbar por padrão em todas as telas
  gameToolbar.classList.add("hidden");
  hintDialog.close(); // Garante que o diálogo da dica esteja fechado ao mudar de tela
  feedbackDialog.close(); // Garante que o diálogo de feedback esteja fechado ao mudar de tela

  // Mostra a toolbar e seus botões relevantes apenas na tela de perguntas
  if (screenId === "question-display-screen") {
    gameToolbar.classList.remove("hidden");
    globalBackButton.dataset.targetScreen = "question-selection-screen"; // Volta para a seleção de perguntas
    globalBackButton.classList.remove("hidden");
    hintButtonToolbar.classList.remove("hidden");
    answerButtonToolbar.classList.remove("hidden");
    answerCheckButtonToolbar.classList.add("hidden");

    if (!quizData.actions.showAwnserButtons) {
      answerButtonToolbar.classList.add("hidden");
      answerCheckButtonToolbar.classList.remove("hidden");
    }
  } else if (screenId === "level-selection-screen") {
    // Na tela de seleção de nível, a toolbar deve estar oculta, mas o botão "Voltar" deve ser visível.
    gameToolbar.classList.add("hidden"); // Toolbar oculta
    globalBackButton.dataset.targetScreen = "start-screen";
    globalBackButton.classList.remove("hidden"); // Botão Voltar visível
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
  } else if (screenId === "question-selection-screen") {
    // Na tela de seleção de perguntas, a toolbar deve estar oculta, mas o botão "Voltar" deve ser visível.
    gameToolbar.classList.add("hidden"); // Toolbar oculta
    globalBackButton.dataset.targetScreen = "level-selection-screen";
    globalBackButton.classList.remove("hidden"); // Botão Voltar visível
    answerButtonToolbar.classList.add("hidden");
    answerCheckButtonToolbar.classList.add("hidden");
    hintButtonToolbar.classList.add("hidden");
  }
  // Se for a tela inicial ('start-screen'), a toolbar permanece oculta

  // Controla a visibilidade da toolbar e dos botões de resposta com base em quizData.actions
  if (!quizData.actions.showToolbar) {
    gameToolbar.classList.add("hidden");
  } else {
    gameToolbar.classList.remove("hidden");
  }

  if (!quizData.actions.showAwnserButtons) {
    currentQuestionOptions.classList.add("hidden");
    answerButtonToolbar.classList.add("hidden");
  } else {
    currentQuestionOptions.classList.remove("hidden");
    answerButtonToolbar.classList.remove("hidden");
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
  // Encontra o objeto de nível correspondente ao ID dentro de quizData.data
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === levelId
  );
  if (!selectedLevelObject) {
    console.error("Nível não encontrado:", levelId);
    return;
  }

  currentLevel = levelId;
  // Inicializa o array de perguntas respondidas para o nível, se ainda não existir
  answeredQuestions[currentLevel] = answeredQuestions[currentLevel] || [];
  levelTitle.textContent = selectedLevelObject.title; // Usa o título do objeto de nível
  questionCount.textContent = `${selectedLevelObject.questions.length} Perguntas`;
  renderQuestionBlocks(levelId); // Renderiza os blocos de perguntas para o nível
  showScreen("question-selection-screen");
}

/**
 * Renderiza os blocos de perguntas clicáveis para o nível atual.
 * Cada bloco representa uma pergunta e mostra se já foi respondida.
 * @param {string} levelId O ID do nível de dificuldade atual.
 */
function renderQuestionBlocks(levelId) {
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  questionBlocksContainer.innerHTML = ""; // Limpa os blocos existentes
  selectedLevelObject.questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.classList.add("question-block");
    block.dataset.questionIndex = index; // Armazena o índice da pergunta no dataset
    block.textContent = index + 1; // Define o número da pergunta (começando de 1)
    // Adiciona a classe 'answered' se a pergunta já foi respondida neste nível
    if (answeredQuestions[currentLevel].includes(index)) {
      block.classList.add("answered");
      block.textContent = ""; // Oculta o número se a pergunta já foi respondida
    }
    // Adiciona um evento de clique para carregar a pergunta
    block.addEventListener("click", () => {
      // Só carrega a pergunta se ela ainda não foi respondida
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
  debugger;
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  currentQuestionIndex = index;
  const qData = selectedLevelObject.questions[index]; // Dados da pergunta

  currentQuestionElement.textContent = qData.question; // Define o texto da pergunta

  // Preenche e reinicia os botões de opção
  optionButtons.forEach((button) => {
    const optionKey = button.dataset.option;
    button.textContent = `${optionKey.toUpperCase()}) ${
      qData.options[optionKey]
    }`;
    button.classList.remove("selected", "correct-answer", "incorrect-answer"); // Limpa estilos anteriores
    button.disabled = false; // Habilita o botão
    // Adiciona listener para seleção da opção
    button.onclick = () => selectOption(button);
  });

  answerButtonToolbar.disabled = true; // Desabilita o botão de responder até uma opção ser selecionada
  //answerCheckButtonToolbar.disabled = true; // Desabilita o botão de responder até uma opção ser selecionada
  hintButtonToolbar.classList.remove("hidden"); // Garante que o botão de dica apareça
  hintButtonToolbar.disabled = false; // Habilita o botão de dica

  showScreen("question-display-screen"); // Exibe a tela da pergunta
}

/**
 * Marca a opção selecionada pelo jogador.
 * @param {HTMLElement} selectedButton O botão de opção que foi clicado.
 */
function selectOption(selectedButton) {
  // Remove a classe 'selected' de todos os botões de opção
  optionButtons.forEach((button) => button.classList.remove("selected"));
  // Adiciona a classe 'selected' ao botão clicado
  selectedButton.classList.add("selected");
  selectedOption = selectedButton.dataset.option; // Armazena a opção selecionada
  answerButtonToolbar.disabled = false; // Habilita o botão "Responder"
  answerCheckButtonToolbar.disabled = false; // Habilita o botão "Responder"
  // Limpa feedback anterior e estilos de resposta
  optionButtons.forEach((button) => {
    button.classList.remove("correct-answer", "incorrect-answer");
  });
}

/**
 * Verifica a resposta do jogador e fornece feedback em um diálogo.
 */
function checkAnswer() {
  if (!selectedOption) return; // Não faz nada se nenhuma opção foi selecionada

  // Acessar quizData.data para encontrar o nível
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  // Desabilita todos os botões de opção após a resposta
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
    checkCorrect(); // Reseta a seleção
  } else {
    feedbackDialogTitle.textContent = "Ops!";
    feedbackDialogMessage.textContent = "Tente novamente!";
    feedbackDialogMessage.style.color = "var(--mario-red)";
    // Adiciona estilo para a resposta incorreta selecionada
    optionButtons.forEach((button) => {
      if (button.dataset.option === selectedOption) {
        button.classList.add("incorrect-answer");
      }
    });
  }
  feedbackDialog.showModal(); // Abre o diálogo de feedback
  answerButtonToolbar.disabled = true; // Impede múltiplas respostas
  answerCheckButtonToolbar.disabled = true; // Impede múltiplas respostas
  hintButtonToolbar.classList.add("hidden"); // Esconde a dica após responder
  // selectedOption = null; // Reseta a seleção
  hintDialog.close(); // Fecha o diálogo da dica se estiver aberto
}

/**
 * Verifica a resposta do jogador e fornece feedback em um diálogo.
 */
function checkCorrectAnswer() {
  debugger;
  selectedButton = Array.from(optionButtons).filter(
    (button) => button.dataset.option == "a"
  )[0];

  if (!selectedButton) return; // Não faz nada se nenhuma opção foi selecionada
  // Adiciona a classe 'selected' ao botão clicado
  selectedButton.classList.add("selected");
  // Armazena a opção selecionada
  selectedOption = selectedButton.dataset.option; // Armazena a opção selecionada
  if (!selectedOption) return; // Não faz nada se nenhuma opção foi selecionada

  // Acessar quizData.data para encontrar o nível
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[0];
  // Desabilita todos os botões de opção após a resposta
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
    checkCorrect(); // Reseta a seleção
  }
  answerButtonToolbar.disabled = true; // Impede múltiplas respostas
  answerCheckButtonToolbar.disabled = true; // Impede múltiplas respostas
  hintButtonToolbar.classList.add("hidden"); // Esconde a dica após responder
  // selectedOption = null; // Reseta a seleção
  hintDialog.close(); // Fecha o diálogo da dica se estiver aberto
}

function checkCorrect() {
  feedbackDialogTitle.textContent = "Certo!";
  feedbackDialogMessage.textContent = "Você ganhou uma moeda!";
  feedbackDialogMessage.style.color = "var(--mario-green)";
  // Adiciona estilo para a resposta correta
  optionButtons.forEach((button) => {
    if (button.dataset.option === selectedOption) {
      button.classList.add("correct-answer");
    }
  });
  // Marca a pergunta como respondida no array e atualiza o bloco visualmente
  if (!answeredQuestions[currentLevel].includes(currentQuestionIndex)) {
    answeredQuestions[currentLevel].push(currentQuestionIndex);
    // Encontra o bloco de pergunta correspondente e adiciona a classe 'answered'
    const questionBlock = document.querySelector(
      `.question-block[data-question-index="${currentQuestionIndex}"]`
    );
    if (questionBlock) {
      questionBlock.classList.add("answered");
      questionBlock.textContent = ""; // Oculta o número do bloco
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
  hintDialog.showModal(); // Abre o diálogo
  hintButtonToolbar.disabled = true; // Desabilita a dica após ser usada
}

/**
 * Renderiza os botões de seleção de nível dinamicamente.
 */
function renderLevelSelectionButtons() {
  levelOptionsContainer.innerHTML = ""; // Limpa os botões existentes
  quizData.data.forEach((level) => {
    // Itera sobre quizData.data
    const button = document.createElement("button");
    button.classList.add("level-button", "mario-button");
    button.dataset.level = level.id;
    button.textContent = level.title;
    button.addEventListener("click", () => {
      selectLevel(level.id);
    });
    levelOptionsContainer.appendChild(button);
  });
}

// --- Event Listeners ---

// Evento para o botão "Iniciar Aventura"
startButton.addEventListener("click", startGame);

// Evento para o botão "Voltar" na toolbar
globalBackButton.addEventListener("click", () => {
  const targetScreenId = globalBackButton.dataset.targetScreen;
  if (targetScreenId) {
    showScreen(targetScreenId);
    // Se estiver voltando para a tela de seleção de perguntas, renderize os blocos novamente
    if (targetScreenId === "question-selection-screen") {
      renderQuestionBlocks(currentLevel);
    }
  } else {
    // Caso padrão para voltar ao início se não houver targetScreen definido
    showScreen("start-screen");
  }
});

// Evento para o botão "Responder" na toolbar
answerButtonToolbar.addEventListener("click", checkAnswer);

// Evento para o botão "Responder" na toolbar
answerCheckButtonToolbar.addEventListener("click", checkCorrectAnswer);

// Evento para o botão "Dica" na toolbar
hintButtonToolbar.addEventListener("click", showHint);

// Evento para fechar o diálogo da dica
closeHintDialogButton.addEventListener("click", () => {
  hintDialog.close();
});

// Evento para fechar o diálogo de feedback
closeFeedbackDialogButton.addEventListener("click", () => {
  feedbackDialog.close();

  if (!selectedOption) return; // Não faz nada se nenhuma opção foi selecionada

  // Acessar quizData.data para encontrar o nível
  const selectedLevelObject = quizData.data.find(
    (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  // Desabilita todos os botões de opção após a resposta
  optionButtons.forEach((button) => (button.disabled = true));

  if (selectedOption === qData.correct) {
  } else {
    // Adiciona estilo para a resposta incorreta selecionada
    optionButtons.forEach((button) => {
      if (button.dataset.option === selectedOption) {
        button.classList.remove("incorrect-answer");
      }
    });

    // Habilita todos os botões de opção após a resposta
    optionButtons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("incorrect-answer");
      button.classList.remove("selected");
    });
  }
});

// Inicializa a tela de início e renderiza os botões de seleção de nível quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Preenche os títulos da tela inicial dinamicamente
  document.getElementById("start-screen").querySelector("h1").innerHTML =
    quizData.title;
  document.getElementById("start-screen").querySelector("h2").textContent =
    quizData.subtitle;

  showScreen("start-screen");
  renderLevelSelectionButtons(); // Renderiza os botões de nível ao carregar a página
  startObstacleSpawning(); // Inicia a animação de obstáculos
  gameToolbar.classList.add("hidden"); // Garante que a toolbar esteja oculta inicialmente
});
