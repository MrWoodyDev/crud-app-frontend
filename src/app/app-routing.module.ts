import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'products/:categoryId',
    component: ProductsListComponent
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesComponent
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'admin/categories/edit/:id',
    component: EditCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
