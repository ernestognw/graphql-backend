import { authorQueries, authorMutations, authorFields } from './author';
import { bookQueries, bookMutations, bookFields } from './book';
import {
  publisherQueries,
  publisherMutations,
  publisherFields,
} from './publisher';

const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
    ...publisherQueries,
  },
  Mutation: {
    ...authorMutations,
    ...bookMutations,
    ...publisherMutations,
  },
  ...authorFields,
  ...bookFields,
  ...publisherFields,
};

export default resolvers;
