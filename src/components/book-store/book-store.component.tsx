import { ChangeEvent, Fragment, useContext, useState } from 'react';
import { BooksContext } from '../../contexts/books.context';
import BookItem from '../book-item/book-item.component';
import { Book, BookImageFormats } from '../../types/book.types';
import { BookStoreList } from './book-store.styles';
import { Pagination } from '@mui/material';

const BookStore = () => {
  const { books, booksCount, changeResultsPage } = useContext(BooksContext);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(booksCount / 32);

  const changePageHandler = (event: ChangeEvent<any>, newPage: number) => {
    setCurrentPage(newPage);
    changeResultsPage(newPage);
  };

  return (
    <Fragment>
      <BookStoreList>
        {books.length > 0 ? (
          books.map((book: Book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              downloads={book.download_count}
              authors={book.authors}
              imagesrc={book.formats[BookImageFormats.jpeg]}
            />
          ))
        ) : (
          <h4>Oops! Not any books found...</h4>
        )}
      </BookStoreList>
      {/* <PaginationContainer totalBooks={booksCount} booksPerPage={books.length}/> */}
      <Pagination
        count={pages}
        page={currentPage}
        onChange={changePageHandler}
      />
    </Fragment>
  );
};

export default BookStore;
