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

