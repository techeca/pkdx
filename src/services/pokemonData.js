export function getPokemonDetail(pkmnUrl){
  return fetch(pkmnUrl).then(respuesta => respuesta.json())
}
