import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Forms() {
  const { handleChange, name, comparison, valor, column, handleComparison,
    handleValue, handleColumn, handleButton } = useContext(myContext);
  return (
    <form>
      <label htmlFor="name">
        Digite o nome
        <input
          type="text"
          data-testid="name-filter"
          id="name"
          value={ name }
          onChange={ handleChange }
        />
      </label>

      <select
        data-testid="column-filter"
        name=""
        value={ column }
        onChange={ handleColumn }
      >
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="population">population</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name=""
        value={ comparison }
        onChange={ handleComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        value={ valor }
        onChange={ handleValue }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleButton }
        data-testid="button-filter"
      >
        Filtrar

      </button>

    </form>

  );
}

export default Forms;
