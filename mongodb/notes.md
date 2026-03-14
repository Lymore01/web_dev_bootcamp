# Section 36: Our First Database: MongoDB

## 382. What Matters In This Section
- Introduction to MongoDB and its importance in modern web development.
- Understanding the basics of NoSQL databases.

## 383. Introduction to Databases
- Databases store and manage data efficiently.
- Two main types: SQL (relational) and NoSQL (non-relational).

## 384. SQL Vs. NoSQL Databases
- **SQL Databases**: Structured, use tables, rows, and columns. Examples: MySQL, PostgreSQL.
- **NoSQL Databases**: Flexible schema, store data as documents, key-value pairs, or graphs. Example: MongoDB.

## 385. Why We're Learning Mongo
- MongoDB is a popular NoSQL database.
- Stores data in a flexible, JSON-like format (BSON).
- Scalable and suitable for modern applications.

## 386. Installing Mongo: MacOS
- Install MongoDB using Homebrew.
- Start the MongoDB server with `brew services start mongodb-community`.

## 387. Installing Mongo: Windows
- Download MongoDB from the official website.
- Follow the installation wizard and set up the environment variables.

## 388. IMPORTANT NOTE: About The Mongo Shell
- MongoDB Shell (mongosh) is used to interact with the database.
- It allows running commands and queries directly.

## 389. The Mongo Shell
- Access MongoDB using `mongosh`.
- Use commands like `show dbs` to list databases and `use <db_name>` to switch databases.

## 390. What On Earth Is BSON?
- BSON: Binary JSON, a binary-encoded serialization of JSON-like documents.
- Supports additional data types like dates and binary data.

## 391. Inserting With Mongo
- Use `db.collection.insertOne()` to insert a single document.
- Use `db.collection.insertMany()` to insert multiple documents.

## 392. Finding With Mongo
- Use `db.collection.find()` to retrieve documents.
- Use query filters to narrow down results, e.g., `{ key: value }`.

## 393. Updating With Mongo
- Use `db.collection.updateOne()` to update a single document.
- Use `db.collection.updateMany()` to update multiple documents.
- `$set` operator is used to update specific fields.

## 394. Deleting With Mongo
- Use `db.collection.deleteOne()` to delete a single document.
- Use `db.collection.deleteMany()` to delete multiple documents.

## 395. Additional Mongo Operators
- Operators like `$inc`, `$push`, `$pull`, and `$addToSet` for advanced updates.
- Example: `db.collection.updateOne({key: value}, {$inc: {field: 1}})` to increment a field.