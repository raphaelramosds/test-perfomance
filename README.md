# API's optimization

Firstly, please have a look at the [EER modelling](https://whimsical.com/hospital-LUBPnbw7kzAbDqbY1GWLKR) used by this application

## Concepts

### Scalability and perfomance improvement

Making changes in applications without affecting the user/client experience might be defined as scalability. Therefore, for achieve system's better scalability, it's necessary to accept changes and implement them in an agile time. Put simply, changes may not be uneasy to handle on your system. You can improve your system perfomance by means of a vertical (stronger hardware) or a horizontal (split the application on different machines, e.g, a *Load Balance* config) way.

# Perfomance techniques

## Cache

Cache is defined as a storage layer which provides fast access to a large amount of data. The ideia is essentialy allocate a intermediated database between your application and the main data store for retrieving data to the client without him needing to request this data again from you main DB.

> Here, we use Redis as a complement database between an Node.js API and a main database (SQLite)

## Clusters

Built-in NodeJS module that allows your to divide your application's processing amount of proccesses.

Basically, when a client request something, Node.js server put this request on the main process. But sometimes it may overload your software. So once you use clusters, it's possible to split the main process on two, three, ..., as many proccess (*workers*) as you want, provided that this amount doesn't go over your computer's number of kernels. That's paramount for your application's perfomance.
