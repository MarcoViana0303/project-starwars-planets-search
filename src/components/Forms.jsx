import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Forms() {
  const { handleChange, name, comparison, valor, column, handleComparison,
    handleValue, handleColumn, handleButton,
    selectFilter, clickOrder, handleOrder } = useContext(myContext);
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
        {selectFilter.map((el) => (
          <option key={ el } value={ el }>{el}</option>
        ))}

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

      <label htmlFor="sort">
        Ordenar
        <select data-testid="column-sort" id="sort" onChange={ handleOrder }>

          {selectFilter.map((el) => (
            <option key={ el } value={ el }>{el}</option>
          ))}

        </select>
      </label>
      <label htmlFor="ASC">
        ASC
        <input
          type="radio"
          name="order"
          data-testid="column-sort-input-asc"
          value="ASC"
          id="ASC"
        />
        DESC
        <input
          type="radio"
          name="order"
          data-testid="column-sort-input-desc"
          value="ASC"
          id="DESC"
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ clickOrder }
      >
        Ordenar

      </button>

    </form>

  );
}

export default Forms;
