import React from 'react';
import useFilterName from './useFilterName';

const NameComponent = () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  const targetName = 'Bob';
  
  const filteredName = useFilterName(names, targetName);

  return (
    <div>
      {filteredName ? (
        <p>The name found is: {filteredName}</p>
      ) : (
        <p>Name not found</p>
      )}
    </div>
  );
};

export default NameComponent;