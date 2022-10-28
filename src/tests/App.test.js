import React from 'react';
import { findByText, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mockData from './utils/mockData';


// Ajuda do Queones Queonias
describe('Testando se tudo na página está funcionando corretamente', () => {
    afterEach(() => jest.clearAllMocks())

    test('Verificando a rota e os elementos html', () => {
       render(<App />);
       const columnFilter = screen.getByTestId('column-filter');
       userEvent.selectOptions(columnFilter, 'orbital_period');
        
    
       
        expect(columnFilter).toHaveValue('orbital_period');
    
      
    });
    test('Verificando os selects', async () => {
     /* jest.spyOn(global, 'fetch');
     global.fetch.mockResolvedValue({
         json: jest.fn().mockResolvedValue(...mockData),
        })  */
     jest.spyOn(global, 'fetch').mockImplementation(async () => ({ json: async () => mockData }));
        render(<App />)
        const tatooine = await screen.findByText('Tatooine')
        expect(tatooine).toBeInTheDocument();

        const columnFilter = screen.getByTestId('column-filter');
        expect(columnFilter).toBeInTheDocument();
        userEvent.selectOptions(columnFilter, 'diameter')
        expect(columnFilter).toHaveValue('diameter')

        const comparisonFilter = screen.getByTestId('comparison-filter');
        expect(comparisonFilter).toBeInTheDocument();
        userEvent.selectOptions(comparisonFilter, 'igual a')
        expect(comparisonFilter).toHaveValue('igual a')
        
        const valueFilter = screen.getByTestId('value-filter');
        expect(valueFilter).toBeInTheDocument();
        userEvent.type(valueFilter, '7200');

        const nameFilter = screen.getByTestId('name-filter');
        userEvent.type(nameFilter,'Tatooine');

       const buttonFilter = screen.getByRole('button', {
            name: /filtrar/i
          })
          expect(buttonFilter).toBeInTheDocument();
          userEvent.click(buttonFilter);

        expect(tatooine).not.toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalled();
       expect(nameFilter).toBeInTheDocument() 
       expect(nameFilter).toHaveValue('Tatooine')
    });
    test('Testa menor que', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(async () => ({ json: async () => mockData }));

      render(<App />);
      const tatooine = await screen.findByText('Tatooine')
      expect(tatooine).toBeInTheDocument();

      const columnFilter = screen.getByTestId('column-filter');
      userEvent.selectOptions(columnFilter, 'diameter');

      const comparisonFilter = screen.getByTestId('comparison-filter');
      userEvent.selectOptions(comparisonFilter, 'menor que');

      const valueFilter = screen.getByTestId('value-filter');
      userEvent.type(valueFilter, '5000');

      const buttonFilter = screen.getByRole('button', {
        name: /filtrar/i
      })
      userEvent.click(buttonFilter);

      expect(tatooine).not.toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalled();
     

     
    });
    test('Testa maior que', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(async () => ({ json: async () => mockData }));

      render(<App />);
      const tatooine = await screen.findByText('Yavin IV')
      expect(tatooine).toBeInTheDocument();

      const columnFilter = screen.getByTestId('column-filter');
      userEvent.selectOptions(columnFilter, 'population');

      const comparisonFilter = screen.getByTestId('comparison-filter');
      userEvent.selectOptions(comparisonFilter, 'maior que');

      const valueFilter = screen.getByTestId('value-filter');
      userEvent.type(valueFilter, '5000');

      const buttonFilter = screen.getByRole('button', {
        name: /filtrar/i
      })
      userEvent.click(buttonFilter);

      expect(tatooine).not.toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalled();
     

     
    });
})
