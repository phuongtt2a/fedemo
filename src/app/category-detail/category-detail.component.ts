import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryDetailComponent implements OnInit {

  form: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  category = {};
  product = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: null
    });
  }

  ngOnInit() {
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

  saveProduct(id) {
    this.product['categoryId'] = id;
    this.http.post('/api/product', this.product)
      .subscribe(res => {
          //let id = res['_id'];
          //this.router.navigate(['/book-details', id]);
          this.router.navigate(['/category']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.product['image'] = reader.result.split(',')[1];
        this.form.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  clearFile() {
    this.form.get('image').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
