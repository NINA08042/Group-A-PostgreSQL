# 💻 Other PostgreSQL Code Explanation

In this section, we explain each part of our PostgreSQL project with real code demonstrations and videos.

---

## Video 1 — Database Connection
<video src="../public/videos/code1.mp4" controls></video>

This video demonstrates how to establish a connection to a PostgreSQL database using DBeaver and through a Python script with `psycopg2`.  
We explain how connection parameters (`host`, `port`, `user`, `password`, `dbname`) are used to initialize the database session.

---

## Video 2 — Creating Tables
<video src="../public/videos/code2.mp4" controls></video>

Here we define the schema and create core tables (`students`, `courses`, and `enrollments`).  
We cover data types, primary keys, and relationships between tables.

---

## Video 3 — Inserting Data
<video src="../public/videos/code3.mp4" controls></video>

Learn how to populate your tables with initial data using `INSERT INTO`.  
We also show how to batch insert multiple rows efficiently.

---

## Video 4 — Querying Data
<video src="../public/videos/code4.mp4" controls></video>

Shows examples of simple `SELECT` queries, filtering with `WHERE`, and sorting with `ORDER BY`.  
We also explain the difference between `INNER JOIN` and `LEFT JOIN`.

---

## Video 5 — Aggregation Functions
<video src="../public/videos/code5.mp4" controls></video>

Covers how to use aggregation functions such as `COUNT`, `AVG`, `SUM`, and `GROUP BY`.  
This is useful for statistical summaries like “average GPA per major.”

---

## Video 6 — Updating and Deleting Records
<video src="../public/videos/code6.mp4" controls></video>

Demonstrates how to update existing records and safely delete data.  
We emphasize the importance of using `WHERE` clauses to avoid accidental mass deletions.

---

## Video 7 — Constraints and Validation
<video src="../public/videos/code7.mp4" controls></video>

Explains `NOT NULL`, `UNIQUE`, and `CHECK` constraints to ensure data integrity.  
We also show examples of violating constraints and the resulting errors.

---

## Video 8 — Joins and Relationships
<video src="../public/videos/code8.mp4" controls></video>

Visualizes how data from multiple tables can be combined using joins.  
We demonstrate `INNER`, `LEFT`, and `RIGHT` joins and explain when to use each.

---

## Video 9 — Subqueries
<video src="../public/videos/code9.mp4" controls></video>

Introduces subqueries (queries inside queries) for advanced filtering and analysis.  
We use real examples like “Find students whose GPA is above the average GPA.”

---

## Video 10 — Views and Virtual Tables
<video src="../public/videos/code10.mp4" controls></video>

Shows how to create and use SQL `VIEWS` for simplifying complex queries.  
We demonstrate updating and deleting from views where possible.

---

## Video 11 — Indexes and Performance
<video src="../public/videos/code11.mp4" controls></video>

Explains what indexes are and how they improve query performance.  
We compare query speeds before and after adding indexes.

---

## Video 12 — Transactions
<video src="../public/videos/code12.mp4" controls></video>

Covers atomic transactions and rollback mechanisms.  
We demonstrate how to ensure data consistency using `BEGIN`, `COMMIT`, and `ROLLBACK`.

---

## Video 13 — Functions and Stored Procedures
<video src="../public/videos/code13.mp4" controls></video>

Shows how to write custom SQL functions and procedures to encapsulate logic.  
Example: a function that calculates GPA automatically.

---

## Video 14 — Triggers
<video src="../public/videos/code14.mp4" controls></video>

Introduces triggers that automatically perform actions before/after an insert or update.  
We show a trigger that logs every new record insertion.

---

## Video 15 — Data Visualization
<video src="../public/videos/code15.mp4" controls></video>

Explains how to visualize query results in DBeaver charts or export them to tools like Tableau.  
This is the final step in turning raw data into insights!
