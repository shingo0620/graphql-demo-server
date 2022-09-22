const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    helloQ1: String
    helloQ2: String
  }
`

const resolvers = {
  Query: {
    helloQ1: () => 'result for Q1',
    helloQ2: () => 'Q2Q2Q2'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`? Server ready at ${url}`);
})