window.onload = function () {
  showPokemons(getPokemons() _ARRAYORIGINAL_);
};

function getPokemons() {
  arrayResult=POKEMON["pokemon"];
  return arrayResult;
}

function getPokemonsOrdered() {
  arrayResult = POKEMON["pokemon"];
  return arrayResult;
}

function getPokemonsOrderedReverse() {
  arrayResult = POKEMON["pokemon"];
  return arrayResult;
}

function arrayQualquer() {
  arrayResult = POKEMON["pokemon"];
  if window.onload{
    getPokemons(){
  };
}
  else if (event.target.value === 'a-z')
  getPokemonsOrdered(){

  }
} else  (event.target.value === 'z-a'){
  getPokemonsOrderedReverse(){

  }
} showPokemons();


let arrayResult = [];

function showPokemons(arrayQualquer) {
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = `
  ${arrayQualquer.map((pokemon) => `
  <div class="pokemon-item">
      <img src="${pokemon["img"]}" class="pokemon-img" />
      <div class="text-name">
      <h3 class="pokemon-name">${pokemon["name"]}</h3>
      </div>
      <div class="text-number">
      <p>${pokemon["num"]}</p>
      </div>
  </div>
`)
    }`
}

function sortByName(arrayRecebida) {
  arrayResult = arrayResult.sort(function(a,b){
    let nameAtual = a.name.toLowerCase();
    let namePosterior = b.name.toLowerCase();
    if (nameAtual < namePosterior){
      return -1;
    }
    if (nameAtual > namePosterior){
      return 1
    }
    return 0;
  })
  showPokemons(ARRAYORDENADA)
};

function myFunction() {
  cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}


 
document.getElementById("ordination").addEventListener('change', function (event) {
  if (event.target.value === 'a-z') {
    sortByName();
  } else if (event.target.value === 'z-a') {
    showPokemons(arrayResult.sortByName.reverse());
  } else {
    sortByName(arraySeiLaDaonde);
  }
})

