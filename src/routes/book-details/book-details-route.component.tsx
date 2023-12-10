import { MouseEvent, useContext, useEffect } from 'react';
import { BooksContext } from '../../contexts/books.context';
import { useNavigate, useParams } from 'react-router-dom';
import { Authors, BookImageFormats } from '../../types/book.types';
import LazyImage from '../../components/shared/lazy-image/lazy-image.component';
import {
  BookDetailsRouteHeader,
  BookDetailsContainer,
  BookImageContainer,
  BookDetails,
  BookTitle,
  BookAuthors,
  BookDetailsButton,
} from './book-details.route.styles';
import NoImage from '../../components/shared/no-image/no-image.component';
import SetFavoriteBook from '../../components/set-favorite-book/set-favorite-book.component';

const BookDetailsRoute = () => {
  const { getBookById, selectedBook } = useContext(BooksContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const returnToHomeHandler = (event: MouseEvent<HTMLButtonElement>) => {
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      getBookById(+id!);
    }
  }, [id]);

  return (
    <div>
      <BookDetailsRouteHeader>
        <BookDetailsButton onClick={returnToHomeHandler}>
          <i className="fa-solid fa-chevron-left"></i> Back
        </BookDetailsButton>
      </BookDetailsRouteHeader>
      {selectedBook?.title ? (
        <BookDetailsContainer>
          <BookImageContainer>
            {BookImageFormats.jpeg in selectedBook.formats ? (
              <LazyImage
                imagesrc={selectedBook.formats[BookImageFormats.jpeg]}
              />
            ) : (
              <NoImage />
            )}
            <SetFavoriteBook book={selectedBook} />
          </BookImageContainer>
          <BookDetails>
            <BookTitle>{selectedBook.title}</BookTitle>
            <BookAuthors>
              {`By
              ${selectedBook.authors
                .map((author: Authors) => author.name.replace(/,/g, ''))
                .join(', ')}`}
            </BookAuthors>
            <div>
              <b>ID: </b>
              <i>{selectedBook.id}</i>
            </div>
            <div>
              <i className="fa fa-download" aria-hidden="true">
                :
              </i>
              {selectedBook.download_count}
            </div>
            <div>
              <b>Related subjects: </b>
              <i>{selectedBook.subjects.join(', ')}</i>
            </div>
            <div>
              <b>Bookshelves: </b>
              <i>{selectedBook.bookshelves.join(', ')}</i>
            </div>
          </BookDetails>
        </BookDetailsContainer>
      ) : (
        <h4>No book with id: {id}</h4>
      )}
    </div>
  );
};

export default BookDetailsRoute;
