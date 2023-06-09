import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Table() {
  const { name, data } = useContext(myContext);

  return (

    <table className='table-planet'>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>

        </tr>
      </thead>

      <tbody>

        { data.filter(
          (el) => (el.name.toUpperCase().includes(name.toUpperCase())),
        ).map((el) => (
          <tr key={ el.name }>
            <td data-testid="planet-name">
              {el.name}
            </td>
            <td>
              {el.rotation_period}
            </td>
            <td>
              {el.orbital_period}
            </td>
            <td>
              {el.diameter}
            </td>

            <td>
              {el.climate}
            </td>
            <td>
              {el.gravity}
            </td>
            <td>
              {el.terrain}
            </td>
            <td>
              {el.surface_water}
            </td>
            <td>
              {el.population}
            </td>
            <td>
              {el.films}
            </td>
            <td>
              {el.created}
            </td>
            <td>
              {el.edited}
            </td>
            <td>
              {el.url}
            </td>
          </tr>

        ))}

      </tbody>
    </table>

  );
}

export default Table;
