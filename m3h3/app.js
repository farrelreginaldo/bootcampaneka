const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'latihan_mongoDB';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user');
    // Insert some documents
    collection.insertMany([
      {
          nama : "Fara Nisha",
          usia : 17,
          jenis_kelamin : "Perempuan",
          alamat : "Tuban"
        }, 
      {
          nama : "Talitha Sevrilla",
          usia : 16,
          jenis_kelamin : "Perempuan",
          alamat : "Bali"
        } 
    //   {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(2, result.result.n);
    //   assert.equal(2, result.ops.length);
      console.log("Inserted 2 user into the collection");
      callback(result);
    });
  }

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });

    //Find with a query filter
    // collection.find({'a': 3}).toArray(function(err, docs) {
    //     assert.equal(err, null);
    //     console.log("Found the following records");
    //     console.log(docs);
    //     callback(docs);
    //   });
  }

const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a : 2 }
      , { $set: { b : 1 } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user');
    // Delete document where a is 3
    collection.deleteOne({ nama : "Talitha Sevrilla" }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }

  const indexCollection = function(db, callback) {
    db.collection('documents').createIndex(
      { "a": 1 },
        null,
        function(err, results) {
          console.log(results);
          callback();
      }
    );
  };

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

//   insertDocuments(db, function() {

    // findDocuments(db, function() {

        // updateDocument(db, function() {

            // removeDocument(db, function() {

                indexCollection(db, function() {

                    client.close();
                
                });

            //   });
        //   });
    //   });
//   });
});