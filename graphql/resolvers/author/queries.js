import { Author } from '../../../db/models';

const authorQueries = {
  authors: async (_, args) => {
    const authors = await Author.find();

    return authors;
  },
  author: async (_, { id }) => {
    const author = await Author.findById(id);

    return author;
  },
};

export default authorQueries;
