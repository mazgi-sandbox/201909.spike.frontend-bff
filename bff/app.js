var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const worker = require('worker_threads');

var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var db = require('./models/')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type User {
  firstName: String,
  lastName: String,
  email: String
},

type Query {
  hello: String,
  users: [User]
},

type Mutation {
  createUser(firstName: String!, lastName: String!, email: String!): User,
}
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    console.log(`hello`);
    return 'Hello world!';
  },
  users: () => {
    const users = db.User.findAll().then();
    console.log(`users: ${users}`);
    return users;
  },
  createUser: ({firstName, lastName, email}) => {
    const u = db.User.create({
      firstName: firstName,
      lastName: lastName,
      email: email
    }).then(user => {
      return user
    });
    console.log(`created: ${u}`);
    console.log(`email: ${email}`);
    return u;
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app;
