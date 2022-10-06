* Change stream slots to "0" everywhere
  * rooms.ts
* Remove "sageru" wordfilter
  * static/scripts/main.js
* Remove Japan server
  * static/index.html

* Add custom characters, no secret characters
  * static/characters/
  * static/scripts/character.js
  * index.ts -> `const extension = characterId == "funkynaito" || characterId == "molgiko" ? "png" : "svg"`

* Update "maximumUsersPerIpPerArea" variable
  * index.ts

* Make character layout a grid: 
  * static/styles/main.css -> #character-selection
