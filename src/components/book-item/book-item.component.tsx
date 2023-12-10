import { useNavigate } from 'react-router-dom';
import { Authors } from '../../types/book.types';
import LazyImage from '../shared/lazy-image/lazy-image.component';
import {
  BookCardContainer,
  BookDetails,
  BookItemContainer,
  BookStats,
  BookTitle,
  MissingImage,
} from './book-item.styles';
import { MouseEvent } from 'react';

type BookItemProps = {
  id: number;
  title: string;
  downloads: number;
  imagesrc: string;
  authors: Authors[];
};

const BookItem = ({
  id,
  title,
  downloads,
  imagesrc,
  authors,
}: BookItemProps) => {
  const navigate = useNavigate();

  const clickHanler = (event: MouseEvent<HTMLElement>) => {
    navigate(`/books/${id}`);
  };

  return (
    <BookCardContainer onClick={clickHanler}>
      <BookItemContainer>
        {imagesrc ? <LazyImage imagesrc={imagesrc} /> : <MissingImage />}
      </BookItemContainer>
      <BookTitle>{title}</BookTitle>
      <BookDetails>
        <span>
          {`By  ${
            authors.length > 1
              ? authors
                  .map((author: Authors) => author.name.replace(/,/g, ''))
                  .join(', ')
              : authors[0]
                ? authors[0].name.replace(/,/g, '')
                : ''
          }`}
        </span>
        <BookStats>
          <span>ID: {id}</span>
          <span>
            <i className="fa fa-download" aria-hidden="true"></i> {downloads}
          </span>
        </BookStats>
      </BookDetails>
    </BookCardContainer>
  );
};

export default BookItem;
