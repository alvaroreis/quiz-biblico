// Objeto padrão contendo todas as perguntas, dividido por nível de dificuldade.
// Este será usado se não houver dados salvos no localStorage.
const DEFAULT_QUIZ_DATA = {
  title: "Descubra o Emoji!",
  subtitle: "O que os emojis querem dizer?",
  font: "'Press Start 2P', cursive", // Campo de fonte para a pergunta atual
  fontSize: "2.5em", // Campo de tamanho de fonte para a pergunta atual
  theme: "dark", // Variável para definir o tema ('light' ou 'dark')
  actions: {
    showToolbar: true,
    showAwnserButtons: false,
  },
  data: [
    {
      "id": "old-testament-books",
      "title": "Livros do Antigo Testamento",
      "questions": [
        {
          "question": "🌍👨‍👩‍👧‍👦🐍🍎🌊",
          "options": { "a": "Gênesis" },
          "correct": "a",
          "hint": "Criação, família, pecado, dilúvio"
        },
        {
          "question": "🌊🚶‍♂️🚶‍♀️🔥⛰️📜",
          "options": { "a": "Êxodo" },
          "correct": "a",
          "hint": "Mar Vermelho, êxodo, sarça ardente, Monte Sinai, tábuas da lei"
        },
        {
          "question": "📖🩸🙏🕊️",
          "options": { "a": "Levítico" },
          "correct": "a",
          "hint": "Lei, sacrifícios, pureza"
        },
        {
          "question": "🏕️🚶‍♂️🚶‍♀️🗺️🔢",
          "options": { "a": "Números" },
          "correct": "a",
          "hint": "Caminhada no deserto, censo, jornada"
        },
        {
          "question": "🗣️📜✨",
          "options": { "a": "Deuteronômio" },
          "correct": "a",
          "hint": "Discurso de Moisés, segunda lei, renovação da aliança"
        },
        {
          "question": "⚔️ Jericho 🎺🔥",
          "options": { "a": "Josué" },
          "correct": "a",
          "hint": "Batalha de Jericó, trombetas, conquista"
        },
        {
          "question": "💪🦁🍯✂️",
          "options": { "a": "Juízes" },
          "correct": "a",
          "hint": "Sansão, juízes, ciclo de desobediência"
        },
        {
          "question": "🌾❤️👩‍❤️‍👨",
          "options": { "a": "Rute" },
          "correct": "a",
          "hint": "Campos de cevada, amor, casamento"
        },
        {
          "question": "👑🐑👂",
          "options": { "a": "1 Samuel" },
          "correct": "a",
          "hint": "Rei, ovelhas, ouvir a Deus"
        },
        {
          "question": "👑⚔️🎵",
          "options": { "a": "2 Samuel" },
          "correct": "a",
          "hint": "Rei Davi, batalhas, salmos"
        },
        {
          "question": "👑 Solomon 🏛️🔥",
          "options": { "a": "1 Reis" },
          "correct": "a",
          "hint": "Rei Salomão, templo, divisão do reino"
        },
        {
          "question": "👑 Elijah 🔥 chariot 🌬️",
          "options": { "a": "2 Reis" },
          "correct": "a",
          "hint": "Reis, Elias, Eliseu, carro de fogo"
        },
        {
          "question": "👑 genealogia 📜",
          "options": { "a": "1 Crônicas" },
          "correct": "a",
          "hint": "Reis, genealogias, história"
        },
        {
          "question": "👑 temple 🙏",
          "options": { "a": "2 Crônicas" },
          "correct": "a",
          "hint": "Reis, templo, adoração"
        },
        {
          "question": "📜 rebuild 🏛️",
          "options": { "a": "Esdras" },
          "correct": "a",
          "hint": "Esdras, reconstrução do templo"
        },
        {
          "question": "🧱 rebuild 🛡️",
          "options": { "a": "Neemias" },
          "correct": "a",
          "hint": "Neemias, reconstrução dos muros"
        },
        {
          "question": "👑👸📜",
          "options": { "a": "Ester" },
          "correct": "a",
          "hint": "Rainha Ester, plano de salvação"
        },
        {
          "question": "😥🌪️🙏✨",
          "options": { "a": "Jó" },
          "correct": "a",
          "hint": "Sofrimento, provação, fé"
        },
        {
          "question": "🎵🙏💖🙌",
          "options": { "a": "Salmos" },
          "correct": "a",
          "hint": "Cânticos, louvor, oração"
        },
        {
          "question": "💡🦉🗣️",
          "options": { "a": "Provérbios" },
          "correct": "a",
          "hint": "Sabedoria, conselhos, ensinamentos"
        },
        {
          "question": "🕰️💨🤔",
          "options": { "a": "Eclesiastes" },
          "correct": "a",
          "hint": "Tempo, vaidade, reflexão"
        },
        {
          "question": "❤️🌹👰🤵",
          "options": { "a": "Cânticos" },
          "correct": "a",
          "hint": "Amor, casamento, poema"
        },
        {
          "question": "🦁 Lamb 👑 prophecy 📜",
          "options": { "a": "Isaías" },
          "correct": "a",
          "hint": "Profecia, Messias, leão e cordeiro"
        },
        {
          "question": "😭💔📜",
          "options": { "a": "Jeremias" },
          "correct": "a",
          "hint": "Profeta chorão, destruição, lamento"
        },
        {
          "question": "😭💔🌃",
          "options": { "a": "Lamentações" },
          "correct": "a",
          "hint": "Tristeza, destruição de Jerusalém"
        },
        {
          "question": "👁️🔥🌪️👤",
          "options": { "a": "Ezequiel" },
          "correct": "a",
          "hint": "Visões, profecias, restauração"
        },
        {
          "question": "🦁🔥👑",
          "options": { "a": "Daniel" },
          "correct": "a",
          "hint": "Cova dos leões, fornalha ardente, reinos"
        },
        {
          "question": "❤️💔👰",
          "options": { "a": "Oséias" },
          "correct": "a",
          "hint": "Amor de Deus, infidelidade"
        },
        {
          "question": "🦗🌍🔥",
          "options": { "a": "Joel" },
          "correct": "a",
          "hint": "Pragas, dia do Senhor"
        },
        {
          "question": "🐑⚖️🗣️",
          "options": { "a": "Amós" },
          "correct": "a",
          "hint": "Pastor, justiça social"
        },
        {
          "question": "⛰️⚔️",
          "options": { "a": "Obadias" },
          "correct": "a",
          "hint": "Juízo sobre Edom"
        },
        {
          "question": "🐳🌊🙏",
          "options": { "a": "Jonas" },
          "correct": "a",
          "hint": "Baleia, arrependimento"
        },
        {
          "question": "⚖️👣🙏",
          "options": { "a": "Miquéias" },
          "correct": "a",
          "hint": "Justiça, andar com Deus"
        },
        {
          "question": "🌊🔥⚔️",
          "options": { "a": "Naum" },
          "correct": "a",
          "hint": "Juízo sobre Nínive"
        },
        {
          "question": "🤔🙏❓",
          "options": { "a": "Habacuque" },
          "correct": "a",
          "hint": "Perguntas a Deus, fé"
        },
        {
          "question": "🌍🔥🙏",
          "options": { "a": "Sofonias" },
          "correct": "a",
          "hint": "Dia do Senhor, juízo"
        },
        {
          "question": "🏛️ rebuild 🙏",
          "options": { "a": "Ageu" },
          "correct": "a",
          "hint": "Reconstrução do templo"
        },
        {
          "question": "🐎👑🙏",
          "options": { "a": "Zacarias" },
          "correct": "a",
          "hint": "Visões, Messias"
        },
        {
          "question": "🙏🔥🎁",
          "options": { "a": "Malaquias" },
          "correct": "a",
          "hint": "Sacrifícios, dízimos, dia do Senhor"
        }
      ]
    },
    {
      "id": "new-testament-books",
      "title": "Livros do Novo Testamento",
      "questions": [
        {
          "question": "👶👑🗣️📖",
          "options": { "a": "Mateus" },
          "correct": "a",
          "hint": "Nascimento de Jesus, Rei, sermão da montanha"
        },
        {
          "question": "🦁👑🏃‍♂️",
          "options": { "a": "Marcos" },
          "correct": "a",
          "hint": "Jesus servo, ação, milagres"
        },
        {
          "question": "👨‍⚕️🌍🙏📖",
          "options": { "a": "Lucas" },
          "correct": "a",
          "hint": "Jesus homem, graça, parábolas"
        },
        {
          "question": "❤️🌟📖🔥",
          "options": { "a": "João" },
          "correct": "a",
          "hint": "Jesus Deus, luz, amor"
        },
        {
          "question": "🔥🌬️ spreading the word 🌎",
          "options": { "a": "Atos" },
          "correct": "a",
          "hint": "Espírito Santo, Igreja, missões"
        },
        {
          "question": "⚖️✝️🙏",
          "options": { "a": "Romanos" },
          "correct": "a",
          "hint": "Justificação pela fé, salvação"
        },
        {
          "question": "❤️⛪🗣️",
          "options": { "a": "1 Coríntios" },
          "correct": "a",
          "hint": "Amor, dons espirituais, divisões"
        },
        {
          "question": "💪💔🙏",
          "options": { "a": "2 Coríntios" },
          "correct": "a",
          "hint": "Fraqueza, sofrimento, consolo"
        },
        {
          "question": "⛓️✝️ libertad",
          "options": { "a": "Gálatas" },
          "correct": "a",
          "hint": "Liberdade em Cristo, lei e graça"
        },
        {
          "question": "💒👑🛡️",
          "options": { "a": "Efésios" },
          "correct": "a",
          "hint": "Igreja, armadura de Deus, unidade"
        },
        {
          "question": "😁🙏💖",
          "options": { "a": "Filipenses" },
          "correct": "a",
          "hint": "Alegria, contentamento, unidade"
        },
        {
          "question": "👑🌟✝️",
          "options": { "a": "Colossenses" },
          "correct": "a",
          "hint": "Supremacia de Cristo, nova vida"
        },
        {
          "question": "✝️💨🙏",
          "options": { "a": "1 Tessalonicenses" },
          "correct": "a",
          "hint": "Volta de Jesus, esperança"
        },
        {
          "question": "✝️💨🕰️",
          "options": { "a": "2 Tessalonicenses" },
          "correct": "a",
          "hint": "Volta de Jesus, sinais, paciência"
        },
        {
          "question": "젊은 목사 📚👨‍🏫",
          "options": { "a": "1 Timóteo" },
          "correct": "a",
          "hint": "Jovem pastor, liderança, doutrina"
        },
        {
          "question": "📜⚔️🏃‍♂️",
          "options": { "a": "2 Timóteo" },
          "correct": "a",
          "hint": "Combate da fé, perseverança"
        },
        {
          "question": "👨‍🏫⛪✨",
          "options": { "a": "Tito" },
          "correct": "a",
          "hint": "Liderança, boas obras"
        },
        {
          "question": "⛓️🤝❤️",
          "options": { "a": "Filemom" },
          "correct": "a",
          "hint": "Escravo, perdão, reconciliação"
        },
        {
          "question": "👑✝️🙏",
          "options": { "a": "Hebreus" },
          "correct": "a",
          "hint": "Jesus sumo sacerdote, superioridade de Cristo"
        },
        {
          "question": "🚶‍♂️🗣️🙏",
          "options": { "a": "Tiago" },
          "correct": "a",
          "hint": "Fé e obras, sabedoria prática"
        },
        {
          "question": "✝️🔥🌍",
          "options": { "a": "1 Pedro" },
          "correct": "a",
          "hint": "Sofrimento, esperança, fé"
        },
        {
          "question": "🚨📖🌟",
          "options": { "a": "2 Pedro" },
          "correct": "a",
          "hint": "Falsos mestres, profecia, segunda vinda"
        },
        {
          "question": "❤️💡✝️",
          "options": { "a": "1 João" },
          "correct": "a",
          "hint": "Amor, luz, verdade"
        },
        {
          "question": "🏡✝️",
          "options": { "a": "2 João" },
          "correct": "a",
          "hint": "Caminhar na verdade e amor"
        },
        {
          "question": "🤝❤️",
          "options": { "a": "3 João" },
          "correct": "a",
          "hint": "Hospitalidade, cooperadores"
        },
        {
          "question": "🛡️✝️",
          "options": { "a": "Judas" },
          "correct": "a",
          "hint": "Defender a fé, alertar contra falsos mestres"
        },
        {
          "question": "🌍🔥😇👑",
          "options": { "a": "Apocalipse" },
          "correct": "a",
          "hint": "Fim dos tempos, visões, vitória de Cristo"
        }
      ]
    },
    {
      "id": "bible-stories",
      "title": "Histórias da Bíblia",
      "questions": [
        {
          "question": "🌍☀️🌙⭐️🐠🦅🌳🐄👨‍👩‍👧‍👦",
          "options": { "a": "A Criação" },
          "correct": "a",
          "hint": "Deus cria o mundo, o homem e a mulher em sete dias"
        },
        {
          "question": "🌳🐍🍎👨‍👩‍👧‍👦 expulsion 😭",
          "options": { "a": "Adão e Eva e a Queda" },
          "correct": "a",
          "hint": "A primeira desobediência, expulsão do Jardim do Éden"
        },
        {
          "question": "👨‍🌾🐑🩸🔪",
          "options": { "a": "Caim e Abel" },
          "correct": "a",
          "hint": "O primeiro assassinato, inveja e sacrifício"
        },
        {
          "question": "🌧️🌊🛶🐘🦒🐅🕊️🌈",
          "options": { "a": "A Arca de Noé" },
          "correct": "a",
          "hint": "O dilúvio, salvação da família de Noé e dos animais"
        },
        {
          "question": "🏗️ Babel 🗣️🤔",
          "options": { "a": "A Torre de Babel" },
          "correct": "a",
          "hint": "Tentativa de construir uma torre até o céu, confusão de línguas"
        },
        {
          "question": "👨‍👦🔪🐑🙏",
          "options": { "a": "Abraão e o Sacrifício de Isaque" },
          "correct": "a",
          "hint": "Fé e obediência de Abraão, provisão de Deus"
        },
        {
          "question": "🌈🧥💭🌾👑🌽👨‍👩‍👦‍👦",
          "options": { "a": "José e os Sonhos do Egito" },
          "correct": "a",
          "hint": "José tem sonhos, interpreta os sonhos do Faraó sobre as vacas e o trigo, administra o Egito durante a fome, e reencontra sua família"
        },
        {
          "question": "🔥🌳🗣️🙏",
          "options": { "a": "Moisés e a Sarça Ardente" },
          "correct": "a",
          "hint": "Deus chama Moisés para libertar o povo"
        },
        {
          "question": "🐸🩸🦟蝇🐄🔥🧊🦗 darkness 💀",
          "options": { "a": "As Dez Pragas do Egito" },
          "correct": "a",
          "hint": "Juízos de Deus sobre o Egito para libertar Israel"
        },
        {
          "question": "🌊🚶‍♂️🚶‍♀️🌊 Pharaoh 🐎🌊",
          "options": { "a": "Abertura do Mar Vermelho" },
          "correct": "a",
          "hint": "Deus abre o mar para o povo passar e fecha sobre os egípcios"
        },
        {
          "question": "⛰️📜🙏",
          "options": { "a": "Os Dez Mandamentos" },
          "correct": "a",
          "hint": "Deus entrega suas leis a Moisés no Monte Sinai"
        },
        {
          "question": "🐑🍶🎺⚔️💪",
          "options": { "a": "Gideão e o Exército Pequeno" },
          "correct": "a",
          "hint": "Vitória de Israel com poucos homens, fé em Deus"
        },
        {
          "question": "💪🦁🍯✂️😩",
          "options": { "a": "Sansão e Dalila" },
          "correct": "a",
          "hint": "Força de Sansão, fraqueza por Dalila, queda e redenção"
        },
        {
          "question": "👦🐑🪨 slingshot ⚔️巨人",
          "options": { "a": "Davi e Golias" },
          "correct": "a",
          "hint": "O jovem Davi derrota o gigante Golias com uma funda"
        },
        {
          "question": "👑 Solomon 👶⚖️💡",
          "options": { "a": "A Sabedoria de Salomão" },
          "correct": "a",
          "hint": "Salomão pede sabedoria a Deus, julgamento famoso"
        },
        {
          "question": "🔥 altar 🙏🌧️",
          "options": { "a": "Elias e os Profetas de Baal" },
          "correct": "a",
          "hint": "Confronto no Monte Carmelo, Deus envia fogo do céu"
        },
        {
          "question": "⛵️🌊🐳🙏🗣️",
          "options": { "a": "Jonas e a Baleia" },
          "correct": "a",
          "hint": "Jonas foge de Deus, é engolido por um grande peixe, se arrepende e prega"
        },
        {
          "question": "🦁 den 🙏😇",
          "options": { "a": "Daniel na Cova dos Leões" },
          "correct": "a",
          "hint": "Daniel é salvo dos leões por sua fé"
        },
        {
          "question": "🌟👶🐑 stable",
          "options": { "a": "Jesus Nasce" },
          "correct": "a",
          "hint": "O nascimento de Jesus em Belém"
        },
        {
          "question": "🌊🚶‍♂️⛵️🙏",
          "options": { "a": "Jesus Anda sobre as Águas" },
          "correct": "a",
          "hint": "Jesus caminha sobre o mar e Pedro tenta imitá-lo"
        },
        {
          "question": "🍞🐟 Crowd 🖐️✨",
          "options": { "a": "A Multiplicação dos Pães e Peixes" },
          "correct": "a",
          "hint": "Jesus alimenta milhares com poucos alimentos"
        },
        {
          "question": "🐖💰🏡😔➡️🎉🥳",
          "options": { "a": "A Parábola do Filho Pródigo" },
          "correct": "a",
          "hint": "Filho que gasta tudo, se arrepende e é recebido com festa pelo pai"
        },
        {
          "question": "🤕 Samaritan ❤️🩹🙏",
          "options": { "a": "A Parábola do Bom Samaritano" },
          "correct": "a",
          "hint": "Ajuda ao próximo, amor ao próximo sem preconceitos"
        },
        {
          "question": "👁️➡️✨🙏",
          "options": { "a": "Jesus Cura o Cego de Nascença" },
          "correct": "a",
          "hint": "Jesus restaura a visão de um homem cego de nascença"
        },
        {
          "question": "🪦 Lazarus 🗣️✨🙏",
          "options": { "a": "A Ressurreição de Lázaro" },
          "correct": "a",
          "hint": "Jesus ressuscita Lázaro dos mortos"
        },
        {
          "question": "🍷🍞 discípulos 🙏",
          "options": { "a": "A Última Ceia" },
          "correct": "a",
          "hint": "Jesus partilha a última refeição com seus discípulos"
        },
        {
          "question": "✝️👑💔😭",
          "options": { "a": "A Crucificação de Jesus" },
          "correct": "a",
          "hint": "Jesus morre na cruz por nossos pecados"
        },
        {
          "question": "🪦🌅😇✨🙌",
          "options": { "a": "A Ressurreição de Jesus" },
          "correct": "a",
          "hint": "Jesus ressuscita dos mortos ao terceiro dia"
        },
        {
          "question": "🔥🌬️🗣️🌎🙏",
          "options": { "a": "Pentecostes" },
          "correct": "a",
          "hint": "O Espírito Santo desce sobre os apóstolos, início da Igreja"
        }
      ]
    }
  ],
};

