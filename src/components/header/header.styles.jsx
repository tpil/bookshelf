import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/breakpoints';

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;

  @media (max-width: ${breakpoints.phone}) {
      flex-direction: column;
    }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 142px;
`;

export const LogoSubtitle = styled.span`
  text-align: center;
  font-weight: 900;
  font-size: 1.5rem;
`;
