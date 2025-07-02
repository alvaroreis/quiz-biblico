// Este arquivo contém a variável DEFAULT_QUIZ_DATA, que será globalmente acessível.
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
                    "hint": "Tristeza, destruição de Jerusalêm"
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
