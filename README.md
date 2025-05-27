# 📚 PLP Bookstore – MongoDB Fundamentals (Week 1 Assignment)

## 🗂 Project Overview

This repository contains the completed tasks for **Week 1: MongoDB – Data Layer Fundamentals and Advanced Techniques** as part of the Power Learn Project curriculum.

The focus is on mastering the fundamentals of MongoDB including CRUD operations, advanced queries, aggregation pipelines, and indexing — using a bookstore data model.

---

## ✅ Tasks Completed

### 1. MongoDB Setup
- ✅ MongoDB installed locally.
- ✅ Created database: `plp_bookstore`.
- ✅ Created collection: `books`.

### 2. Basic CRUD Operations
- ✅ Inserted at least 10 book documents using `insert_books.js`.
- ✅ All book documents include the following fields:
  - `title` (string)
  - `author` (string)
  - `genre` (string)
  - `published_year` (number)
  - `price` (number)
  - `in_stock` (boolean)
  - `pages` (number)
  - `publisher` (string)
- ✅ Performed queries for:
  - Books in a specific genre
  - Books published after a certain year
  - Books by a specific author
  - Price update for a specific book
  - Deleting a book by title

### 3. Advanced Queries
- ✅ Queried books in stock and published after 2010.
- ✅ Used projection to return only `title`, `author`, and `price`.
- ✅ Sorted books by price (ascending and descending).
- ✅ Implemented pagination using `limit()` and `skip()` (5 books per page).

### 4. Aggregation Pipelines
- ✅ Calculated average book price by genre.
- ✅ Identified the author with the most books.
- ✅ Grouped books by publication decade and counted them.

### 5. Indexing and Performance Optimization
- ✅ Created a single-field index on `title`.
- ✅ Created a compound index on `author` and `published_year`.
- ✅ Used `explain()` and `hint()` to analyze and compare query performance with and without indexes.

---

## 🛠 Setup & Usage Instructions

### i. Clone the Repository
```bash
git clone <your-repo-url>
cd week-1-mongodb-fundamentals-assignment-<your-username>
```

### ii. Install Dependencies
```bash
npm install
```

### iii. Insert Book Data into MongoDB
```bash
node insert_books.js
```

### 4. Run Queries
You can run the queries inside queries.js in either:

MongoDB Shell (mongosh)

MongoDB Compass (using the built-in query tab)

Or copy/paste them individually to test in either environment.

### Files in This Repository
File	Description
insert_books.js	Script to insert sample book data into MongoDB
queries.js	Contains all required queries for CRUD, advanced search, aggregation, and indexing
README.md	This documentation
screenshot.png	Screenshot of MongoDB Compass showing the plp_bookstore and its collection

### Screenshot
📸 A screenshot of the MongoDB Compass showing the books collection with sample data inserted is included.

###  Submission
All required files are committed and pushed to this GitHub repository:

insert_books.js

queries.js

README.md

screenshot.png

###  Acknowledgments
Gratitude to the Power Learn Project and all instructors guiding this journey. This work was done with care and attention to detail, reflecting a commitment to mastering foundational data technologies.

### Author
Chalonreay Kahindi