import express from 'express'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
const app = express()
const port = 9000

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app, path: '/api' })

app.listen(port)

console.log(`App running on localhost:${port}`)
