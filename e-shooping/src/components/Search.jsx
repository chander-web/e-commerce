import { ReactComponent as IconSearch } from 'bootstrap-icons/icons/search.svg';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const SearchResults = ({suggestion, selectedValue}) => {

  const suggestionEvent = (e) => {
    selectedValue(e.currentTarget.innerText);
  };

  
  return (
    <ul className="search-results">
      {suggestion &&
        suggestion.map((item) => 
          (<li key={item.name} onClick= {suggestionEvent}>
            {item.name}
          </li>)
        )}
    </ul>
  );
};

const Search = ({ searchKeyWord, items, searhBtnTriggered }) => {
  const [status, setAutocompletStatus] = useState(true);
  const [searchValue, setSearchValue] = useState(null);

  const handleOnSearch = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchValue(value);
      setAutocompletStatus(true);
      searchKeyWord(value);
    } else {
      setAutocompletStatus(false);
    }
  };
  

  const selectedValue = (v) => {
    setSearchValue(v);

    document.getElementById('search').value = v;
    setAutocompletStatus(false);
  };

  const searchEvent = () => {
    searhBtnTriggered(searchValue);
  };

  
  return (
    <div className="input-group">
      <input autoComplete="off"
        type="text"
        id="search"
        className="form-control"
        placeholder="Search"
        onKeyUp={handleOnSearch}
      />
      <label className="visually-hidden" htmlFor="search" />
      <button
        className="btn btn-primary text-white"
        type="submit"
        aria-label="Search"
        onClick={searchEvent}
      >
        <IconSearch />
      </button>
      { status && 
      <SearchResults 
        suggestion={items}
        selectedValue={selectedValue}
      />
      }
    </div>
  );
};

Search.propTypes = {
  searchKeyWord: PropTypes.func,
  searhBtnTriggered: PropTypes.func,
  suggestion: PropTypes.instanceOf(Array),
  selectedValue: PropTypes.func,
  items: PropTypes.array
};

export default Search;
