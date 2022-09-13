import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import TypesPkmn from './TypesPkmn'
import StatsPkmn from './StatsPkmn'
import { getPokemonDetail } from '../services/pokemonData'

export default function DetallesPokemon({pkmn}){
  const url = pkmn.pokemon_species.url.replace('pokemon-species', 'pokemon')    //en pokemon-species está la descripcion
  const [pkmnDetail, setPkmnDetail] = useState(null)

  function cargarDetallesPkmn(u){
    getPokemonDetail(u)
      .then(pkmnDet => setPkmnDetail(pkmnDet))
      .catch((err) => {console.error(err)})
  }

  useEffect(() => {
    cargarDetallesPkmn(url)
  }, [url])

  return(
    pkmnDetail ?
      <>
        <h4>{pkmnDetail.id}</h4>
        <img alt='loading' src={pkmnDetail.sprites.front_default} />
        <TypesPkmn types={pkmnDetail.types} />
        <StatsPkmn stats={pkmnDetail.stats} />
      </>
      :
      <>Loading</>
  )
}

DetallesPokemon.propTypes = {
  pkmn: PropTypes.object
}