// Variável que irá armazenar os dados do quiz (carregados do localStorage ou padrão)
let quizData; // Será preenchida por loadGameData

// Variáveis de estado do jogo
let currentLevel = ""; // ID do nível de dificuldade atual (e.g., 'easy', 'medium', 'difficult')
let currentQuestionIndex = -1; // Índice da pergunta atual dentro do nível
// Objeto para rastrear quais perguntas foram respondidas em cada nível
// Ex: { easy: [0, 2], medium: [1] }
let answeredQuestions; // Será preenchida por loadGameData

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
const currentQuestionOptions = document.getElementById("current-question-options"); // Selecionado pela classe

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

// --- Funções de Animação ---
// As funções de animação (marioJump, spawnObstacle, startObstacleSpawning, showDarkScreen, hideDarkScreen)
// agora estão definidas em mario-animations.js e são acessadas globalmente.
// As referências aos elementos DOM para as animações serão inicializadas em initializeGame.

// --- Funções de Navegação e Lógica do Jogo ---

/**
 * Exibe uma tela específica e esconde as outras, e gerencia a visibilidade dos botões da toolbar.
 * @param {string} screenId O ID da tela a ser exibida.
 */
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");

  // Esconde a toolbar por padrão em todas as telas
  gameToolbar.classList.add("hidden");
  hintDialog.close(); // Garante que o diálogo da dica esteja fechado ao mudar de tela
  feedbackDialog.close(); // Garante que o diálogo de feedback esteja fechado ao mudar de tela
  hideDarkScreen(); // Garante que a tela escura esteja oculta ao mudar de tela principal

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
  showDarkScreen(); // Mostra a tela escura ao iniciar o carregamento da pergunta
  const selectedLevelObject = quizData.data.find(
      (level) => level.id === levelId
  );
  if (!selectedLevelObject) return;

  currentQuestionIndex = index;
  const qData = selectedLevelObject.questions[index]; // Dados da pergunta

  currentQuestionElement.textContent = qData.question; // Define o texto da pergunta

  // Aplica a fonte e o tamanho de fonte definidos em quizData
  if(quizData.font) { // Verifica se a propriedade font existe
    currentQuestionElement.style.fontFamily = quizData.font;
  }
  if(quizData.fontSize) { // Verifica se a propriedade fontSize existe
    currentQuestionElement.style.fontSize = quizData.fontSize;
  }

  // Preenche e reinicia os botões de opção
  optionButtons.forEach((button) => {
    const optionKey = button.dataset.option;
    // Verifica se a opção existe antes de tentar acessá-la
    if (qData.options[optionKey] !== undefined) {
      button.textContent = `${optionKey.toUpperCase()}) ${
          qData.options[optionKey]
      }`;
      button.classList.remove("selected", "correct-answer", "incorrect-answer"); // Limpa estilos anteriores
      button.disabled = false; // Habilita o botão
      button.onclick = () => selectOption(button);
      button.style.display = ''; // Garante que o botão esteja visível
    } else {
      button.style.display = 'none'; // Oculta o botão se não houver opção correspondente
    }
  });

  answerButtonToolbar.disabled = true; // Desabilita o botão de responder até uma opção ser selecionada
  hintButtonToolbar.classList.remove("hidden"); // Garante que o botão de dica apareça
  hintButtonToolbar.disabled = false; // Habilita o botão de dica

  // Pequeno atraso para o efeito de transição da tela escura
  setTimeout(() => {
    showScreen("question-display-screen"); // Exibe a tela da pergunta
    hideDarkScreen(); // Oculta a tela escura após o carregamento e a exibição da tela
  }, 300); // Ajuste este tempo conforme a duração da transição CSS da tela escura
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
  answerCheckButtonToolbar.disabled = false; // Habilita o botão "Marcar Correta"
  // Limpa feedback anterior e estilos de resposta
  optionButtons.forEach((button) => {
    button.classList.remove("correct-answer", "incorrect-answer");
  });
}

