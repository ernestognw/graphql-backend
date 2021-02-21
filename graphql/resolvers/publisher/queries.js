import { Publisher } from '../../../db/models';

const publisherQueries = {
  publishers: async (_, args) => {
    const publishers = await Publisher.find();

    return publishers;
  },
  publisher: async (_, { id }) => {
    const publisher = await Publisher.findById(id);

    return publisher;
  },
};

export default publisherQueries;
