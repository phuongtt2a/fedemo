import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'image/jpg'
  })
};

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.http.get('/api/category').subscribe(data => {
      console.log(data);
      this.categories = (data as any[]);
    });
  }

  deleteProductCategory(id) {
    this.http.delete('/api/category/'+id)
      .subscribe(res => {
        this.categories = this.categories.filter(cat => cat._id !== id);
        // this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
