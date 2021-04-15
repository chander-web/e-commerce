import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const Search = () => {

  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };
  return (
    <header className = "App-header" >
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus={true}
      />
    </header >
  );
};
export default Search;
