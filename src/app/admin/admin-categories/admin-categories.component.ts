import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Category } from 'src/app/shared/models/category.model';
import { AppCategoriesService } from 'src/app/shared/services/app-categories.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: AppCategoriesService, private route: ActivatedRoute, private toasrt: ToastrService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(
      (categories) => {
        this.categories = categories;
        console.log(categories);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  removeCategory(id: string) {
    this.categoriesService.deleteCategory(id)
    .subscribe({
      next: (categoey) => {
        this.loadCategories();
        this.toasrt.success("Categoey has benn remove success!");
      },
      error: (err) => {
        this.toasrt.error(err.message);
      }
    })
  }
}
