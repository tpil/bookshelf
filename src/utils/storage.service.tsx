import { Book } from '../types/book.types';

export const getFavoritesFromLocalStorage = (): Book[] => {
  const getfavorites = JSON.parse(String(localStorage.getItem('Favorites')));
  if (getfavorites) {
    return getfavorites;
  }
  return [];
};

export const setFavoriteInLocalStorage = (val: Book): void => {
  const key = 'Favorites';
  let favorites = getFavoritesFromLocalStorage();
  if (favorites) {
    const favoriteExists = favorites.find((fav) => fav.id === val.id);
    !!favoriteExists
      ? (favorites = favorites.filter((fav) => fav.id !== val.id))
      : favorites.push(val);
    localStorage.setItem(key, JSON.stringify(favorites));
  } else {
    localStorage.setItem(key, JSON.stringify([val]));
  }
  console.log(getFavoritesFromLocalStorage());
};
