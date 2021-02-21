import { Publisher, WorksAt } from '../../../db/models';

const authorFields = {
  Author: {
    publishers: async (author, _, { loaders }) => {
      const worksAt = await WorksAt.find({ author: author.id });

      return loaders.publisher.many(worksAt.map(({ publisher }) => publisher));
    },
  },
};

export default authorFields;
