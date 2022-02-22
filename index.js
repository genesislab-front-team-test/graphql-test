const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = 4000;

const schema = require('./schema.js');

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`${port}에서 대기중`);
});
