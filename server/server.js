const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = ('./helpers/create_router.js');

MongoClient.connect('mongo://localhost:27017')
.then((client) => {
  const db = client.db('trivia_questions');

  const questionsCollection = db.collection('questions');
  const questionsRouter = createRouter(questionsCollection);
  app.use('/api/questions', questionsRouter);
})
.catch(console.error);

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.listen(3000, function (){
  console.log(`Listening on port ${this.address().port}`);
});
