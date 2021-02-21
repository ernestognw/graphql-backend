import { Book } from '../../../db/models';

const bookQueries = {
  books: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const books = await Book.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.book.many(books.map(({ id }) => id));
      },
      info: async () => {
        const count = await Book.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    };
  },
  book: async (_, { id }, { loaders }) => loaders.book.one(id),
};

export default bookQueries;
