import spreadsheetReducer, { updateCell, undo, redo, clearCells } from './spreadsheetSlice';

describe('spreadsheetSlice reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      cells: Array(1000).fill(''),
      history: [],
      future: [],
    };
  });

  test('should handle updateCell', () => {
    const state = spreadsheetReducer(initialState, updateCell({ index: 0, value: 'Test' }));
    expect(state.cells[0]).toBe('Test');
    expect(state.history).toHaveLength(1);
    expect(state.future).toHaveLength(0);
  });

  test('should handle undo', () => {
    let state = spreadsheetReducer(initialState, updateCell({ index: 0, value: 'Test' }));
    state = spreadsheetReducer(state, undo());
    expect(state.cells[0]).toBe('');
    expect(state.history).toHaveLength(0);
    expect(state.future).toHaveLength(1);
  });

  test('should handle redo', () => {
    let state = spreadsheetReducer(initialState, updateCell({ index: 0, value: 'Test' }));
    state = spreadsheetReducer(state, undo());
    state = spreadsheetReducer(state, redo());
    expect(state.cells[0]).toBe('Test');
    expect(state.history).toHaveLength(1);
    expect(state.future).toHaveLength(0);
  });

  test('should handle clearCells', () => {
    let state = spreadsheetReducer(initialState, updateCell({ index: 0, value: 'Test' }));
    state = spreadsheetReducer(state, clearCells());
    expect(state.cells.every(cell => cell === '')).toBe(true);
    expect(state.history).toHaveLength(2);
    expect(state.future).toHaveLength(0);
  });
});
