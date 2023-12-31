export type Authors = {
  name: string;
  birth_year: number;
  death_year: number;
};

export type Book = {
  id: number;
  title: string;
  authors: Authors[];
  translators: any[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: { [key: string]: string };
  download_count: number;
};

export type BookListModel = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
};
export enum BookImageFormats {
  html = 'text/html',
  jpeg = 'image/jpeg',
}
