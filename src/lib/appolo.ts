import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://dropmail.me/api/graphql/',
  cache: new InMemoryCache({})
})