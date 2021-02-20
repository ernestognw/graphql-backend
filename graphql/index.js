import { ApolloServer } from 'apollo-server-express';
import { env } from '../config/environment';
import schema from './schema';

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
});

export default apolloServer;