/**
 * Salva o progresso do jogo no localStorage.
 */
// A função saveGameProgress agora é importada de storage.js

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
    saveGameProgress(answeredQuestions); // Salva o progresso após uma resposta correta
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
 * Marca a resposta correta e fornece feedback.
 * Usado quando quizData.actions.showAwnserButtons é false.
 */
function checkCorrectAnswer() {
  // Encontra a opção correta diretamente
  const selectedLevelObject = quizData.data.find(
      (level) => level.id === currentLevel
  );
  if (!selectedLevelObject) return;

  const qData = selectedLevelObject.questions[currentQuestionIndex];
  const correctOptionKey = qData.correct;

  const correctButton = Array.from(optionButtons).find(
      (button) => button.dataset.option === correctOptionKey
  );

  if (!correctButton) {
    console.error("Botão da resposta correta não encontrado.");
    return;
  }

  // Simula a seleção da opção correta
  selectedOption = correctOptionKey;
  optionButtons.forEach((button) => button.classList.remove("selected"));
  correctButton.classList.add("selected");

  // Chama a função de verificação de resposta, que agora vai tratar como correta
  checkCorrect();
  saveGameProgress(answeredQuestions); // Salva o progresso após marcar a resposta correta

  // Desabilita os botões após a marcação
  optionButtons.forEach((button) => (button.disabled = true));
  answerButtonToolbar.disabled = true;
  answerCheckButtonToolbar.disabled = true;
  hintButtonToolbar.classList.add("hidden");
  hintDialog.close();
  feedbackDialog.showModal(); // Abre o diálogo de feedback
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

// Evento para o botão "Marcar Correta" na toolbar
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

  // Se a opção selecionada for nula, significa que a resposta foi correta e já foi tratada.
  // Se não for nula, significa que a resposta foi incorreta e precisamos reabilitar os botões.
  if (selectedOption !== null) {
    // Acessar quizData.data para encontrar o nível
    const selectedLevelObject = quizData.data.find(
        (level) => level.id === currentLevel
    );
    if (!selectedLevelObject) return;

    const qData = selectedLevelObject.questions[currentQuestionIndex];

    // Remove o estilo de incorreto e reabilita os botões para tentar novamente
    optionButtons.forEach((button) => {
      if (button.dataset.option === selectedOption) {
        button.classList.remove("incorrect-answer");
      }
      button.disabled = false;
      button.classList.remove("selected"); // Remove a seleção visual
    });
    answerButtonToolbar.disabled = false; // Reabilita o botão Responder
    answerCheckButtonToolbar.disabled = false; // Reabilita o botão Marcar Correta
    hintButtonToolbar.classList.remove("hidden"); // Mostra a dica novamente
    selectedOption = null; // Reseta a seleção após fechar o feedback de erro
  }
});

