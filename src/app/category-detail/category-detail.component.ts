import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryDetailComponent implements OnInit {

  category = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log('ngOnInit????????????????????????????????????');
    console.log(this.route.snapshot.params['id']);
    console.log('end.......');
    this.getProductCategory(this.route.snapshot.params['id']);
  }

  getProductCategory(id) {
    this.http.get('api/category/'+id).subscribe(data => {
      this.category = data;
    });
  }

  deleteProductCategory(id) {
    this.http.delete('api/category/'+id)
      .subscribe(res => {
          this.router.navigate(['/category']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
