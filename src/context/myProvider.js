import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const responseAPI = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      results.forEach((el) => delete el.residents);
      setData(results);
    };
    responseAPI();
  }, []);

  const contexto = useMemo(() => ({
    data,
  }), [data]);

  return (
    <myContext.Provider value={ contexto }>
      { children }
    </myContext.Provider>

  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
