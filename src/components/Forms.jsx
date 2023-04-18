import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Forms() {
  const { handleChange, name, comparison, valor, column, handleComparison,
    handleValue, handleColumn, handleButton,
    selectFilter, clickOrder, handleOrder, setRadio } = useContext(myContext);
  return (
    <form className='form-input'>

      <img src={ require('../photos/star-wars-logo-3-1.png')} alt="Star Wars" className='starwars-logo'/>
      <label htmlFor="name">
        Digite o nome
        <input
          type="text"
          data-testid="name-filter"
          id="name"
          value={ name }
          onChange={ handleChange }
          className='form-element'
        />
      </label>

      <select
        data-testid="column-filter"
        name=""
        value={ column }
        onChange={ handleColumn }
        className='form-element'
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
        className='form-element'
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
        className='form-element'
      />
      <button
        type="button"
        onClick={ handleButton }
        data-testid="button-filter"
        className='form-element'
      >
        Filtrar

      </button>

      <label htmlFor="sort">
        Ordenar por:
        <select data-testid="column-sort" id="sort" onChange={ handleOrder }   className='form-element'>

          {selectFilter.map((el) => (
            <option key={ el } value={ el }>{el}</option>
          ))}

        </select>
      </label>
      <label htmlFor="ASC" className='label-radio'>
        ASC
        <input
          type="radio"
          name="order"
          data-testid="column-sort-input-asc"
          value="ASC"
          id="ASC"
          onChange={ (ev) => setRadio(ev.target.value) }
          className='form-element'
        />

        DESC
        <input
          type="radio"
          name="order"
          data-testid="column-sort-input-desc"
          value="DESC"
          id="DESC"
          className='form-element'
          onChange={ (ev) => setRadio(ev.target.value) }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ clickOrder }
        className='form-element'
      >
        Ordenar

      </button>

    </form>

  );
}

export default Forms;
