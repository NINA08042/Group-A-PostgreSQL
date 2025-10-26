---
Title: "PostgreSQL Presentation"
author: >
  Group A — 
  Jianing Xue B01812701 | Xinrui Gao B01819974 | Weixue Kong B01819838 | Fang Tang B01814427
---

# PostgreSQL Presentation

Welcome to our presentation on PostgreSQL.

## Table of Contents
- [Part 01: What is a Database?](#part-01-what-is-a-database)
- [Part 02: Relational Database & PostgreSQL](#part-02-relational-database--postgresql)
- [Part 03: Why PostgreSQL](#part-03-why-postgresql)
- [Part 04: Hands-on Practice](#part-04-hands-on-practice)
- [Summary](#summary)
- [Q&A](#qa)

---

## Slide 1
![Slide 1](/Group-A-PostgreSQL/images/slide1.png)

Postgresql is one of the most popular databases. And the cool thing about it is that it is **open source, robust, high performance**, and it comes with a lot of great features.

## Slide 2
![Slide 2](/Group-A-PostgreSQL/images/slide2.png)
Presentation will be divided into four main parts.

## Slide 3
![Slide 3](/Group-A-PostgreSQL/images/slide3.png)

PART 01  
What is a Database?


## Slide 4
![Slide 4](/Group-A-PostgreSQL/images/slide4.png)
A database system is a structured collection of related data items that is stored on secondary storage devices.

And it features rapid access and manipulation of the data.  Basically, aside of storing data, a database facilitates data management.


## Slide 5
![Slide 5](/Group-A-PostgreSQL/images/slide5.png)

This is done by a database management system or **DBMS**.

It ensures data integrity, security, and efficient organization of information. Here we got a picture that shows what a typical relational database looks like. This kind of databases structured in tabular form. 


## Slide 6
![Slide 6](/Group-A-PostgreSQL/images/slide6.png)

**Databases can be divided into two different types.** 

First, ***relational database***. Postgresql, mysql and oracle are all relational databases. This kind of database organizes data into rows and columns, or as stated before, in tabular form. 

Then there are **non-relational databases**, which are also called **NoSQL** databases. 
There are four types of NoSQl databases, each tailored to specific use. 

The ***document store*** is ideal for semi-structured data, where each document is a self contained unit with a flexible structure. For example, a blog platform stores a post as a document with fields like. title: Introduction to databases author: Jane Doe content:...

Meanwhile, the ***key value stores*** treat each data item as a unique key paired with a value. Kind of like a dictionary, easy to look up and performs at high speed.

***Graph databases***, on the other hand, focus on relationships, storing data as nodes which are entities and edges which are relations, usually used in handling interconnected data. 

***Column-family stores*** organized data into columns rather than rows, enabling efficient storage and retrieval for large-scale analytical queries.


## Slide 7
![Slide 7](/Group-A-PostgreSQL/images/slide7.png)
**Postgresql**, as previously stated, is a relational database. 

## Slide 8
![Slide 8](/Group-A-PostgreSQL/images/slide8.png)

The relational model for database management is an approach to logically represent and manage the data stored in a database. 

In this model, the data is organized into a collection of two-dimensional inter-related tables, also known as relations. Each relation is a collection of columns and rows, where the column represents the properties of an entity and the rows (or tuples) represent a set of attribute values that describe a particular entity. 

Here we have a simple example of a relational model, where each row represents a student, and each column is an attribute of the student such as name or age. And the studentID which is specific to each student, is defined as the primary key.


## Slide 9
![Slide 9](/Group-A-PostgreSQL/images/slide9.png)

In database management, to ensure the data is accurate, consistent and reliable, we enable a set of rules called integrity constraints.  These constraints must be true for all instance in the database.

The domain constraints ensure the values stored in a column or attribute are valid and within a specific range or domain.  In simple words, the domain constraints define what type of data is allowed in a column and restrict invalid data entry. For instance, in the previous example of students, the attribute name allows only text or string entries and cannot be NULL.


## Slide 10
![Slide 10](/Group-A-PostgreSQL/images/slide10.png)
The entity integrity constraints ensure that each tuple or row of a table is uniquely identifiable by a primary key that can not be null or repeated. 

It is important to notices that this constraint applies to a single table to ensure the integrity of the data within that specific entity.

## Slide 11
![Slide 11](/Group-A-PostgreSQL/images/slide11.png)
Referential integrity constraints are rules that ensure relationships between tables remain consistent. They enforce that a foreign key in one table must either match a value in the referenced primary key of another table or be NULL. This guarantees the logical connection between related tables in a relational database.

In this example, the attribute course number in the student table is a foreign key that served as a primary key in the course table. The last entry of course number is not allowed because it is not present in course table.


## Slide 12
![Slide 12](/Group-A-PostgreSQL/images/slide12.png)

The relational database has properties that enable reliable transaction processing called **ACID**.
It stands for **atomicity, consistency, isolation and durability**.

***Atomicity*** means that all changes to data are performed as if they were a single, indivisible operation.
Either everything happens, or nothing happens at all.
If one part of the transaction fails — for example, if you’re transferring money and the debit succeeds but the credit doesn’t — the database will roll everything back, as if the transaction never occurred.
This **“all-or-nothing” **behavior is what protects data from partial updates.

Next,***Consistency***.

***Consistency*** ensures that the data remains valid and logical from the beginning of the transaction to the end.

The database enforces all the integrity rules — primary keys, foreign keys, check constraints — so that no transaction can bring the data into an invalid state.

***Isolation*** means that the intermediate state of a transaction is invisible to others.
This one is especially important when multiple users are working at the same time.

In other words, when several transactions run concurrently, they appear to execute one after another — as if they were serialized. This prevents issues like dirty reads, non-repeatable reads, or phantom reads, depending on the isolation level the system enforces. 

***Durability*** ensures that once a transaction is successfully completed, its changes are permanent.

Even if the system crashes right after the commit, the data remains safe.

This is achieved through mechanisms like write-ahead logging — before any data is committed, it’s written to disk in a durable transaction log.

When the system restarts, the database can use this log to recover to a consistent state.


## Slide 13
![Slide 13](/Group-A-PostgreSQL/images/slide13.png)
A transaction is basically a group of database operations that act as a single unit — either all succeed or all fail.
It guarantees consistency through the ACID principles we discussed earlier.

However, in real systems, we often have many users or applications accessing the same data at the same time.

That’s where concurrency control comes in — it ensures that transactions can run concurrently without corrupting the data.


## Slide 14
![Slide 14](/Group-A-PostgreSQL/images/slide14.png)

In PostgreSQL, this is achieved through MVCC, or Multi-Version Concurrency Control.

Instead of locking data aggressively, PostgreSQL creates multiple versions of each record.

This means readers never block writers, and writers don’t block readers — allowing both performance and consistency to coexist.

So, in short, transactions guarantee correctness, and concurrency control guarantees cooperation — both are fundamental to a reliable database system。


## Slide 15
![Slide 15](/Group-A-PostgreSQL/images/slide15.png)

PART 03 — Why PostgreSQL

## Slide 16
![Slide 16](/Group-A-PostgreSQL/images/slide16.png)
***Advantages***.

First, it’s **free and open-source**, which means you can use it in both academic and enterprise environments without any license cost.


Second, it’s **feature-rich** — it supports advanced SQL functions, ACID transactions, JSON data types, and even custom extensions. This makes it extremely flexible for different use cases, from finance systems to web applications.


Third, it’s **enterprise-grade and widely adopted in real production environments**. Many companies rely on PostgreSQL for mission-critical workloads because it’s stable, secure, and reliable.

And finally, it has an **active community**. That means strong documentation, frequent updates, and a huge number of learning resources available online.


***Disadvantages***.

PostgreSQL can be a bit **complex to configure**, and it has a steeper learning curve compared to simpler databases like MySQL. In very write-heavy systems, it might also be a bit slower.

And finally, while tools like DBeaver or pgAdmin are available, PostgreSQL still **lacks the polished GUI experience** of some commercial systems.

So overall, PostgreSQL is an **excellent choice** when you need a powerful, reliable, and flexible database — as long as you’re ready to spend a bit of time learning how to use it effectively.


## Slide 17
![Slide 17](/Group-A-PostgreSQL/images/slide17.png)

We’ll use graphic user interface DBeaver to interact with PostgreSQL visually. The set up process is simple. 

We provide the download link for both tools here. After downloading and installing them both, open dbeaver.

Tools:

DBeaver (GUI): https://dbeaver.io/download/

PostgreSQL 17/18 (Core DBMS): https://www.postgresql.org/download/




## 🎥 Slide 18 (Video)
<video src="/Group-A-PostgreSQL/videos/slide18.mp4" controls></video>
**Topic:** Environment Setup Demo

Click the “Database Navigator” tab on the left side of the screen.

Right-click on the blank area and select “Create”.

From the drop down menu, choose “Connection”.

Click the PostgreSQL icon, enter the required connection information, and then 
click “Finish”.

Now we can operate on postgresql using Dbeaver.


## Slide 19
![Slide 19](/Group-A-PostgreSQL/images/slide19.png)

Here are some example using PostgreSQL


## 🎥 Slide 20 (Video)
<video src="/Group-A-PostgreSQL/videos/slide20.mp4" controls></video>
**Topic:** Table Management

In this demo, we start with a simple users table, where id is an auto-incrementing primary key.
username and email are both unique and not null.

Status includes a check constraint limiting values to 'active', 'inactive', or 'banned'.

The script then demonstrates how to modify a table using ALTER TABLE — adding, dropping, or changing columns.

## 🎥 Slide 21 (Video)
<video src="/Group-A-PostgreSQL/videos/slide21.mp4" controls></video>
**Topic:** CRUD Operations

Next, we perform basic CRUD operations — **Create, Read, Update, and Delete**.

We insert new users, query them by condition and order, update their information, and finally delete records as needed.

There’s also an example of JOIN query showing how the users table can be connected to an orders table for richer analysis.

Together, these two scripts demonstrate the full life cycle of relational data management in PostgreSQL — from defining structure to maintaining and manipulating the data in a controlled, consistent way.

## 🎥 Slide 22 (Video)
<video src="/Group-A-PostgreSQL/videos/slide22.mp4" controls></video>
**Topic:** Database Management
Database management is also possible using postgresql
This SQL script is used to manage PostgreSQL databases: it first deletes any existing database named **mydb**, then creates a new one with UTF-8 encoding, U.S. English locale, and no connection limit under the postgres owner; it also includes optional commands to connect to the new database, list all databases, and remove an old database named **olddb** if it exists.

## 🎥 Slide 23 (Video)
<video src="/Group-A-PostgreSQL/videos/slide23.mp4" controls></video>
**Topic:** Transactions & Concurrency

This script demonstrates how PostgreSQL handles transactions and concurrency control. 

We begin by selecting two accounts and then explicitly start a transaction using **BEGIN**.

Inside the transaction, we transfer **100 units** — one account decreases, the other increases.

After verifying the balances, we can choose to **COMMIT**, making the changes permanent, or ROLLBACK if we want to undo everything.


## 🎥 Slide 24 (Video)
<video src="/Group-A-PostgreSQL/videos/slide24.mp4" controls></video>
**Topic:** MVCC

PostgreSQL ensures concurrency control through MVCC, or **Multi-Version Concurrency Control**. 

Here’s an example of how things work.

We begin by opening two separate sessions in DBeaver: Session 1 (S1) and Session 2 (S2).

In Session 1, we start a transaction and update Alice’s salary **from 4000 to 5000** — but we **don’t commit yet**. 

Meanwhile, in Session 2, we run a **SELECT** on the same row.Even though the update has already happened in Session 1, Session 2 still sees the old value, because it’s reading from its own snapshot of the database.

Then, when Session 1 finally commits, the change is recorded , Session 2 reads again and now sees the new value, 5000.

This perfectly illustrates PostgreSQL’s MVCC model:
each transaction operates in isolation, with consistent data, without blocking others.

It’s one of the core reasons PostgreSQL can handle concurrent workloads so efficiently.


## 🎥 Slide 25 (Video)
<video src="/Group-A-PostgreSQL/videos/slide25.mp4" controls></video>
**Topic:** Partitioned Tables

This script demonstrates how PostgreSQL implements table partitioning — it creates a main sales table divided into monthly partitions by date range, automatically routing data to the correct partition.

## 🎥 Slide 26 (Video)
<video src="/Group-A-PostgreSQL/videos/slide26.mp4" controls></video>
**Topic:** Python Connection

It is also possible to use python to connect postgresql. Make sure you have already installed the necessary libraries. As shown in this demo, the Python script connects to PostgreSQL, checks if a users table already exists, and create and print out the sample records.

## Slide 27
![Slide 27](/Group-A-PostgreSQL/images/slide27.png)

OVERALL, database describes a set of effiecient managed data. 

As a relational databae, postgresql not only is **Free and Open Source** with rich features, it also serves as an enterprise grade tool with an active community.

However, it takes time and practice to master. I hope that today’s presentation could serves as a guide for developer that may use postgresql as a future developing tool.

## Slide 28
![Slide 28](/Group-A-PostgreSQL/images/slide28.png)
That’s core content. 
