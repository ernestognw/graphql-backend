import { Publisher } from '../../../db/models';

const publisherQueries = {
  publishers: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const publishers = await Publisher.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.publisher.many(publishers.map(({ id }) => id));
      },
      info: async () => {
        const count = await Publisher.countDocuments();

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
  publisher: async (_, { id }, { loaders }) => loaders.publisher.one(id),
};

export default publisherQueries;
