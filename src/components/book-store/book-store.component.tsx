import { Fragment, useContext } from 'react';
import { BooksContext } from '../../contexts/books.context';
import BookItem from '../book-item/book-item.component';
import { Book, BookImageFormats } from '../../types/book.types';
import { BookStoreList } from './book-store.styles';

const BookStore = () => {
  const { books  } = useContext(BooksContext);

  return (
    <Fragment>
      <BookStoreList>
        {books.length > 0 ? books.map((book: Book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            downloads={book.download_count}
            authors={book.authors}
            imagesrc={book.formats[BookImageFormats.jpeg]}
          />
        )) : <h4>Oops! Not any books found...</h4>}
      </BookStoreList>
    </Fragment>
  );
};

export default BookStore;
