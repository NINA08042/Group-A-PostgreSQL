---
Title: "PostgreSQL Presentation"
author: >
  Group A — 
  Jianing Xue B01812701 | Xinrui Gao B01819974 | Weixue Kong B01819838 | Fang Tang B01814427
---

# Other Code Explanation

## 1. basic_sql_syntax
<video src="/Group-A-PostgreSQL/videos/code1.mp4" controls></video>
**basic_sql_syntax**

This script covers the very basics of SQL — it uses CREATE TABLE to define a table, INSERT INTO to add data, SELECT to query it, and demonstrates UPDATE and DELETE for modifying or removing records. It’s basically a crash course in the ***CRUD*** operations — ***Create, Read, Update, and Delete*** — the foundation of all database work.

## 2. index_types
<video src="/Group-A-PostgreSQL/videos/code2.mp4" controls></video>
**index_types**

Here you’ll find examples of different ***index types*** in PostgreSQL: ***B-tree, Hash, GIN, GiST, and BRIN***. The script shows how to create each one and explains when to use them — for example, ***B-tree*** for general lookups, ***GIN*** for ***full-text search***, and ***BRIN*** for ***large sequential data***. It’s a hands-on introduction to how ***indexes improve query performance***.

## 3. index_management
<video src="/Group-A-PostgreSQL/videos/code3.mp4" controls></video>
**index_management**

This code focuses on ***index maintenance***. It includes commands like REINDEX (rebuild), DROP INDEX (delete), and ALTER INDEX (rename). The goal is to show how to keep indexes ***efficient and up-to-date***, especially when data changes often and causes ***fragmentation***.

## 4. Querying Data
<video src="/Group-A-PostgreSQL/videos/code4.mp4" controls></video>
Explanation: `SELECT` + `WHERE`.

## 5. Updating Data
<video src="/Group-A-PostgreSQL/videos/code5.mp4" controls></video>
Explanation: `UPDATE` specific rows.

## 6. Deleting Data
<video src="/Group-A-PostgreSQL/videos/code6.mp4" controls></video>
Explanation: `DELETE` with caution.

## 7. Constraints
<video src="/Group-A-PostgreSQL/videos/code7.mp4" controls></video>
Explanation: NOT NULL / UNIQUE / CHECK.

## 8. Keys & Relations
<video src="/Group-A-PostgreSQL/videos/code8.mp4" controls></video>
Explanation: PK & FK relationships.

## 9. Transactions
<video src="/Group-A-PostgreSQL/videos/code9.mp4" controls></video>
Explanation: BEGIN / COMMIT / ROLLBACK.

## 10. Views
<video src="/Group-A-PostgreSQL/videos/code10.mp4" controls></video>
Explanation: Simplify complex queries.

## 11. Indexes
<video src="/Group-A-PostgreSQL/videos/code11.mp4" controls></video>
Explanation: Improve performance.

## 12. Triggers
<video src="/Group-A-PostgreSQL/videos/code12.mp4" controls></video>
Explanation: Automate actions.

## 13. Stored Procedures
<video src="/Group-A-PostgreSQL/videos/code13.mp4" controls></video>
Explanation: Reusable logic.

## 14. Partitioning
<video src="/Group-A-PostgreSQL/videos/code14.mp4" controls></video>
Explanation: Scale large tables.

## 15. Python Connection
<video src="/Group-A-PostgreSQL/videos/code15.mp4" controls></video>
Explanation: `psycopg2` demo.
