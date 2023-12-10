import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/breakpoints';

export const SearchInputContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 40px;
  border: 1px #ced4da solid;
  border-radius: 100px;
  padding: 0 0.5rem;

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
    margin: 1rem;
  }
`;

export const SearchIconContainer = styled.div`
  font-size: 1.3rem;
`;

export const SearchInput = styled.input`
  margin-left: 1rem;
  width: 100%;
  height: 35px;
  border: none;
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
`;

export const ClearInput = styled.div`
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;
