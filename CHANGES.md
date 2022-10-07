* Change stream slots to "0" everywhere
  * rooms.ts
* Make Underground Town (basement) also forced anon
  * rooms.ts
* Remove "sageru" wordfilter
  * static/scripts/main.js
* Remove Japan server, change `<title>`
  * static/index.html
  * static/scripts/main.js
* Update "maximumUsersPerIpPerArea" variable
  * index.ts
* Make character layout a grid: 
  * static/styles/main.css -> #character-selection
* Add custom characters, no secret characters
  * static/characters/
  * static/scripts/character.js
  * index.ts -> `const extension = characterId == "funkynaito" || characterId == "molgiko" ? "png" : "svg"`
* Spawn in the train (densha) instead of admin_st
  * static/scripts/main.js
  * rooms.ts -> `worldSpawns: [{x: 1, y: 9, direction: "down", target: null}, ],`
