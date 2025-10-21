---
title: "PostgreSQL Presentation"
layout: post
author: Group A
date: 2025-10-21
---

# PostgreSQL Presentation

Welcome to our presentation on PostgreSQL — an open-source, robust, and high-performance relational database system.

## Table of Contents
- [Part 01: What is a Database?](#part-01-what-is-a-database)
- [Part 02: Relational Database & PostgreSQL](#part-02-relational-database--postgresql)
- [Part 03: Why PostgreSQL](#part-03-why-postgresql)
- [Part 04: Hands-on Practice](#part-04-hands-on-practice)
- [Summary](#summary)
- [Q&A](#qa)

---

## Slide 1

![Slide 1](images/slide1.png)

PostgreSQL
Open source
Robust
High Performance
Jianing Xue    B01812701		Xinrui Gao B01819974
Weixue Kong  B01819838		Fang Tang B01814427

## Slide 2

![Slide 2](images/slide2.png)

CONTENTS

## Slide 3

![Slide 3](images/slide3.png)

PART 01
What is a Database?

## Slide 4

![Slide 4](images/slide4.png)

Managed by a database management system, which ensures data integrity, security, and efficient organization of information.
 Relational Database： structured in tabular form.

## Slide 5

![Slide 5](images/slide5.png)

Data Management
DEITEL, H.M. and DEITEL, B. (1986) ‘Database Management Systems, Management Information Systems, Decision Support Systems’, in An Introduction to Information Processing. Academic Press, pp. 272–305. Available at: https://doi.org/10.1016/B978-0-12-209005-9.50018-7.

## Slide 6

![Slide 6](images/slide6.png)

Types of Databases
Relational Database:
 organizes data into rows and columns
NoSQL Database: non-relational database
Graph Databases
eg.json, bson, XMLdocument

## Slide 7

![Slide 7](images/slide7.png)

PART 02
Relational Database: Postgresql

## Slide 8

![Slide 8](images/slide8.png)

Rows
(Tuples)
Primary Key
Columns
(Attributes)
Organizes data in  collection of two-dimensional inter-related tables (relations)

Row (tuple) : an entity/record

Column (Attribute): a specific property of the entity

## Slide 9

![Slide 9](images/slide9.png)

A set of rules used in DBMS: make sure the data is accurate, consistent and reliable
MUST be true for all instance.
Domain Constraints: 
Attribute values are valid and within a specific domain.
Data type: string
NOT NULL

## Slide 10

![Slide 10](images/slide10.png)

A set of rules used in DBMS: make sure the data is accurate, consistant and reliable
MUST be true for all instance.
Domain Constraints: 
Entity Integrity Constraints:
Primary key is cannot be null or repeated.
non-NULL
Unique
table specific

## Slide 11

![Slide 11](images/slide11.png)

A set of rules used in DBMS: make sure the data is accurate, consistant and reliable
MUST be true for all instance.
Domain Constraints: 
Entity Integrity Constraints:
Referential Integrity Constraint：
Rationships between tables remain consistent.
Foreign key:
 match a value in the referenced primary key of another table
or NULL

## Slide 12

![Slide 12](images/slide12.png)

Atomicity
All changes to data are performed as if they are a single operation.
Consistency
Isolation
Durability
Data remains in a consistent state from start to finish, reinforcing data integrity.
The intermediate state of a transaction is not visible to other transactions
Changes to data persist and are not undone, after successful transaction.

## Slide 13

![Slide 13](images/slide13.png)

Transactions & Concurrency Control
one logical unit of work.
Transaction: 
A logical unit of work that groups one or more database operations into a single, atomic action.
Concurrency Control:
Mechanisms that allow multiple transactions to execute simultaneously without interfering with each other, preserving consistency.
Follows the ACID properties

## Slide 14

![Slide 14](images/slide14.png)

Transactions & Concurrency Control
one logical unit of work.
PostgreSQL Implementation:

Uses MVCC (Multi-Version Concurrency Control).
Each transaction sees a snapshot of the database at a specific point in time.
Readers don’t block writers, and writers don’t block readers.
Ensures high concurrency with consistent results

## Slide 15

![Slide 15](images/slide15.png)

PART 03
Why Postgresql

## Slide 16

![Slide 16](images/slide16.png)

PostgreSQL: PROS AND CONS
Free and Open Source
Free and Open Source
Completely free to use with a liberal license.
Feature-Rich
Supports advanced SQL, ACID transactions, JSON, indexing, and extensions.
Enterprise-Grade
Widely used in production environments; reliable and robust.
Active Community
Strong open-source community with extensive documentation and resources.
Free and Open Source
Complex Configuration
Requires tuning and deeper technical knowledge
Higher Learning Curve
More complex than lightweight databases like MySQL.
Write Performance
Slower in high-frequency write workloads compared to NoSQL systems.
Limited GUI Tools
Administration tools are less user-friendly than some commercial systems.

## Slide 17

![Slide 17](images/slide17.png)

How to use Postgresql:Environment Setup
one logical unit of work.
Tools:
DBeaver (GUI): 
https://dbeaver.io/download/
PostgreSQL 17/18 (Core DBMS)
https://www.postgresql.org/download/

## Slide 18

![Slide 18](images/slide18.png)

How to use Postgresql:Environment Setup
one logical unit of work.
Tools:
DBeaver (GUI): 
https://dbeaver.io/download/
PostgreSQL 17/18 (Core DBMS)
https://www.postgresql.org/download/

## Slide 19

![Slide 19](images/slide19.png)

PART 04
Simple guide to PostgreSQL

## Slide 20

![Slide 20](images/slide20.png)

Hands-on Practice: Table Management

## Slide 21

![Slide 21](images/slide21.png)

Hands-on Practice: CRUD operations

## Slide 22

![Slide 22](images/slide22.png)

Hands-on Practice: Database Management

## Slide 23

![Slide 23](images/slide23.png)

Advanced Practice: Transaction management and concurrency control

## Slide 24

![Slide 24](images/slide24.png)

Advanced Practice: MVCC

## Slide 25

![Slide 25](images/slide25.png)

Advanced Practice: Partitioned Table

## Slide 26

![Slide 26](images/slide26.png)

python connection of progresql

## Slide 27

![Slide 27](images/slide27.png)

SUMMARY
COMPANY POWERPOINT
DBMS
PostgreSQL
PostgreSQL
Efficient
 Managed data
Free and Open Source
Feature-Rich
Enterprise-Grade
Active Community
Practice & exploration lead to mastery.

## Slide 28

![Slide 28](images/slide28.png)

THANKS
Any questions?

---

# Full Speech Notes

第一页（首页）
Good morning，everyone! My name is.. Today, we are going to talk about a database called Postgresql. Postgresql is one of the most popular databases. And the cool thing about it is that it is open source, robust, high performance, and it comes with a lot of great features.
第二页（CONTENTS）
Today’s presentation will be divided into four main parts,
Let’s quickly go through today’s agenda—it’s structured to help us learn PostgreSQL step by step.
First, we’ll cover basics: what a database is and its main types. Then, we’ll dive into relational databases—
Next, we’ll focus on PostgreSQL
Finally, How to use Postgresql
第三页（PART 01）
Starting with the basics. What is a Database? 
第四页 (What is a Database?)
A database system is a A structured collection of related data items that is stored on secondary storage devices.
And it features rapid access and manipulation of the data.  Basically, aside of storing data, a database facilitates data management.
第五页 （What is a Database?）
This is done by a database management system or DBMS.
 It ensures data integrity, security, and efficient organization of information. Here we got a picture that shows what a typical relational database looks like. This kind of databases structured in tabular form. 
第六页 (Types of Databases)
Databases can be divided into two different types. First we got relational database. Postgresql, mysql and oracle are all relational databases. This kind of database organizes data into rows and columns, or as stated before, in tabular form. 
Then there are non-relational databases, which are also called NoSQL databases. 
There are four types of NoSQl databases, each tailored to specific use. The document store is ideal for semi-structured data, where each document is a self contained unit with a flexible structure. For example, a blog platform stores a post as a document with fields like. title: Introduction to databases author: Jane Doe content: blablabla
Meanwhile, the key value stores treat each data item as a unique key paired with a value. Kind of like a dictionary, easy to look up and performs at high speed.
Graph databases, on the other hand, focus on relationships, storing data as nodes which are entities and edges which are relations, usually used in handling interconnected data. 
Column-family stores organized data into columns rather than rows, enabling efficient storage and retrieval for large-scale analytical queries.
第七页 （PART 02）
Postgresql, as previously stated, is a relational database. Let’s dive into the features of relational databases a little deeper.
第八页 （Relational Database: Relational Model in DBMS）
The relational model for database management is an approach to logically represent and manage the data stored in a database. In this model, the data is organized into a collection of two-dimensional inter-related tables, also known as relations. Each relation is a collection of columns and rows, where the column represents the properties of an entity and the rows (or tuples) represent a set of attribute values that describe a particular entity. 
Here we have a simple example of a relational model, where each row represents a student, and each column is an attribute of the student such as name or age. And the studentID which is specific to each student, is defined as the primary key.
第九页 （DBMS Integrity Constraints-1）
In database management, to ensure the data is accurate, consistent and reliable, we enable a set of rules called integrity constraints.  These constraints must be true for all instance in the database.
The domain constraints ensure the values stored in a column or attribute are valid and within a specific range or domain.  In simple words, the domain constraints define what type of data is allowed in a column and restrict invalid data entry. For instance, in the previous example of students, the attribute name allows only text or string entries and cannot be NULL.
第十页 （DBMS Integrity Constraints-2）
The entity integrity constraints ensure that each tuple or row of a table is uniquely identifiable by a primary key that can not be null or repeated. It is important to notices that this constraint applies to a single table to ensure the integrity of the data within that specific entity.
第十一页 （DBMS Integrity Constraints-3）
Referential integrity constraints are rules that ensure relationships between tables remain consistent. They enforce that a foreign key in one table must either match a value in the referenced primary key of another table or be NULL. This guarantees the logical connection between related tables in a relational database.
In this example, the attribute course number in the student table is a foreign key that served as a primary key in the course table. The last entry of course number is not allowed because it is not present in course table.
第十二页 （ACID Properties）
The relational database has properties that enable reliable transaction processing called ACID.
It stands for atomicity, consistency, isolation and durability.
 Atomicity means that all changes to data are performed as if they were a single, indivisible operation.
Either everything happens, or nothing happens at all.
If one part of the transaction fails — for example, if you’re transferring money and the debit succeeds but the credit doesn’t — the database will roll everything back, as if the transaction never occurred.
This “all-or-nothing” behavior is what protects data from partial updates.
Next, we have Consistency.
Consistency ensures that the data remains valid and logical from the beginning of the transaction to the end.
The database enforces all the integrity rules — primary keys, foreign keys, check constraints — so that no transaction can bring the data into an invalid state.
Isolation means that the intermediate state of a transaction is invisible to others.
This one is especially important when multiple users are working at the same time.
In other words, when several transactions run concurrently, they appear to execute one after another — as if they were serialized. This prevents issues like dirty reads, non-repeatable reads, or phantom reads, depending on the isolation level the system enforces. 
Durability ensures that once a transaction is successfully completed, its changes are permanent.
Even if the system crashes right after the commit, the data remains safe.
This is achieved through mechanisms like write-ahead logging — before any data is committed, it’s written to disk in a durable transaction log.
When the system restarts, the database can use this log to recover to a consistent state.
第十三页 （Transactions & Concurrency Control-1）
A transaction is basically a group of database operations that act as a single unit — either all succeed or all fail.
It guarantees consistency through the ACID principles we discussed earlier.
However, in real systems, we often have many users or applications accessing the same data at the same time.
That’s where concurrency control comes in — it ensures that transactions can run concurrently without corrupting the data.
第十四页 Transactions & Concurrency Control-2）
In PostgreSQL, this is achieved through MVCC, or Multi-Version Concurrency Control.
Instead of locking data aggressively, PostgreSQL creates multiple versions of each record.
This means readers never block writers, and writers don’t block readers — allowing both performance and consistency to coexist.
So, in short, transactions guarantee correctness, and concurrency control guarantees cooperation — both are fundamental to a reliable database system
第十五页 （PART 03)
Now let’s take a look at PostgreSQL — one of the most powerful open-source databases in the world.
第十六页 （PostgreSQL: PROS AND CONS）
PostgreSQL has several clear advantages.
First, it’s free and open-source, which means you can use it in both academic and enterprise environments without any license cost.
Second, it’s feature-rich — it supports advanced SQL functions, ACID transactions, JSON data types, and even custom extensions.
This makes it extremely flexible for different use cases, from finance systems to web applications.
Third, it’s enterprise-grade and widely adopted in real production environments.
Many companies rely on PostgreSQL for mission-critical workloads because it’s stable, secure, and reliable.
And finally, it has an active community.
That means strong documentation, frequent updates, and a huge number of learning resources available online.
Of course, there are also some disadvantages.
PostgreSQL can be a bit complex to configure, and it has a steeper learning curve compared to simpler databases like MySQL.
In very write-heavy systems, it might also be a bit slower.
And finally, while tools like DBeaver or pgAdmin are available, PostgreSQL still lacks the polished GUI experience of some commercial systems.
So overall, PostgreSQL is an excellent choice when you need a powerful, reliable, and flexible database —
as long as you’re ready to spend a bit of time learning how to use it effectively.
第十七页 （How to use Postgresql: Environment Setup）
We’ll use graphic user interface DBeaver to interact with PostgreSQL visually. The set up process is simple. 
We provide the download link for both tools here. After downloading and installing them both, open dbeaver.
第十八页 （How to use Postgresql: Environment Setup）
Click the “Database Navigator” tab on the left side of the screen.
Right-click on the blank area and select “Create”.
From the drop down menu, choose “Connection”.
Click the PostgreSQL icon, enter the required connection information, and then 
click “Finish”.
Now we can operate on postgresql using Dbeaver.
第十九页 （PART 04）
Here are some example using PostgreSQL
第二十页 （Hands-on Practice: Table Management）
In this demo, we start with a simple users table.
where id is an auto-incrementing primary key.
username and email are both unique and not null.
status includes a check constraint limiting values to 'active', 'inactive', or 'banned'.
The script then demonstrates how to modify a table using ALTER TABLE — adding, dropping, or changing columns.
第二十一页 （Hands-on Practice: CRUD operations）
Next, we perform basic CRUD operations — Create, Read, Update, and Delete.
We insert new users, query them by condition and order, update their information, and finally delete records as needed.
There’s also an example of JOIN query showing how the users table can be connected to an orders table for richer analysis.
Together, these two scripts demonstrate the full life cycle of relational data management in PostgreSQL —
from defining structure to maintaining and manipulating the data in a controlled, consistent way.
第二十二页 （Hands-on Practice: Database Management）
Database management is also possible using postgresql
第二十三页 (Hands-on Practice: Index Management)
In this demo, we’re exploring how PostgreSQL manages indexes — one of the key ways it speeds up data retrieval.
(时间不够可以不讲后面的部分）
The script starts with a regular index on username, which helps the database quickly find users by name.
Then we define a unique index on email, ensuring every user has a distinct email address — adding both performance and integrity.
Next, there’s a partial index that only applies to active users.
This is more storage-efficient and still accelerates queries that filter by status = 'active'.
Finally, we create a composite index on both status and created_at, which is useful for queries that sort or filter by multiple conditions.
第二十四页 （Hands-on Practice: Views and Functions）
Still using similar user data described in the previous demo, in this demo, we explore three important database features: views, functions, and triggers — all using the users table as an example.
First, we create a view called v_active_users, which filters and displays only the active users.
It works like a virtual table — meaning we can query it just like a normal table, but it always reflects the most recent data.
Next, we define a function named get_user_count_by_status.
This function accepts a status as input, such as ‘active’ or ‘banned’, and returns the number of users that match that condition.
It’s a good example of how PostgreSQL supports procedural logic directly inside SQL.
Finally, we add a trigger function that automatically updates the updated_at column whenever a user record changes.
This is useful for maintaining audit trails or synchronization in real-world systems.
第二十五页 （Advanced Practice: Transaction management and concurrency control）
This script demonstrates how PostgreSQL handles transactions and concurrency control. （时间不够后面可以不讲）
We begin by selecting two accounts and then explicitly start a transaction using BEGIN.
第二十六页 （Advanced Practice: MVCC）
PostgreSQL ensures concurrency control through MVCC, or Multi-Version Concurrency Control. 
Here’s an example of how things work.
We begin by opening two separate sessions in DBeaver: Session 1 (S1) and Session 2 (S2).
In Session 1, we start a transaction and update Alice’s salary from 4000 to 5000 — but we don’t commit yet. Meanwhile, in Session 2, we run a SELECT on the same row.Even though the update has already happened in Session 1, Session 2 still sees the old value, because it’s reading from its own snapshot of the database.
Then, when Session 1 finally commits, the change is recorded , Session 2 reads again and now sees the new value, 5000.
This perfectly illustrates PostgreSQL’s MVCC model:
each transaction operates in isolation, with consistent data, without blocking others.
It’s one of the core reasons PostgreSQL can handle concurrent workloads so efficiently.
第二十七页 （Advanced Practice: Partitioned Table）
This script demonstrates how PostgreSQL implements table partitioning — it creates a main sales table divided into monthly partitions by date range, automatically routing data to the correct partition.
We won’t go into details here, but it’s mainly used to improve performance and manage large datasets efficiently.
第二十八页 （Hands-on Practice: Window functions）
This script demonstrates how to use window functions in PostgreSQL, allowing us to perform ranking, aggregation, and trend analysis — all within standard SQL, without needing separate analytical tools. (时间不够后面可以不讲）
It ranks employees by salary within each department, calculates each employee’s salary percentage of the department total, and computes a moving average of salary for local comparison.
First, we create a simple table employee_salary that stores employees, their departments, and salaries.
Then, using window functions, we analyze the data in three different ways.
In the first query, we calculate each employee’s rank within their department, using RANK() and DENSE_RANK().
This lets us compare salaries and identify who’s earning the most in each team.
Next, we compute the total salary per department and each employee’s percentage contribution to that total — this gives us a sense of how compensation is distributed within the group.
Finally, we use AVG() as a window function to calculate a moving average of salary, comparing each person’s salary to their nearby peers.
This is useful for spotting outliers or salary gaps within departments.
第二十九页 （python connection of progresql）
It is also possible to use python to connect postgresql. Make sure you have already installed the necessary libraries. As shown in this demo, the Python script connects to PostgreSQL, checks if a users table already exists, and create and print out the sample records.
第三十页 （SUMMARY）
OVERALL, database describes a set of effiecient managed data. As a relational databae, postgresql not only is Free and Open Source with rich features, it also serves as an enterprise grade tool with an active community. However, it takes time and practice to master. I hope that today’s presentation could serves as a guide for developer that may use postgresql as a future developing tool.
第三十一页（Q&A）
That’s our core content. Any questions so far?