// Função para inicializar o jogo (dados do quiz e progresso)
function initializeGame() {
  // Carrega os dados do jogo do localStorage ou usa o padrão
  const loadedData = loadGameData(DEFAULT_QUIZ_DATA);
  quizData = loadedData.quizData;
  answeredQuestions = loadedData.answeredQuestions;

  // Aplica o tema ao body
  document.body.classList.add(quizData.theme + "-theme"); // Adiciona a classe do tema ao body

  // Preenche os títulos da tela inicial dinamicamente
  document.getElementById("start-screen").querySelector("h1").innerHTML =
      quizData.title;
  document.getElementById("start-screen").querySelector("h2").textContent =
      quizData.subtitle;

  // Inicializa as animações do Mario passando os elementos DOM
  const marioCharacterElement = document.getElementById("mario-character");
  const obstacleContainerElement = document.getElementById("obstacle-animation-container");
  const darkScreenElement = document.getElementById("dark-screen");
  initAnimations(marioCharacterElement, obstacleContainerElement, darkScreenElement);

  showScreen("start-screen");
  renderLevelSelectionButtons(); // Renderiza os botões de nível ao carregar a página
  startObstacleSpawning(); // Inicia a animação de obstáculos
  gameToolbar.classList.add("hidden"); // Garante que a toolbar esteja oculta inicialmente
}

// Carrega os dados do jogo quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", initializeGame);
