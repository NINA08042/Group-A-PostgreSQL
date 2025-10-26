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

## 4. index_monitoring
<video src="/Group-A-PostgreSQL/videos/code4.mp4" controls></video>
**index_monitoring**

This script demonstrates how to ***monitor index usage*** through PostgreSQL’s system views like pg_stat_user_indexes and pg_stat_all_indexes. It helps you check how frequently each index is used, whether it’s helping performance, and which ones might be ***unused or redundant***.

## 5.tablespace_usage
<video src="/Group-A-PostgreSQL/videos/code5.mp4" controls></video>
**tablespace_usag**

This one is about ***tablespaces***, which control ***where data is physically stored*** on disk. The code shows how to use CREATE TABLESPACE to define a new storage location, how to assign databases or tables to it, and how to measure its size using pg_tablespace_size(). It’s a great example of ***database-level I/O optimization***.


## 6. views_functions
<video src="/Group-A-PostgreSQL/videos/code6.mp4" controls></video>
**views_functions**

This script introduces two powerful SQL tools: ***views*** and ***functions***. CREATE VIEW turns complex queries into reusable ***virtual tables***, while CREATE FUNCTION (written in ***PL/pgSQL***) encapsulates reusable business logic — like computing totals or summaries. Together, they make your database ***cleaner, modular, and easier to maintain***.

## 7. window_functions
<video src="/Group-A-PostgreSQL/videos/code7.mp4" controls></video>
**window_functions.sql**

Here you’ll see how ***window functions*** like **`ROW_NUMBER()`**, **`RANK()`**, **`LAG()`**, **`LEAD()`**, and **`SUM() OVER()`** work.  

These are great for ***analytics***, such as creating ***rankings***, ***cumulative totals***, or ***trend comparisons***.  

Unlike regular **`GROUP BY`**, window functions **don’t collapse rows**, making them ideal for ***reporting and data analysis***.


## 8. full_text_search
<video src="/Group-A-PostgreSQL/videos/code8.mp4" controls></video>
**full_text_search**

This code shows how to build ***full-text search*** inside PostgreSQL.  
It uses **`tsvector`** to convert text into searchable tokens, **`tsquery`** to run keyword searches,  
and **GIN indexes** to make searches lightning-fast.  
Think of it as a guide to building a ***mini search engine*** right inside your database.

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
