# HackCamp Angular 5/6

## Starting point

- This application is broken. After what you've learned so far, you should be able to fix the bugs before adding new features...

NB: The goal of this session is to learn about template syntax in Angular.

## TODO: Features to build

### List all books

Using the mocks in the `mocks folder`, display all the books

### Filter books by title and by category

Let's add a simple filter in our application that will filter our books by category and title.
The result of the filter should be unique.

## Breaking our apps into a set of components

Now that our application is working, let's split it into smaller components:

Let's create these 3 components:

- `<bs-header></bs-header>`
- `<bs-book-input></bs-book-input>`
- `<bs-books></bs-books>`

In `app.component.html`, we provided an idea of how you should split your application


## Services and Dependency Injection in Angular

[Documentation about Services](https://angular.io/guide/http)

Let's now remove the mock books and introduce a real/fake service. Inside the `app.module.ts`, uncomment `InMemoryWebApiModule`. Then by using the `HttpClientModule`, you should be able to fetch the data from our mock server.

[Documentation about Http Service](https://angular.io/guide/http)

All services are located inside the `services folder`.

Implement the following methods: `getBooks` and `getBook` in `books.service.ts`.

Implement the following methods: `search` using the `search.service.ts`.