const express = require('express')
const app = express()
const jobRoutes = require('./src/job/routes')
const applicationRoutes = require('./src/application/routes')
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const graphQlSchema = require('./schema/index');
const graphQlResolvers = require('./resolvers/index');
const cors = require('cors');

const port = 3000





app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use(cors());
app.use("/jobs",jobRoutes);
app.use("/applications",applicationRoutes)
app.use(
    '/graphql',
    graphqlHTTP({
      schema: graphQlSchema,
      rootValue: graphQlResolvers,
      graphiql: true
    })
  );
  mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kibme.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(port, () => console.log(`app listening on port ${port}`))
  })
  .catch(err => {
    console.log(err);
  });
// app.listen(port, () => console.log(`app listening on port ${port}`))