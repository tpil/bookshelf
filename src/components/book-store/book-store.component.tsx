import { useContext } from 'react';
import { BooksContext } from '../../contexts/books.context';

const BookStore = () => {
  const { books } = useContext(BooksContext);
  console.log('bookstore:', books);
  return (
    <div>
      <p>Book Store</p>
    </div>
  );
};

export default BookStore;
