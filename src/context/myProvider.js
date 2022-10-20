import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const responseAPI = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      results.forEach((el) => delete el.residents);
      setData(results);
    };
    responseAPI();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const contexto = useMemo(() => ({
    data,
    name,
    handleChange,
  }), [data, name, handleChange]);

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
