import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Forms() {
  const { handleChange, name } = useContext(myContext);
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

    </form>

  );
}

export default Forms;
