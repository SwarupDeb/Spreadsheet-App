import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SearchFilter from '../components/SearchFilter';
import spreadsheetReducer from '../redux/spreadsheetSlice';

describe('SearchFilter Component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { spreadsheet: spreadsheetReducer } });
  });

  test('should dispatch undo action when Undo button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchFilter />
      </Provider>
    );

    fireEvent.click(getByText('Undo'));
    expect(store.getState().spreadsheet.future).toHaveLength(1);
  });

  test('should dispatch redo action when Redo button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchFilter />
      </Provider>
    );

    fireEvent.click(getByText('Redo'));
    expect(store.getState().spreadsheet.history).toHaveLength(0);
  });

  test('should dispatch clearCells action when Clear button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchFilter />
      </Provider>
    );

    fireEvent.click(getByText('Clear'));
    expect(store.getState().spreadsheet.cells.every(cell => cell === '')).toBe(true);
  });
});
