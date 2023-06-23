import React from 'react';
import DataGrid from './DataGrid';

const jsonData = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  // ...
];

const App = () => {
  return (
    <div>
      <DataGrid data={jsonData} />
    </div>
  );
};

export default App;
