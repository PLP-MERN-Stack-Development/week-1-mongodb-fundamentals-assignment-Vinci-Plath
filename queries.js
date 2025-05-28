// BASIC CRUD OPERATIONS

// 1. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g., after 1950)
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author (e.g., "J.R.R. Tolkien")
db.books.find({ author: "J.R.R. Tolkien" });

// 4. Update the price of a specific book (e.g., "The Hobbit" to 15.99)
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
);

// 5. Delete a book by its title (e.g., "Wuthering Heights")
db.books.deleteOne({ title: "Wuthering Heights" });


//  ADVANCED QUERIES

// 1. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2. Use projection to return only title, author, and price (excluding _id)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Sorting books by price
//    i. Ascending
db.books.find().sort({ price: 1 });

//    ii. Descending
db.books.find().sort({ price: -1 });

// 4. Pagination – 5 books per page
//    i. Page 1
db.books.find().limit(5).skip(0);

//    ii. Page 2
db.books.find().limit(5).skip(5);

//    iii. Page 3
db.books.find().limit(5).skip(10);


// AGGREGATION PIPELINES

// 1. Calculate average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $subtract: ["$published_year", { $mod: ["$published_year", 10] }]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


//  INDEXING

// 1. Create a single-field index on the title field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });


// PERFORMANCE ANALYSIS USING EXPLAIN
// 1. Query before index (likely COLLSCAN)
db.books.find({ title: "1984" }).explain("executionStats");

// 2. Create index on 'title'
db.books.createIndex({ title: 1 });

// 3. Query after index (should use IXSCAN)
db.books.find({ title: "1984" }).explain("executionStats");

// 4. Query on author + published_year (before compound index)
db.books.find({
  author: "George Orwell",
  published_year: { $gt: 1940 }
}).explain("executionStats");

// 5. Create compound index
db.books.createIndex({ author: 1, published_year: 1 });

// 6. Run the same query again (should now use compound index)
db.books.find({
  author: "George Orwell",
  published_year: { $gt: 1940 }
}).explain("executionStats");

// 7. Using hint to compare behavior
// i. Forces a collection scan (COLLSCAN), ignoring all indexes.
db.books.find({ title: "1984" }).hint({ $natural: 1 }).explain("executionStats"); 
// ii. Forces the use of the index on title.
db.books.find({ title: "1984" }).hint({ title: 1 }).explain("executionStats"); 


// INDEX MANAGEMENT- 

// i. Check existing indexes
db.books.getIndexes();

// ii. Drop index on 'title'
db.books.dropIndex({ title: 1 });

// iii. Drop compound index (get name from getIndexes())
db.books.dropIndex("author_1_published_year_1");
