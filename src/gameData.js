export const gameData = [
    // Fase 0: Introdução
    {
        text: "Você acorda em uma floresta misteriosa, sem lembrar como chegou ali. A única coisa que sabe é que precisa encontrar uma saída antes que algo ruim aconteça.",
        choices: [
            { text: "Começar sua Jornada", nextPhase: 1, loseLife: false, loseAllLives: false },
            { text: "Creditos", nextPhase: 34, loseLife: false, loseAllLives: false },
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Parte 1 - Floresta Escura
    // Fase 1: Floresta Escura
    {
        text: "Você entra na floresta escura. As árvores são altas e densas, bloqueando a luz do sol. Você ouve passos atrás de si.",
        choices: [
            { text: "Ir atentamente em direção a uma luz à frente", nextPhase: 2, loseLife: false, loseAllLives: false },
            { text: "Se esconder atrás de uma árvore", nextPhase: 3, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 2: Clareira com Estátua
    {
        text: "Você chega a uma clareira com uma estátua antiga. Ela segura um amuleto brilhante.",
        choices: [
            { text: "Pegar o amuleto", nextPhase: 4, loseLife: false, loseAllLives: false },
            { text: "Ignorar e seguir em frente", nextPhase: 5, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 3: Criatura e Mapa
    {
        text: "Você se esconde atrás de uma árvore e vê uma criatura passar. Ela deixa cair um mapa no chão.",
        choices: [
            { text: "Pegar o mapa", nextPhase: 6, loseLife: true, loseAllLives: false }, // Perde uma vida
            { text: "Continuar se escondendo", nextPhase: 7, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 4: Amuleto Brilhante
    {
        text: "O amuleto emite uma luz suave. Você sente que ele pode ser útil.",
        choices: [
            { text: "Usar o amuleto para iluminar o caminho", nextPhase: 8, loseLife: false, loseAllLives: false },
            { text: "Guardar o amuleto e seguir em frente", nextPhase: 9, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 5: Caminho Escuro
    {
        text: "Você continua andando, mas o caminho fica cada vez mais escuro.",
        choices: [
            { text: "Voltar para a estátua", nextPhase: 2, loseLife: false, loseAllLives: false },
            { text: "Continuar no escuro", nextPhase: 10, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 6: Criatura Percebe
    {
        text: "Ao tentar pegar o mapa, a criatura percebe sua presença e ataca!",
        choices: [
            { text: "Fugir e se esconder", nextPhase: 7, loseLife: true, loseAllLives: false }, // Perde uma vida
            { text: "Lutar", nextPhase: 11, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 7: Fim de Jogo (Criatura te Pega)
    {
        text: "Você respira aliviado e por um breve momento até consegue se esconder, porém não muito tempo depois você é pego de surpresa e sofre uma ferida letal. Fim de Jogo!",
        choices: [
            { text: "Jogar novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 8: Final Feliz (Amuleto)
    {
        text: "A luz do amuleto revela uma estrada que te leva até um riacho. Parabéns, você concluiu a primeira parte do desafio!",
        choices: [
            { text: "Continuar...", nextPhase: 14, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 9: Caminho Dividido
    {
        text: "Você guarda o amuleto e segue em frente. O caminho se divide em duas direções.",
        choices: [
            { text: "Seguir pela direita", nextPhase: 12, loseLife: false, loseAllLives: false },
            { text: "Seguir pela esquerda", nextPhase: 13, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 10: Barulho Bizarro
    {
        text: "Você continua andando, mas o caminho fica cada vez mais escuro até que você ouve um barulho bizarro.",
        choices: [
            { text: "Se esconder atrás de uma árvore", nextPhase: 3, loseLife: false, loseAllLives: false },
            { text: "Lutar", nextPhase: 11, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 11: Fim de Jogo (Luta Perdida)
    {
        text: "Você luta bravamente, mas a criatura é muito forte e você não consegue vencer. Fim de Jogo!",
        choices: [
            { text: "Jogar novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 12: Final Feliz (Caminho da Direita)
    {
        text: "Ao seguir pela direita, você encontra um caminho que curiosamente te leva para um riacho. Parabéns, você concluiu a primeira parte do desafio!",
        choices: [
            { text: "Continuar...", nextPhase: 14, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 13: Caminho da Esquerda
    {
        text: "Ao tentar seguir pela esquerda, que é escuro e assustador, você sente uma presença bizarra!",
        choices: [
            { text: "Fugir e se esconder", nextPhase: 7, loseLife: true, loseAllLives: false }, // Perde uma vida
            { text: "Lutar contra o que quer que seja", nextPhase: 11, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Parte 2 - A Travessia do Riacho
    // Fase 14: A travessia
    {
        text: "Você chega a um riacho e precisa atravessá-lo. A correnteza é forte e a água está gelada.",
        choices: [
            { text: "Procurar por uma ponte", nextPhase: 15, loseLife: false, loseAllLives: false },
            { text: "Atravessar nadando", nextPhase: 16, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 15: A travessia
    {
        text: "Você encontra uma ponte de pedra que não parece segura para atravessar. No entanto, você ouve um barulho estranho vindo de baixo... O que? Parece que tem algo preso na ponte!",
        choices: [
            { text: "Voltar e procurar outro caminho", nextPhase: 17, loseLife: false, loseAllLives: false },
            { text: "Examinar", nextPhase: 18, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 16: A travessia
    {
        text: "Você tenta nadar, mas a correnteza é forte e você é arrastado. Você se agarra a uma pedra e consegue se salvar.",
        choices: [
            { text: "Continuar pela margem", nextPhase: 19, loseLife: false, loseAllLives: false },
            { text: "Tentar atravessar novamente", nextPhase: 20, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 17: A travessia
    {
        text: "Você encontra uma ponte de madeira velha e instável. Ela range a cada passo que você dá.",
        choices: [
            { text: "Continuar pela ponte", nextPhase: 22, loseLife: true, loseAllLives: false }, // Perde uma vida
            { text: "Procurar por outra passagem", nextPhase: 20, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 18: A travessia
    {
        text: "Você encontra um barco abandonado na margem do riacho. Parece ser a melhor opção para atravessar.",
        choices: [
            { text: "Usar o barco", nextPhase: 23, loseLife: false, loseAllLives: false },
            { text: "Procurar por outra passagem", nextPhase: 24, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 19: A travessia
    {
        text: "Você segue pela margem do riacho e encontra uma trilha que parece levar a um vilarejo.",
        choices: [
            { text: "Seguir a trilha", nextPhase: 25, loseLife: false, loseAllLives: false },
            { text: "Procurar por outra passagem", nextPhase: 26, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 20: A travessia
    {
        text: "Sem alternativas você tenta nadar novamente, a correnteza é forte mas dessa vez você consegue se salvar, porém está exausto.",
        choices: [
            { text: "Descansar um pouco", nextPhase: 27, loseLife: false, loseAllLives: false },
            { text: "Continuar a jornada", nextPhase: 28, loseLife: true, loseAllLives: false } // Perde uma vida
        ]
    },

    // Fase 21: A travessia
    {
        text: "Você consegue atravessar com sucesso e chega a outra margem do riacho. Parabéns, você concluiu a segunda parte do desafio!",
        choices: [
            { text: "Continuar...", nextPhase: 29, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 22: A travessia
    {
        text: "A ponte desaba sob seus pés e você cai na água. A correnteza é forte e você é arrastado. Fim de Jogo!",
        choices: [
            { text: "Jogar novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 23: A travessia
    {
        text: "Você consegue atravessar o riacho com sucesso usando o barco. Parabéns, você concluiu a segunda parte do desafio!",
        choices: [
            { text: "Continuar...", nextPhase: 29, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 24: A travessia
    {
        text: "Você procura por outra passagem, mas não encontra nada. A noite cai e você se perde na floresta. Fim de Jogo!",
        choices: [
            { text: "Jogar novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 25: A travessia
    {
        text: "Você segue a trilha e chega a um vilarejo acolhedor estranho que abriga uma tribo de... canibais??! Eles te servem como jantar enquanto realizam seu ritual. Fim de Jogo!",
        choices: [
            { text: "Jogar Novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 26: A travessia
    {
        text: "Você procura por outra passagem, mas não encontra nada. A noite cai e você morre de fome. Fim de Jogo!",
        choices: [
            { text: "Jogar novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 27: A travessia
    {
        text: "Você descansa um pouco e se sente revigorado. Você continua a jornada com mais energia.",
        choices: [
            { text: "Levantar-se", nextPhase: 21, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 28: A travessia
    {
        text: "Você continua a jornada, mas está exausto e não consegue mais se mover. Você desmaia na margem do riacho. Fim de Jogo!",
        choices: [
            { text: "Jogar novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },

    // Parte 3 - O Enigma
    // Fase 29: O Enigma
    {
        text: "Já do outro lado do Riacho, você se depara com um grande portão de ferro. Há uma inscrição que diz: 'Apenas os sábios podem passar', ao chegar mais perto você se depara com um gigantesco guardião",
        choices: [
            { text: "Falar com o guardião", nextPhase: 30, loseLife: false, loseAllLives: false }
        ]
    },

    // Fase 30: O Enigma (será carregado dinamicamente)
// Fase 30: O Enigma Final (atualizado dinamicamente)
{
    text: "O guardião diz: 'Antes de passar você precisa responder o enigma final: [Pergunta em português]'",
    choices: [
        { text: "[Resposta certa]", nextPhase: 34, loseLife: false, loseAllLives: false }, // Leva à fase 34
        { text: "[Resposta errada 1]", nextPhase: 35, loseLife: true, loseAllLives: false }, // Leva à fase 35
        { text: "[Resposta errada 2]", nextPhase: 35, loseLife: true, loseAllLives: false }, // Leva à fase 35
        { text: "[Resposta errada 3]", nextPhase: 35, loseLife: true, loseAllLives: false }  // Leva à fase 35
    ]
},
 // Fase 31: Resposta Correta (Final do Jogo)
{
    text: "O guardião diz: 'Você é realmente uma pessoa que entende muito sobre a vida! Pode passar.' Assim você segue em frente e conclui a sua jornada.",
    choices: [
        { text: "Jogar Novamente", nextPhase: 0, loseLife: false, loseAllLives: false },
        { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
    ]
},

    // Fase 32: Resposta Errada (Punido)
    {
        text: "O guardião diz: 'Sua lógica é boa! Porém você não é digno de passar. Como punição para o seu erro, vou fazê-lo repetir todo o seu caminho de novo até que você acerte.' O guardião te leva novamente até o início da sua jornada. Fim de Jogo!",
        choices: [
            { text: "'O que? Você não faria iss-'", nextPhase: 1, loseLife: false, loseAllLives: true } // Perde todas as vidas
        ]
    },

    // Fase 33: Resposta Errada (Morte)
    {
        text: "O guardião diz: 'Sinceramente, você é tão burro que não merece passar e nem tentar novamente.' O guardião te rasga ao meio com sua espada. Fim de Jogo!",
        choices: [
            { text: "Jogar Novamente", nextPhase: 0, loseLife: false, loseAllLives: true }, // Perde todas as vidas
            { text: "Sair", nextPhase: -1, loseLife: false, loseAllLives: false }
        ]
    },
    // Fase 34: Creditos
// Adicione isso no final do array gameData
{
    text: `
        CRÉDITOS:
       
        DESENVOLVIDO POR:
        Luan Rocha da Silva - 24026633
        Caio Dantas Farias - 24026710
       
        ARTE: Leonardo.ai
        EFEITOS SONOROS: [Fontes]
       
        OBRIGADO POR JOGAR!
    `,
    choices: [
        { text: "Menu Principal", nextPhase: 0, loseLife: false },
        { text: "Sair", nextPhase: -1, loseLife: false }
    ]
}
];