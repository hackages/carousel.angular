import { Component } from "@angular/core";
import { books as mockBooks } from "./mocks/books";
import { Book } from "./models/book";

@Component({
  selector: "app-bookstore",
  styleUrls: ["app.component.css"],
  templateUrl: "app.component.html",
})
export class AppComponent {
  title = "Bookstore by Hackages";
  books: Book[] = mockBooks; // Use mock data

  search(term) {
   // Implement the search function 
  }
}
