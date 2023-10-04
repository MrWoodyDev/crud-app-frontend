import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { PaginationResponse } from 'src/app/shared/models/paginator-response.model';
import { AppProductsService } from 'src/app/shared/services/app-products.service';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: PaginationResponse<Product> = new PaginationResponse<Product>();
  categoryId: string  = Guid.EMPTY;
  pageNumber: number = 1;
  pageSize: number = 10;

  constructor(private productsService : AppProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'] || Guid.EMPTY;
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.productsService.getProducts(this.pageNumber, this.pageSize, this.categoryId)
      .subscribe(
        (products) => {
          this.products = products;
          console.log(products);
        },
        (error) => {
          console.log(error)
        }
      );
  }
}
