import { aboutMessages } from './aboutMessages'

export const messages = {
  us: {
    empty: '',
    omen: 'Omen',
    clue: 'Clue',
    gate: 'Gate',
    surge: 'Surge',
    game_reckoning: 'Game Reckoning',
    player_reckoning: 'Player Reckoning',
    yellow_mythos: 'Yellow Mythos',
    green_mythos: 'Green Mythos',
    blue_mythos: 'Blue Mythos',
    empty_bag: 'Empty Bag',
    omen_description: `<span id="omen_description">Advance Omen by one (1)</span>`,
    clue_description: `
      <span id="clue_description">
        Spawn one (1) Clue and the active player has an Encounter they did not
        take this turn, if possible <br>
        
        <i>(standard order still applies: a player can't
        encounter other tokens/locations if there are monster tokens and can't
        encounter Epic monsters if there are regular monsters, on the same
        location)</i>
      </span>
    `,
    gate_description: `
      <span id="gate_description">
        Spawn one (1) Gate <i>(and one monster, as per core rules)</i>
      </span>
    `,
    surge_description: `
      <span id="surge_description">
      Resolve Monster Surge <br>
      
        <i> 
          (place one monster on every gate with a matching omen,
          if there are none spawn a gate, as per core rules)
        </i>
      </span>
    `,
    game_reckoning_description: `
      <span id="game_reckoning_description">
        Resolve Reckoning for all non_player elements 
      
        <i>(monsters, AO, Mythos cards)</i>
      </span>
    `,
    player_reckoning_description: `
      <span id="player_reckoning_description">
        The player with the Lead investigator token resolves Reckoning for all
        their player elements <i>(Possessions and Conditions)</i> then they pass the
        token to the <i>(first non-Eliminated)</i> player on the left
      </span>
    `,
    yellow_mythos_description: `
      <span id="yellow_mythos_description">
        Draw and resolve the effect of a Yellow Mythos card then return to the
        Chaos bag all previously drawn tokens indicated in the upper left corner
        of the card <i>(Omen, Player and Non_player Reckoning & Gate)</i>
      </span>
    `,
    green_mythos_description: `
      <span id="green_mythos_description">
        Draw and resolve the effect of a Green Mythos card then return to the
        Chaos bag all previously drawn tokens indicated in the upper left corner
        of the card <i>(Omen, Surge & Clue)</i>
      </span>
    `,
    blue_mythos_description: `
      <span id="blue_mythos_description">
        Draw and resolve the effect of a Blue Mythos card then return to the
        Chaos bag all previously drawn tokens indicated in the upper left corner
        of the card <i>(Clue)</i>
      </span>
    `,
    empty_bag_description: `
      <span id="empty_bag_description">
        The bag is empty, advance the omen by one(1)
      </span>
    `,
    one: 'One',
    two: 'Two',
    three: 'Three',
    four: 'Four',
    five: 'Five',
    six: 'Six',
    seven: 'Seven',
    eight: 'Eight',
    azathoth: 'Azathoth',
    cthulhu: 'Cthulhu',
    shub_niggurath: 'Shub-Niggurath',
    yog_sothot: 'Yog-Sothoth',
    yig: 'Yig',
    ithaqua: 'Ithaqua',
    elder_things: 'Rise of the Elder Things',
    syzygy: 'Syzygy',
    abhoth: 'Abhoth',
    nephren_ka: 'Nephren-Ka',
    hastur: 'Hastur',
    atlach_nacha: 'Atlach-Nacha',
    hypnos: 'Hypnos',
    shudde_mell: `Shudde M'ell`,
    antediluvium: 'Antediluvium',
    nyarlathotep: 'Nyarlathotep',
    new_game: 'New Game',
    continue: 'Continue',
    about: 'About',
    select_ao: 'Select an Ancient One',
    select_players: 'Select Number of Players',
    how_to_play: 'How to play',
    select_language: 'Select a Language',
    us: 'English',
    br: 'Portuguese',
    stage: 'Stage',
    overwrite_warning_1: 'This will overwrite previous save game.',
    overwrite_warning_2: 'Do you want to proceed?',
    yes: 'Yes',
    no: 'No',
    back_to_menu: 'Back to Menu',
    get_token: 'Get Token',
    reset_token: 'Reset Token Bag',
    endless_stage: 'Endless Stage!',
    description_header: 'DESCRIPTION',
    tokens_taken: 'TOKENS TAKEN',
    ...aboutMessages.en
  },
  br: {
    empty: '',
    omen: 'Presságio',
    clue: 'Pista',
    gate: 'Portal',
    surge: 'Invasão',
    game_reckoning: 'Acerto de Contas do Jogo',
    player_reckoning: 'Acerto de Contas do Jogador',
    yellow_mythos: 'Mito Amarelo',
    green_mythos: 'Mito Verde',
    blue_mythos: 'Mito Azul',
    empty_bag: 'Saco Vazio',
    omen_description: '<span id="omen_description">Avance o Presságio em um (1)</span>',
    clue_description: `
      <span id="clue_description">
        Faça aparecer uma (1) Pista e o jogador ativo realiza um Encontro que não realizou
        nesta rodada, se possível <br>
      
        <i>(a ordem padrão ainda se aplica:não é possível realizar encontros se houver monstros
        e não pode realizar encontros com Monstros Épicos se houverem monstros regulares, na mesmo
        local)</i>
      </span>
    `,
    gate_description: `
      <span id="gate_description">
        Faça aparecer um (1) Portal <i>(e um monstro, conforme as regras normais)</i>
      </span>
    `,
    surge_description: `
      <span id="surge_description">
        Resolva Invasão de Monstros <br>
        
        <i> 
          (coloque um monstro em cada Portal com um presságio correspondente,
          se não houver nenhum, faça aparecer um Portal, conforme as regras normais)
        </i>
      </span>
    `,
    game_reckoning_description: `
      <span id="game_reckoning_description">
        Resolva o Acerto de Contas para todos os elementos não pertencentes aos jogadores
        
        <i>(Monstros, Ancião, cartas de Mitos)</i>
      </span>
    `,
    player_reckoning_description: `
      <span id="player_reckoning_description">
        O jogador com o marcador de Investigador Principal resolve o Acerto de Contas para todos os
        elementos pertencentes a eles <i>(Posses e Condições)</i>, depois ele passa o
        marcado para o jogador <i>(primeiro não-eliminado)</i> à esquerda
      </span>
    `,
    yellow_mythos_description: `
      <span id="yellow_mythos_description">
        Compre e resolva o efeito de uma carta de Mitos Amarela e, em seguida,
        retorne ao Saco do Caos todos os marcadores previamente retirados,
        conforme indicado no canto superior esquerdo da carta
        <i>(Presságio, Acerto de Contas de Jogador e Não-jogador & Portal)</i>
      </span>
    `,
    green_mythos_description: `
      <span id="green_mythos_description">
        Compre e resolva o efeito de uma carta de Mitos Verde e, em seguida,
        retorne ao Saco do Caos todos os marcadores previamente retirados,
        conforme indicado no canto superior esquerdo da carta
        <i>(Presságio, Invasão de Monstros & Pista)</i>
      </span>
    `,
    blue_mythos_description: `
      <span id="blue_mythos_description">
        Compre e resolva o efeito de uma carta de Mitos Azul e, em seguida,
        retorne ao Saco do Caos todos os marcadores previamente retirados,
        conforme indicado no canto superior esquerdo da carta <i>(Pista)</i>
      </span>
    `,
    empty_bag_description: `
      <span id="empty_bag_description">
        O saco está vazio, avance o Presságio em um (1)
      </span>
    `,
    one: 'Um',
    two: 'Dois',
    three: 'Três',
    four: 'Quatro',
    five: 'Cinco',
    six: 'Seis',
    seven: 'Sete',
    eight: 'Oito',
    azathoth: 'Azathoth',
    cthulhu: 'Cthulhu',
    shub_niggurath: 'Shub-Niggurath',
    yog_sothot: 'Yog-Sothoth',
    yig: 'Yig',
    ithaqua: 'Ithaqua',
    elder_things: 'Ascensão das Criaturas Ancestrais',
    syzygy: 'Syzygy',
    abhoth: 'Abhoth',
    nephren_ka: 'Nephren-Ka',
    hastur: 'Hastur',
    atlach_nacha: 'Atlach-Nacha',
    hypnos: 'Hypnos',
    shudde_mell: `Shudde M'ell`,
    antediluvium: 'Antedilúvio',
    nyarlathotep: 'Nyarlathotep',
    new_game: 'Novo Jogo',
    continue: 'Continuar',
    about: 'Sobre',
    select_ao: 'Selecione um Ancião',
    select_players: 'Selecione o Número de Jogadores',
    how_to_play: 'Como Jogar',
    select_language: 'Selecione a Linguagem',
    us: 'Inglês',
    br: 'Português',
    stage: 'Etapa',
    overwrite_warning_1: 'Isto irá sobrescrever o jogo salvo anterior.',
    overwrite_warning_2: 'Deseja prosseguir?',
    yes: 'Sim',
    no: 'Não',
    back_to_menu: 'Voltar ao Menu',
    get_token: 'Obter Ficha',
    reset_token: 'Reiniciar Fichas',
    endless_stage: 'Etapa Infindável!',
    description_header: 'DESCRIÇÃO',
    tokens_taken: 'FICHAS RETIRADAS',
    ...aboutMessages.br
  }
}
