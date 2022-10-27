import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

const arrayOption = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('0');
  const [allFilter, setAllFilter] = useState([]);
  const [filtrando, setFiltrando] = useState(false);
  const [selectFilter, setSelectFilter] = useState(arrayOption);
  const [column, setColumn] = useState(selectFilter[0]);
  const [order, setOrder] = useState(selectFilter[0]);

  useEffect(() => {
    const responseAPI = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      results.forEach((el) => delete el.residents);
      setData(results);
    };
    responseAPI();
  }, []);

  const filteringData = () => {
    allFilter.forEach(({ comparison: comp, column: col, valor: val }) => {
      switch (comp) {
      case 'maior que':
        return setData(data.filter((el) => Number(el[col]) > Number(val)));

      case 'menor que':
        return setData(data.filter((el) => Number(el[col]) < Number(val)));

      default:
        return setData(data.filter((el) => Number(el[col]) === Number(val)));
      }
    });
  };

  useEffect(() => {
    if (filtrando === true) {
      filteringData();
      setFiltrando(false);
    }
  }, [allFilter, filtrando, filteringData]);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleColumn = ({ target: { value } }) => {
    setColumn(value);
  };

  const handleComparison = ({ target: { value } }) => {
    setComparison(value);
  };

  const handleValue = ({ target: { value } }) => {
    setValor(value);
  };

  const handleOrder = ({ target: { value } }) => {
    setOrder(value);
  };

  const handleButton = () => {
    setAllFilter([...allFilter, { column, comparison, valor }]);
    setFiltrando(true);
    const newFilter = selectFilter.filter((el) => column !== el);
    setSelectFilter(newFilter);
    setColumn(newFilter[0]);
  };

  const clickOrder = () => {
    /* console.log('botão funcionando');
    const example = arrayOption.sort();
    console.log(example); */
  /*   const magicNumber = -1;
    const example = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return magicNumber;
      }

      return 0;
    }); */
    console.log(example);
  };

  const contexto = useMemo(() => ({
    data,
    name,
    valor,
    column,
    comparison,
    handleChange,
    handleValue,
    handleColumn,
    handleComparison,
    handleButton,
    clickOrder,
    allFilter,
    selectFilter,
    order,
    handleOrder,
  }), [data, name, valor, column, comparison,
    handleChange, handleValue, handleColumn, handleComparison,
    handleButton, clickOrder, allFilter, selectFilter, order,
    handleOrder]);

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
