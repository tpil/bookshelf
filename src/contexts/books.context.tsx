import React, { PropsWithChildren, createContext, useState } from 'react';
import * as http from '../utils/http.utils';
import { Book, BookListModel } from '../types/book.types';

type BooksContextType = {
  getAllBooks: (books: Book[]) => void;
  searchBooks: (term: string) => void;
  getBookById: (id: number) => void;
  changeResultsPage: (page: number) => void;
  books: Book[];
  selectedBook: Book | null;
  booksCount: number;
};

export const BooksContext = createContext<BooksContextType>({
  getAllBooks: () => null,
  searchBooks: () => null,
  getBookById: () => null,
  changeResultsPage: () => null,
  books: [],
  selectedBook: null,
  booksCount: 0,
});

export const BooksProvider = ({ children }: PropsWithChildren<{}>) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);
  const [booksCount, setBooksCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');


  const getAllBooks = async () => {
    const booksStore: BookListModel = await http.get<BookListModel>(
      'https://gutendex.com/books'
    );
    setBooks(booksStore.results);
    setBooksCount(booksStore.count);
    setSearchTerm('');
  };

  const searchBooks = async (text: string) => {
    const term = encodeURI(text);
    setSearchTerm(term);
    if (term.length !== 0) {
      const booksStore: BookListModel = await http.get(
        `https://gutendex.com/books?search=${term}`
      );
      setBooks(booksStore.results);
      setBooksCount(booksStore.count);
    } else {
      getAllBooks();
    }
  };

  const getBookById = async (id: number) => {
    const getBook: BookListModel = await http.get<BookListModel>(
      `https://gutendex.com/books?ids=${id}`
    );

    if (getBook?.results) {
      setSelectedBook(getBook.results[0]);
    }
  };

  const changeResultsPage = async (page: number) => {
    const url =`https://gutendex.com/books?page=${page}&search=${searchTerm}`;
    const getPageBooks: BookListModel = await http.get<BookListModel>(url);
    setBooks(getPageBooks.results);
    setBooksCount(getPageBooks.count);
  };

  const value = {
    books,
    getAllBooks,
    searchBooks,
    getBookById,
    selectedBook,
    booksCount,
    changeResultsPage
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
