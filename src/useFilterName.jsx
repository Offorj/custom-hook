import { useState, useEffect } from 'react';

function useFilterName(names, targetName) {
  const [filteredName, setFilteredName] = useState(null);

  useEffect(() => {
    const result = names.filter(name => name === targetName);
    setFilteredName(result.length > 0 ? result[0] : null);
  }, [names, targetName]);

  return filteredName;
}

export default useFilterName;