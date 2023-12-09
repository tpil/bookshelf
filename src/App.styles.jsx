import styled from 'styled-components';
import { breakpoints } from './assets/styles/breakpoints';

export const AppComponent = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 1.5rem;
  max-width: 1200px;


  @media (min-width: ${breakpoints.desktop}) {
    margin: 1.5rem auto;
  }
`;
