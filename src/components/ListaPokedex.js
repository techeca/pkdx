import { useState, useEffect } from 'react'
import { getAllPokedex } from '../services/pokedexData'
import Pokedex from './Pokedex'

export default function ListaPokedex(){
  const [generaciones, setGeneraciones] = useState(null)

  function cargarContenido(){
    getAllPokedex()
      .then(respuesta => setGeneraciones(respuesta.results))
      .catch((err) => {console.error(err)})
  }

  useEffect(() => {
    cargarContenido()
  }, [])

  return(
    generaciones ? generaciones.map(gen =>
      <Pokedex key={gen.name} gen={gen} />
    ) : <>Loading</>
  )
}
