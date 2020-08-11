<script>
  import { shuffled } from './tiles/shuffle.js'
  import { ALL_TILES } from './tiles/index.js'

  const name = 'ok'
  const INSTANCE = shuffled(ALL_TILES)
  console.log(INSTANCE)
</script>

<section>
  {name}!
</section>

UI
---
Create a room [ui]
create a room [server]
send user to room with ID [server]
update UI to room[ID] [ui]
add username [ui]
update username [server]
wait for 4 players (connections) [ui + server]


Server
---
Shuffle Tiles
Assign winds (each player rolls dice)
Deal tiles (13 each)
Check for Flowers/Seasons
  - for those with flowers (starting with east wind) pull from end of wall
Start turns
