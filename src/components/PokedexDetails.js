import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { inicialAMayuscula } from '../utils'
import { getGenerationDetail } from '../services/pokedexData'
import DetallesPokemon from './DetallesPokemon'

export default function PokedexDetails({gen}){
  const [detallesGeneracion, setDetallesGeneracion] = useState(null)
  const [mostrarDetallesPkmn, setMostrarDetallesPkmn] = useState('')

  function cargarContenido(u){
    getGenerationDetail(u)
      .then(respuesta => setDetallesGeneracion(respuesta))
      .catch((err) => {console.error(err)})
  }
  function mostrarDetalles(pkmn){
    if(mostrarDetallesPkmn === pkmn){
      setMostrarDetallesPkmn('')
    }else {
      setMostrarDetallesPkmn(pkmn)
    }
  }

  useEffect(() => {
    cargarContenido(gen)
  }, [gen])

  return(
    detallesGeneracion ? detallesGeneracion.pokemon_entries.map(pkmn =>
      <div key={pkmn.entry_number}>
        <h4 onClick={() => mostrarDetalles(pkmn.pokemon_species.name)} className='nombrePokemon'>{inicialAMayuscula(pkmn.pokemon_species.name)}</h4>
        {mostrarDetallesPkmn === pkmn.pokemon_species.name && <DetallesPokemon pkmn={pkmn} />}
      </div>
    ) : <>Loading</>
  )
}

PokedexDetails.propTypes = {
  gen: PropTypes.string
}
