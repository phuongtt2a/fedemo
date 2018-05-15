import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const appRoutes: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
    data: { title: 'Category List' }
  },
  {
    path: 'category/detail/:id',
    component: CategoryDetailComponent,
    data: { title: 'Category Details' }
  },
  {
    path: 'category/new',
    component: CategoryCreateComponent,
    data: { title: 'Create Category' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/category',
    pathMatch: 'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CategoryCreateComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
