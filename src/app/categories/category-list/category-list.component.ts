import { Component, OnInit } from '@angular/core';
import { AppCategoriesService } from 'src/app/shared/services/app-categories.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = []

  constructor(private categoriesService: AppCategoriesService) { }

  ngOnInit(): void {
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
}
