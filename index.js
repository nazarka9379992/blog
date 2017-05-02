var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', function(err, db) {
	if (err) {
		console.log('Error', err);
	} else {
  console.log("Connected correctly to server");
   db.close();
 }
 
});