const MongoClient = require("mongodb").MongoClient;
const mongo = require("../tools/mongo");

MongoClient.connect(mongo.uri, {
  useNewUrlParser: true
}).then(db => {
  const articlesDBO = db.db("articles");
});
