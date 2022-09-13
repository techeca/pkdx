import { inicialAMayuscula } from '../utils'
import { PropTypes } from 'prop-types'

export default function TypesPkmn({types}){

  return(
    <table>
      <thead>
        <tr>
          <th>Types</th>
        </tr>
      </thead>
      <tbody>
        {types.map(t =>
          <tr key={t.type.name}>
            <td>{inicialAMayuscula(t.type.name)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

TypesPkmn.propTypes = {
  types: PropTypes.array
}
