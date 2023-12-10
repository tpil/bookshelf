import { MouseEvent, useEffect, useState } from 'react';
import {
  getFavoritesFromLocalStorage,
  setFavoriteInLocalStorage,
} from '../../utils/storage.service';
import { Book } from '../../types/book.types';
import { FavoritesButton } from './set-favorite-book.styles';

type FavoriteBookProps = {
  book: Book;
};

const SetFavoriteBook = ({book}: FavoriteBookProps) => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  const setFavoritesHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setFavoriteInLocalStorage(book);
    const newFavorites: Book[] | null = getFavoritesFromLocalStorage();
    setFavorites(newFavorites!);
  };

  useEffect(() => {
    const newFavorites: Book[] | null = getFavoritesFromLocalStorage();
    setFavorites(newFavorites!);
  }, []);

  return (
    <FavoritesButton onClick={setFavoritesHandler}>
      {favorites && favorites.find((fav: Book) => fav.id === book.id) ? (
        <span>
          Remove <i className="fa fa-star"></i>
        </span>
      ) : (
        <span>
          Add to favorites <i className="fa fa-star"></i>
        </span>
      )}
    </FavoritesButton>
  );
};

export default SetFavoriteBook;
