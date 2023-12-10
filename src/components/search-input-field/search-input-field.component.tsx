import { ChangeEvent, useContext, useEffect, useState } from 'react';
import {
  SearchInputContainer,
  SearchIconContainer,
  SearchInput,
  ClearInput,
} from './search-input-field.styles';
import { BooksContext } from '../../contexts/books.context';

const SearchInputField = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchDebouncedValue, setSearchDebouncedValue] = useState('');
  const { searchBooks } = useContext(BooksContext);

  const changeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearTextHanlder = () => {
    setSearchValue('');
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchValue !== searchDebouncedValue) {
        setSearchDebouncedValue(searchValue);
      } else {
        //console.log('run search');
        searchBooks(searchDebouncedValue);
      }
    }, 800);

    return () => clearTimeout(timeOut);
  }, [searchValue, searchDebouncedValue]);

  return (
    <SearchInputContainer>
      <SearchIconContainer>
        <i className="fa fa-search" aria-hidden="true"></i>
      </SearchIconContainer>
      <SearchInput
        type="text"
        placeholder="search books"
        value={searchValue}
        onChange={changeHanlder}
      />
      <ClearInput onClick={clearTextHanlder}>
        <i className="fas fa-times-circle"></i>
      </ClearInput>
    </SearchInputContainer>
  );
};

export default SearchInputField;
