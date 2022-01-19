fetch('https://pokeapi.co/api/v2/pokemon/521/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p>  Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p> Altura: ${pokemon.height}<p><p> Peso: ${pokemon.weight}<p> Base Exp: ${pokemon.base_experience}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))


fetch('https://pokeapi.co/api/v2/pokemon/778/')
.then(respuesta => respuesta.json())
.then(pokemon1 => {
  let element = document.getElementById('elemento2')
  element.innerHTML = `<p> Nombre: ${pokemon1.name}<p>
  <img src='${pokemon1.sprites.front_default}'><p>Altura:  ${pokemon1.height}<p><p> Peso: ${pokemon1.weight}<p><p> Base Exp: ${pokemon1.base_experience}<p>`;
  console.log(pokemon1)
})
.catch(err=>console.log(err))



fetch('https://pokeapi.co/api/v2/pokemon/162/')
.then(respuesta => respuesta.json())
.then(pokemon2 => {
  let element = document.getElementById('elemento3')
  element.innerHTML = `<p> Nombre: ${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>Altura:  ${pokemon2.height}<p><p> Peso: ${pokemon2.weight}<p><p> Base Exp: ${pokemon2.base_experience}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))