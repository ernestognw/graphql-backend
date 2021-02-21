import { Author, WorksAt } from '../../../db/models';

const publisherFields = {
  Publisher: {
    authors: async (publisher) => {
      const worksAt = await WorksAt.find({ publisher: publisher.id });

      const authors = await Author.find({
        _id: { $in: worksAt.map(({ author }) => author) },
      });

      return authors;
    },
  },
};
export default publisherFields;
