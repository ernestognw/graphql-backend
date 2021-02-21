import { Author } from '../../../db/models';

const bookFields = {
  Book: {
    author: async (book) => {
      const author = await Author.findById(book.author);

      return author;
    },
  },
};
export default bookFields;
