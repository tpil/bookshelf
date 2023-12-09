import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import * as http from '../utils/http.utils';
import { Book, BookListModel } from "../types/book.types";

type BooksContextType = {
  setBooks: (books:Book[]) => void;
  books: Book[]
}



export const BooksContext = createContext<BooksContextType>({
  setBooks: () => null,
  books: []
});

export const BooksProvider = ({children}: PropsWithChildren<{}>) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async () => {
    const booksStore: BookListModel = await http.get<BookListModel>('https://gutendex.com/books');
    console.log(booksStore);
    setBooks(booksStore.results);
    };

    getBooks();
  }, []);

  const value = {books, setBooks};

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}