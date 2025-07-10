export const graphqlschema = `#graphql
    type Query {
        users: [User]
        events: [Event]
        event(id:ID!): Event
    }

    type Mutation {
        newUser(name:String!,email:String!,password:String!): String
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        events: [Event]
        avatar: String
        createdAt: String!
        updatedAt: String!
    }

    type Event {
        _id: ID!
        name: String!
        location: String!
        startTime: String! 
        attendess: [User]
        createdAt: String!
        updatedAt: String!
    }


`;
