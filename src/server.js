const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'myproject'

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true })

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server")

  const db = client.db(dbName)

  insertDocuments(db, function () {
    findDocuments(db, function () {
      updateDocuments(db, function () {
        findDocuments(db, function () {
          client.close()
        })
      })
    // removeDocument(db, function () {
      // client.close()
    // })
    })
  })
})

const data = {
  players: [
    { name: 'player1', wind: null, rolled: null, hand: [], specials: [] },
    { name: 'player2', wind: null, rolled: null, hand: [], specials: [] },
    { name: 'player3', wind: null, rolled: null, hand: [], specials: [] },
    { name: 'player4', wind: null, rolled: null, hand: [], specials: [] }
  ],
  tiles: {
    discard: [],
    remaining: []
  },
}

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents')
  // Insert some documents
  collection.insertMany(data.players, function(err, result) {
    console.log('Inserted players')
    callback(result)
  })
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents')
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log('Found the following records');
    console.log(docs)
    callback(docs)
  })
}

const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents')
  // Delete document where a is 3
  collection.deleteOne({ name: 'player1' }, function(err, result) {
    callback(result)
  })
  collection.deleteOne({ name: 'player2' }, function(err, result) {
    callback(result)
  })
  collection.deleteOne({ name: 'player3' }, function(err, result) {
    callback(result)
  })
  collection.deleteOne({ name: 'player4' }, function(err, result) {
    callback(result)
  })
}

const updateDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents')
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ name: 'player1' }, { $set: { rolled : Math.floor(Math.random() * 12) + 1 } }, function(err, result) {
    callback(result)
  })
  collection.updateOne({ name: 'player2' }, { $set: { rolled : Math.floor(Math.random() * 12) + 1 } }, function(err, result) {
    callback(result)
  })
  collection.updateOne({ name: 'player3' }, { $set: { rolled : Math.floor(Math.random() * 12) + 1 } }, function(err, result) {
    callback(result)
  })
  collection.updateOne({ name: 'player4' }, { $set: { rolled : Math.floor(Math.random() * 12) + 1 } }, function(err, result) {
    callback(result)
  })
}
