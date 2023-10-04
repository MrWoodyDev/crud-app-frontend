import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductsListComponent,
    AdminCategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
