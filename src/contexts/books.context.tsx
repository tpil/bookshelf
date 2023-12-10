import React, {
  PropsWithChildren,
  createContext,
  useState,
} from 'react';
import * as http from '../utils/http.utils';
import { Book, BookListModel } from '../types/book.types';

type BooksContextType = {
  getAllBooks: (books: Book[]) => void;
  searchBooks: (term: string) => void;
  getBookById: (id: number) => void;
  books: Book[];
  selectedBook: Book | null;
};

export const BooksContext = createContext<BooksContextType>({
  getAllBooks: () => null,
  searchBooks: () => null,
  getBookById: () => null,
  books: [],
  selectedBook: null
});

export const BooksProvider = ({ children }: PropsWithChildren<{}>) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);

  const getAllBooks = async () => {
    const booksStore: BookListModel = await http.get<BookListModel>(
      'https://gutendex.com/books'
    );
    setBooks(booksStore.results);
  };

  const searchBooks = async (text: string) => {
    const term = encodeURI(text);
    const booksStore: BookListModel = await http.get(
      `https://gutendex.com/books?search=${term}`
    );

    setBooks(booksStore.results);
  };

  const getBookById = async (id: number) => {
    const getBook: BookListModel = await http.get<BookListModel>(
      `https://gutendex.com/books?ids=${id}`
    );
    console.log(getBook);
    if (getBook?.results) {
      setSelectedBook(getBook.results[0]);
    }
    
  };

  const value = { books, getAllBooks, searchBooks, getBookById, selectedBook };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
