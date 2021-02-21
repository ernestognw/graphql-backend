import { Book } from '../../../db/models';

const bookQueries = {
  books: async (_, args) => {
    const books = await Book.find();

    return books;
  },
  book: async (_, { id }) => {
    const book = await Book.findById(id);

    return book;
  },
};

export default bookQueries;
