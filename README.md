# **Spreadsheet Application**

A web-based spreadsheet application built using React, Redux Toolkit, and Tailwind CSS. This application mimics the functionality of a typical spreadsheet, allowing users to edit cells, search, undo/redo actions, and save or export the spreadsheet in `.xlsx` format.

## **Table of Contents**

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## **Features**

- **Editable Grid:** Edit cells directly within the grid.
- **Undo/Redo:** Easily undo or redo changes.
- **Search:** Search for content within the cells.
- **Clear Cells:** Clear the entire grid with a single click.
- **Pagination:** Navigate through large grids with pagination controls.
- **File Operations:** Import or download the spreadsheet in `.xlsx` format.
- **State Management:** Uses Redux for managing application state with undo/redo capabilities.
- **Data Persistence:** Save the spreadsheet data as cookies in the browser.

## **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/spreadsheet-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd spreadsheet-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## **Usage**

1. **Editing Cells:**
   - Click on any cell to edit its content. Press `Enter` or click outside the cell to save the changes.

2. **Undo/Redo:**
   - Use the `Undo` and `Redo` buttons to revert or reapply changes.

3. **Search:**
   - Enter a search query in the search bar and press `Search`. Matching cells will be highlighted.

4. **Clear Cells:**
   - Click on the `Clear` button to reset all cells to an empty state.

5. **Pagination:**
   - Use the pagination controls at the bottom to navigate through different pages of the grid.

6. **File Operations:**
   - Hover over the `File` button to import a spreadsheet file or download the current spreadsheet in `.xlsx` format.
   - The `Save` option will save the spreadsheet data as cookies in the browser.

## **Running Tests**

To ensure the application is functioning correctly, run the unit and integration tests:

```bash
npm test
```

This will execute the tests using Jest and React Testing Library.

## **Folder Structure**

```
src/
│
├── components/
│   ├── Cell.js
│   ├── Grid.js
│   ├── Pagination.js
│   ├── SearchFilter.js
│   └── FileMenu.js
│
├── redux/
│   ├── spreadsheetSlice.js
│   ├── store.js
│   └── __tests__/
│       ├── spreadsheetSlice.test.js
│       └── SearchFilter.test.js
│
├── App.js
├── index.js
├── App.css
└── index.css
```

- **components:** Contains the React components used in the application.
- **redux:** Contains the Redux slice and store configuration. Test files for Redux slices are also located here.
- **__tests__:** Contains unit and integration tests.

## **Contributing**

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have feature suggestions.

### **Steps to Contribute:**

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

---
