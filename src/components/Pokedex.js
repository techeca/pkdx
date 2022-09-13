import { useState } from 'react'
import { PropTypes } from 'prop-types'
import { inicialAMayuscula } from '../utils'
import PokedexDetails from './PokedexDetails'

export default function Pokedex({gen}){
  const [mostrarPkmn, setMostrarPkmn] = useState(false)

  function showPkmnList(){
    setMostrarPkmn(!mostrarPkmn)
  }

  return(
    <>
      <h3 className='nombrePokedex' onClick={() => showPkmnList()}>{inicialAMayuscula(gen.name)}</h3>
      {mostrarPkmn && <PokedexDetails gen={gen.url} />}
    </>
  )
}

Pokedex.propTypes = {
  gen: PropTypes.object
}
