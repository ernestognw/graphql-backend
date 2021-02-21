import { Book } from '../../../db/models';

const bookMutations = {
  createBook: async (_, { book }) => {
    const newBook = new Book(book);

    return newBook.save();
  },
  updateBook: async (_, { id, book }) => {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: { ...book },
      },
      { new: true }
    );

    return updatedBook;
  },
};

export default bookMutations;
