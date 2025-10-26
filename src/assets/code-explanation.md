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

This script covers the very basics of SQL — it uses **`CREATE TABLE`** to define a table, **`INSERT INTO`** to add data, **`SELECT`** to query it,  
and demonstrates **`UPDATE`** and **`DELETE`** for modifying or removing records.  
It’s basically a crash course in the ***CRUD*** operations — ***Create***, ***Read***, ***Update***, and ***Delete*** — the foundation of all database work.

## 2. index_types
<video src="/Group-A-PostgreSQL/videos/code2.mp4" controls></video>
**index_types**

Here is an examples of different ***index types*** in PostgreSQL: ***B-tree***, ***Hash***, ***GIN***, ***GiST***, and ***BRIN***.  

The script shows how to create each one and explains when to use them — for example, ***B-tree*** for general lookups,  ***GIN*** for ***full-text search***, and ***BRIN*** for ***large sequential data***.  

It’s a hands-on introduction to how ***indexes improve query performance***.


## 3. index_management
<video src="/Group-A-PostgreSQL/videos/code3.mp4" controls></video>
**index_management**

This code focuses on ***index maintenance***.  

It includes commands like **`REINDEX`** (rebuild), **`DROP INDEX`** (delete), and **`ALTER INDEX`** (rename).  

The goal is to show how to keep indexes ***efficient and up-to-date***, especially when data changes often and causes ***fragmentation***.

## 4. index_monitoring
<video src="/Group-A-PostgreSQL/videos/code4.mp4" controls></video>
**index_monitoring**

This script demonstrates how to ***monitor index usage*** through PostgreSQL’s ***system views*** like **`pg_stat_user_indexes`** and **`pg_stat_all_indexes`**.  

It helps you check how frequently each index is used, whether it’s helping performance, and which ones might be ***unused or redundant***.


## 5.tablespace_usage
<video src="/Group-A-PostgreSQL/videos/code5.mp4" controls></video>
**tablespace_usag**

This one is about ***tablespaces***, which control ***where data is physically stored*** on disk.  

The code shows how to use **`CREATE TABLESPACE`** to define a new storage location, how to assign databases or tables to it,  and how to measure its size using **`pg_tablespace_size()`**.  

It’s a great example of ***database-level I/O optimization***.



## 6. views_functions
<video src="/Group-A-PostgreSQL/videos/code6.mp4" controls></video>
**views_functions**

This script introduces two powerful SQL tools: ***views*** and ***functions***.  

**`CREATE VIEW`** turns complex queries into reusable ***virtual tables***, while **`CREATE FUNCTION`** (written in ***PL/pgSQL***) encapsulates reusable ***business logic*** —  
like computing totals or summaries.  

Together, they make your database ***cleaner, modular, and easier to maintain***.


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

## 9. jsonb_operations
<video src="/Group-A-PostgreSQL/videos/code9.mp4" controls></video>
**jsonb_operations**

This script focuses on ***JSONB***, PostgreSQL’s binary JSON format.  

It demonstrates how to use operators like **`->`**, **`->>`**, and **`@>`** to extract or compare JSON fields,  and how to use ***GIN indexes*** for fast queries.

It’s perfect for handling ***semi-structured data*** like ***API responses***, ***logs***, or ***configuration data***.


## 10. query_optimization
<video src="/Group-A-PostgreSQL/videos/code10.mp4" controls></video>
**query_optimization**

This one is all about ***query performance tuning***.  

It uses **`EXPLAIN`** and **`EXPLAIN ANALYZE`** to inspect execution plans and shows how different indexes or settings (like **`enable_seqscan`**) affect performance.  

The script helps you understand ***how the PostgreSQL optimizer chooses plans*** and how to ***write faster, smarter SQL***.

## 11. ecommerce_application
<video src="/Group-A-PostgreSQL/videos/code11.mp4" controls></video>
**ecommerce_application**

This script designs a full ***e-commerce database***, including ***users***, ***products***, ***orders***, and ***payments*** tables.  

It defines ***foreign key relationships*** for ***data integrity*** and may include ***triggers*** or ***views*** for calculating things like ***sales summaries*** or ***inventory levels***.  

It’s a solid example of ***real-world relational database design***.

## 12. finance_application
<video src="/Group-A-PostgreSQL/videos/code12.mp4" controls></video>
**finance_application**

This script models a ***financial system***, with tables for ***accounts***, ***transactions***, ***balances***, and ***audit logs***.  

It uses ***transactions*** (**`BEGIN`** / **`COMMIT`**), ***triggers***, and ***precision numeric types*** to ensure ***accuracy and consistency***.  

It’s all about building a ***safe, reliable database*** — exactly what’s needed for ***banking or accounting applications***.



## 13. logistics_application
<video src="/Group-A-PostgreSQL/videos/code13.mp4" controls></video>
**logistics_application**

The most advanced script in the set — it builds a ***logistics management system*** with tables for ***warehouses***, ***vehicles***, ***routes***, and ***deliveries***.  

It may use ***geographic data types*** (like **`geometry`** or **`geography`**) and ***spatial queries*** for ***route optimization***.  

It’s a comprehensive example that combines ***indexing***, ***functions***, and ***real-world business logic*** into one ***enterprise-level design***.


#Summary

These scripts take you on a complete journey — from ***basic SQL syntax*** to ***indexing and optimization***, and finally to ***complete business database systems***.  
Early scripts teach the ***fundamentals***, while later ones show how those skills come together in ***real-world PostgreSQL applications***.

