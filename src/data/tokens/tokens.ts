import { Token } from './token.types'

export const omenToken: Token = {
  name: 'Omen',
  description: `
    <span>Advance Omen by one (1)</span>
  `,
  icon: ''
}

export const clueToken: Token = {
  name: 'Clue',
  description: `
    <span>
      Spawn one (1) Clue and the active player has an Encounter they did not
      take this turn, if possible <br>
      
      <i>(standard order still applies: a player can't
      encounter other tokens/locations if there are monster tokens and can't
      encounter Epic monsters if there are regular monsters, on the same
      location)</i>
    </span>
  `,
  icon: ''
}

export const gateToken: Token = {
  name: 'Gate',
  description: `
    <span>
      Spawn one (1) Gate <i>(and one monster, as per core rules)</i>
    </span>
  `,
  icon: ''
}

export const surgeToken: Token = {
  name: 'Surge',
  description: `
    <span>
    Resolve Monster Surge <br>
    
      <i> 
        (place one monster on every gate with a matching omen,
        if there are none spawn a gate, as per core rules)
      </i>
    </span>
  `,
  icon: ''
}

export const gameReckoningToken: Token = {
  name: 'Game Reckoning',
  description: `
    <span>
      Resolve Reckoning for all non-player elements 
    
      <i>(monsters, AO, Mythos cards)</i>
    </span>
  `,
  icon: ''
}

export const playerReckoningToken: Token = {
  name: 'Player Reckoning',
  description: `
    <span>
      The player with the Lead investigator token resolves Reckoning for all
      their player elements <i>(Possessions and Conditions)</i> then they pass the
      token to the <i>(first non-Eliminated)</i> player on the left
    </span>
  `,
  icon: ''
}

export const yellowToken: Token = {
  name: 'Yellow Mythos',
  description: `
    <span>
      Draw and resolve the effect of a Yellow Mythos card then return to the
      Chaos bag all previously drawn tokens indicated in the upper left corner
      of the card <i>(Omen, Player and Non-player Reckoning & Gate)</i>
    </span>
  `,
  icon: ''
}

export const greenToken: Token = {
  name: 'Green Mythos',
  description: `
    <span>
      Draw and resolve the effect of a Green Mythos card then return to the
      Chaos bag all previously drawn tokens indicated in the upper left corner
      of the card <i>(Omen, Surge & Clue)</i>
    </span>
  `,
  icon: ''
}

export const blueToken: Token = {
  name: 'Blue Mythos',
  description: `
    <span>
      Draw and resolve the effect of a Blue Mythos card then return to the
      Chaos bag all previously drawn tokens indicated in the upper left corner
      of the card <i>(Clue)</i>
    </span>
  `,
  icon: ''
}
