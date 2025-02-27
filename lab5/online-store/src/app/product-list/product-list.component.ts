// product-list/product-list.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() removeProduct = new EventEmitter<Product>();
  @Output() likeProduct = new EventEmitter<Product>();

  onRemove(product: Product): void {
    this.removeProduct.emit(product);
  }

  onLike(product: Product): void {
    this.likeProduct.emit(product);
  }
}