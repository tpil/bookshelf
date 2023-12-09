import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import MorotechLogo from '../../assets/morotech_logo.png';
import SearchInputField from '../../components/search-input-field/search-input-field.component';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  LogoSubtitle,
} from './header.styles';

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={MorotechLogo} alt="morotech" />
          <LogoSubtitle>Bookshelf</LogoSubtitle>
        </LogoContainer>
        <SearchInputField />
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
