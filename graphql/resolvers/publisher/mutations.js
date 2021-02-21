import { Publisher } from '../../../db/models';

const publisherMutations = {
  createPublisher: async (_, { publisher }, { loaders }) => {
    const newPublisher = new Publisher(publisher);

    const savedPublisher = await newPublisher.save();

    return loaders.publisher.one(savedPublisher._id);
  },
  updatePublisher: async (_, { id, publisher }, { loaders }) => {
    const updatedPublisher = await Publisher.findByIdAndUpdate(
      id,
      {
        $set: { ...publisher },
      },
      { new: true }
    );

    return loaders.publisher.one(id);
  },
};

export default publisherMutations;
