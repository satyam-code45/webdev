import { gql } from "@apollo/client";

export const users = gql`#graphql
  query ExampleQuery {
  users {
    _id,
    name,
    email
  }
}
`
