import React from 'react';
import { Header, HeaderConteiner, Input, SearchButton } from './searchBar.styled';

export const SearchBar = ({ searchEngine }) => {
  const submitRequest = e => {
    e.preventDefault();
    searchEngine(e.target.searchText.value);
  };

  return (
    <Header>
      <HeaderConteiner className='container'>
        <form onSubmit={e => submitRequest(e)} className="form">
          <SearchButton type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchButton>

          <Input
            className="input"
            name="searchText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </HeaderConteiner>
    </Header>
  );
};
