import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  productCategory = {};
  form: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: null
    });
  }

  ngOnInit() {
  }

  saveProductCategory() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>category');
    this.http.post('/category', this.productCategory)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
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
        console.log('.......................................... 22222222');
        console.log(this.productCategory);
        this.productCategory['image'] = reader.result.split(',')[1];
        console.log(this.productCategory);
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
