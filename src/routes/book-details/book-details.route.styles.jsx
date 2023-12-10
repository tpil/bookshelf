import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/breakpoints';
import { NoImage } from '../../components/shared/no-image/no-image.component';

export const BookDetailsRouteHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;
export const BookDetailsButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  color: white;
  background-color: rgba(20, 41, 90, 1);
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  max-width: 200px;

  &:hover {
    background-color: rgba(20, 41, 90, 0.8);
    cursor: pointer;
  }
`;

export const BookDetailsContainer = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.phone}) {
    flex-direction: column;
  }
`;

export const BookTitle = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 0;
`;

export const BookAuthors = styled.div`
  margin-bottom: 1rem;
`;
export const BookImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 200px;
  }
`;

export const BookDetails = styled.div`
  margin: 0 1rem;
`;
