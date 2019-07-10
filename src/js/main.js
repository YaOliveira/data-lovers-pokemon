window.onload = function () {
  showPokemon(getPokemons());
};

function getPokemons() {
  return POKEMON["pokemon"];
}

function compareName(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function sortArrayByName(arrayOriginal) {
  return arrayOriginal.slice(0).sort(compareName);
}

let sortMenu = document.getElementById('sort-menu');
sortMenu.addEventListener('change', function (event) {
  if (event.target.value === 'a-z') {
    const ordenaredPokemon = sortArrayByName(getPokemons());
    showPokemon(ordenaredPokemon);
  
  } else if (event.target.value === 'z-a') {
    const orderReverse = sortArrayByName(getPokemons()).reverse();
    showPokemon(orderReverse);
  }
  else if (event.target.value === 'none-order') {
    const orderId = showPokemon(getPokemons());
    showPokemon(orderId);
  }
})

let orderTypes = document.getElementById('types-menu');
orderTypes.addEventListener('change', function orderType(event) {
  const pokeTypes = getPokemons().filter((pokemon) => {
    const temOTipo = pokemon.type.find((element) => {
      return (event.target.value === element)
    });
    if(temOTipo) {
      return pokemon
    } 
  });
  
  showPokemon(pokeTypes);
})

function showPokemon(anyArray) {
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = `
  ${anyArray.map((pokemon) => `
  <div class="pokemon-item">
      <img src="${pokemon["img"]}" class="pokemon-img" />
      <div class="text-name">
      <h3 class="pokemon-name">${pokemon["name"]}</h3>
      </div>
      <div class="text-number">
      <p>${pokemon["num"]}</p>
      </div>
  </div>
`).join("")}
    `
}