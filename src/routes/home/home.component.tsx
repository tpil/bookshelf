import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';
import BookStore from '../../components/book-store/book-store.component';

const Home = () => {
  return (
    <div>
      <Header />
      <BookStore />
      <Outlet />
    </div>
  );
};

export default Home;
