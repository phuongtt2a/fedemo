import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'image/jpg'
  })
};

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  categories: any;
  images = {};

  constructor(private http: HttpClient, private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.http.get('/category').subscribe(data => {
      console.log(data);
      this.categories = data;

      // for (let category of this.categories) {
      //   this.http.get('/image/' + category.imageUrl, httpOptions).subscribe(res => {
      //     console.log('$$$$$$$$$$$$$$$$$');
      //     console.log(res['data'].toString('base64'));
      //     this.images[category.imageUrl] = this._DomSanitizationService.bypassSecurityTrustUrl("data:image/jpg;base64," + res['data'].toString('base64'));
      //   })
      // }
    });

  }


}
