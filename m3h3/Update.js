const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'latihan_mongoDB';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('buku');
    // Update document where a is 2, set b equal to 1
    collection.updateOne(
        { 
           
            judul : "Hujan"
             
        }, 
        {
            $set : {
                judul : "Bulan"
            } 
        }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  updateDocument(db, function() {
    client.close();
  });
});