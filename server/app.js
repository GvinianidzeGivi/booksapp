const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@books.agsvd.mongodb.net/test`,
{ useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
 console.log(`Server is listening on port: ${port}`);
});

