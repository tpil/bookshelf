import Header from '../../components/header/header.component';
import BookStore from '../../components/book-store/book-store.component';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <BookStore />
    </Fragment>
  );
};

export default Home;
