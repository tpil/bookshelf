import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/breakpoints';
import {NoImageContainer} from "../shared/no-image/no-image.styles"

export const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #ced4da solid;
  border-radius: 10px;
  width: 200px;
  background-color: #f7f7f7;
  margin: 10px;
  font-size: 0.9rem;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.phone}) {
    width: 150px;
  }
`;

export const BookItemContainer = styled.div`
  margin: 0 auto;
  img {
    width: 200px;
    height: 300px;
    border-radius: 10px 10px 0 0;

    @media (max-width: ${breakpoints.phone}) {
      width: 100px;
      height: 150px;
      border-radius: 0;
    }
  }
`;
export const BookTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;
`;

export const BookDetails = styled.div`
  padding: 0 0.5rem 0.5rem;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export const BookStats = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MissingImage = styled(NoImageContainer)`
    border-radius: 10px 10px 0 0;
   
   &:after {
    width: 100%;
    content: "no image available";
    text-align: center;
   }

    @media (max-width: ${breakpoints.phone}) {
      width: 100px;
      height: 150px;
      border-radius: 0;
    }
`;
