import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books: any;
  categories: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      console.log(data);
      this.books = data;
    });

    this.http.get('/category').subscribe(data => {
      console.log(data);
      this.categories = data;
    });

  }

}
