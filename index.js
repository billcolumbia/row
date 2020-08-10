import { Dots } from './tiles/dots.js'
import { Bamboo } from './tiles/bamboo.js'
import { Characters } from './tiles/characters.js'
import { Winds } from './tiles/winds.js'
import { Dragons } from './tiles/dragons.js'
import { Flowers } from './tiles/flowers.js'
import { Seasons } from './tiles/seasons.js'

const ALL_TILES = [
  ...Dots,
  ...Dots,
  ...Dots,
  ...Dots,
  ...Bamboo,
  ...Bamboo,
  ...Bamboo,
  ...Bamboo,
  ...Characters,
  ...Characters,
  ...Characters,
  ...Characters,
  ...Winds,
  ...Winds,
  ...Winds,
  ...Winds,
  ...Dragons,
  ...Dragons,
  ...Dragons,
  ...Dragons,
  ...Flowers,
  ...Seasons
]

// console.log(ALL_TILES.length, ALL_TILES)
const BAMBOO = '🀐'
const CHARACTER = '🀇'
const DOT = '🀙'
let tileMarkup = ''

for (let i = 0; i < ALL_TILES.length; i++) {
  const type = ALL_TILES[i].type
  const value = ALL_TILES[i].value || null
  let name = ALL_TILES[i].name
  if (type === 'Bamboo') name = BAMBOO
  else if (type === 'Character') name = CHARACTER
  else if (type === 'Dot') name = DOT

  tileMarkup +=
`<div class="Tile ${type}">
  <span class="Tile__Name">${name}</span>
  ${value ? `<span class="Tile__Value">${value}</span>` : ''}
</div>`
}
const main = document.createElement('section')
main.innerHTML = tileMarkup
document.body.appendChild(main)