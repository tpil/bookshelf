import { Fragment, MouseEvent, useContext, useEffect } from 'react';
import { BooksContext } from '../../contexts/books.context';
import { useNavigate, useParams } from 'react-router-dom';
import { Authors, BookImageFormats } from '../../types/book.types';
import LazyImage from '../../components/shared/lazy-image/lazy-image.component';
import {
  BookDetailsRouteHeader,
  BookDetailsReturnButton,
  BookDetailsContainer,
  BookImageContainer,
  BookDetails,
  BookTitle,
  BookAuthors,
} from './book-details.route.styles';
import NoImage from '../../components/shared/no-image/no-image.component';

const BookDetailsRoute = () => {
  const { getBookById, selectedBook } = useContext(BooksContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const returnToHomeHandler = (ecent: MouseEvent<HTMLButtonElement>) => {
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
        <BookDetailsReturnButton onClick={returnToHomeHandler}>
          <i className="fa-solid fa-chevron-left"></i> Back
        </BookDetailsReturnButton>
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
