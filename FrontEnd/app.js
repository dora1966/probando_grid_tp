const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
    .then((response) => response.json())
    .then((data) => {
        const characters = data.results;
        console.log(characters)

        for (let character of characters) {
            console.log(character);
            $container.innerHTML += `
      <div class="option-name"> 
        <img class="tarjeta" src="${character.image}" alt="imagen de ${character.name}"> 
        <div class="info">
        <br>
        <br>
        <br>
        <br>
        <h3 class="nombre"> ${character.name} </h3>
        <h5 class="info-add"> Species: ${character.species} </h5>
        <br>
        <br>
        <h5 class="info-add"> Sex: ${character.gender} </h5>
        <br>
        <h5 class="info-add"> Live in: ${character.location.name} </h5>
        <br> 
        <h5 class="info-add"> Status: ${character.status}</h5>
        <br>
        <br>
        <br>
        </div>
        </div>
       `;
        }
    });

