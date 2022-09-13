import { inicialAMayuscula } from '../utils'
import { PropTypes } from 'prop-types'

export default function StatsPkmn({stats}){

  return(
    <table className={'tablaStats'}>
      <thead>
        <tr>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(s =>
          <tr key={s.stat.name}>
            <td>{s.stat.name.split('-').map(w => inicialAMayuscula(w)).join(' ')}</td>
            <td>{s.base_stat}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

StatsPkmn.propTypes = {
  stats: PropTypes.array
}
