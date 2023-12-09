import {SearchInputContainer, SearchIconContainer, SearchInput, SearchButton} from './search-input-field.styles';

const SearchInputField = () => {
  return (
    <SearchInputContainer>
      <SearchIconContainer>
        <i className="fa fa-search" aria-hidden="true"></i>
      </SearchIconContainer>
      <SearchInput type="text" placeholder="search books" />
      <SearchButton>
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </SearchButton>
    </SearchInputContainer>
  );
};

export default SearchInputField;
