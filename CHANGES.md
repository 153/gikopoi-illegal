* Change stream slots to "0" everywhere, but "10" to train, and 5 to bad end
  * rooms.ts
* Hide "select stream" box
  * index.html
* Make Underground Town (basement) and Bad End also forced anon
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
* Added `#train` and `#die` commands: [for more details](die-command-patch.ts)
* Added `#afk` / `afk` commands
* Changed login-footer to appear in static and updated index.ts code that loads login-footer. 
