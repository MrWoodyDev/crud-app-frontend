import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppCategoriesService } from 'src/app/shared/services/app-categories.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addCategoryRequest: Category = {
    id: null!,
    name: ''
  };

  constructor(private categoriesService: AppCategoriesService, private toasrt: ToastrService) { }

  ngOnInit(): void {
    this.addCategory
  }

  addCategory(from: NgForm) { 
    this.categoriesService.postCategory(this.addCategoryRequest)
    .subscribe({
      next: (category) => {
        this.resetForm(from);
        this.toasrt.success('Category has benn add success!');
        console.log(category);
      },
      error: (err) => {
        this.toasrt.error(err.message);
        console.log(err);
      }
    });
  }

  resetForm(from: NgForm){
    from.form.reset();
    this.addCategoryRequest = new Category(null!, '');
  }
}
