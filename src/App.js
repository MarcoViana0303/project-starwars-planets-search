import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './context/myProvider';
import Forms from './components/Forms';

function App() {
  return (
    <MyProvider>
      <Forms />
      <Table />
    </MyProvider>
  );
}

export default App;
