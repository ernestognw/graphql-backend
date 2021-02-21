const bookFields = {
  Book: {
    author: async (book, _, { loaders }) => loaders.author.one(book.author),
  },
};
export default bookFields;
