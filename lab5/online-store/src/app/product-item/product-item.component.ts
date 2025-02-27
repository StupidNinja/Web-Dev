// product-item/product-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();

  onRemove(): void {
    this.remove.emit(this.product);
  }

  onLike(): void {
    this.like.emit(this.product);
  }
}