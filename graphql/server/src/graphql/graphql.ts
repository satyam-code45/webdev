import { ApolloServer } from "@apollo/server";
import { graphqlschema } from "./schema/schema.js";
import { graphqlResolver } from "./resolvers/resolver.js";

export const connectGraphQl = async () => {
  const server = new ApolloServer({
    typeDefs: graphqlschema,
    resolvers: graphqlResolver,
  });

  return server;
};
