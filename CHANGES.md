* Change stream slots to "0" everywhere, but "10" to train
  * rooms.ts
* Make Underground Town (basement) also forced anon
  * rooms.ts
* Spawn in the train (densha) instead of admin_st
  * static/scripts/main.js
  * rooms.ts -> `worldSpawns: [{x: 1, y: 9, direction: "down", target: null}, ],`
* Remove "sageru" wordfilter
  * static/scripts/main.js
* Remove Japan server, change `<title>`
  * static/index.html
  * static/scripts/main.js
* Add custom characters, no secret characters
  * static/characters/
  * static/scripts/character.js
  * index.ts -> `const extension = characterId == "funkynaito" || characterId == "molgiko" ? "png" : "svg"`
* Saying `#bee` turns you into a bee:
  * index.ts
* Make character layout a grid: 
  * static/styles/main.css -> #character-selection
