import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { AppCategoriesService } from 'src/app/shared/services/app-categories.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editCategoryRequest: Category = {
    id: '',
    name: ''
  }

  constructor(private caegoriesService: AppCategoriesService,  private toasrt: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.caegoriesService.getCategoryById(id)
          .subscribe({
            next: (response) => {
              this.editCategoryRequest = response;
            }
          })
        }
      }
    })
  }

  editCategory() {
    this.caegoriesService.putCategory(this.editCategoryRequest)
    .subscribe({
      next: (category) => {
        this.toasrt.success('Category has been update success');
        console.log(category);
      },
      error: (err) => {
        this.toasrt.error(err.message);
        console.log(err);
      }
    })
  }
}
