import { authorQueries, authorMutations } from './author';
import { bookQueries, bookMutations } from './book';
import { publisherQueries, publisherMutations } from './publisher';

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
};

export default resolvers;
