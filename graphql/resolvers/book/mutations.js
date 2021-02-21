import { Book } from '../../../db/models';

const bookMutations = {
  createBook: async (_, { book }, { loaders }) => {
    const newBook = new Book(book);

    const savedBook = newBook.save();

    return loaders.book.one(savedBook._id);
  },
  updateBook: async (_, { id, book }, { loaders }) => {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: { ...book },
      },
      { new: true }
    );

    return loaders.book.one(id);
  },
};

export default bookMutations;
