import { Authors } from '../../types/book.types';
import LazyImage from '../shared/lazy-image/lazy-image.component';
import {
  BookCardContainer,
  BookDetails,
  BookItemContainer,
  BookStats,
  BookTitle,
} from './book-item.styles';

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
  return (
    <BookCardContainer>
      <BookItemContainer>
        <LazyImage imagesrc={imagesrc} />
      </BookItemContainer>
      <BookTitle>{title}</BookTitle>
      <BookDetails>
        <div className="authors">
          {`By  ${
            authors.length > 1
              ? authors.filter((author) => author.name).join(', ')
              : authors[0].name
          }`}
        </div>
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
