export function getAllPokedex(){
  return fetch('https://pokeapi.co/api/v2/pokedex').then(resp => resp.json())
}

export function getGenerationDetail(generacionUrl){
  return fetch(generacionUrl).then(respuesta => respuesta.json())
}
