import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../type';
import { ProductForm } from '../product-form/product-form';

@Component({
  selector: 'app-product-db',
  imports: [FormsModule,CommonModule,ProductForm],
  templateUrl: './product-db.html',
  styleUrl: './product-db.css'
})
export class ProductDb {
  products: Product[] = [];
  editingIndex: number | null = null;
  editedProduct: Product | null = null;
favoriteProducts: Product[]=[];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  startEdit(index: number) {
    this.editingIndex = index;
    this.editedProduct = {...this.products[index] }; 
  }

  saveEdit() {
    if (this.editingIndex !== null && this.editedProduct) {
      this.products[this.editingIndex] = this.editedProduct;
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedProduct = null;
  }
  
  deleteProduct(index: number) {
    
    const deletedProduct = this.products[index]; 
  this.products.splice(index, 1);
  this.favoriteProducts = this.favoriteProducts.filter(
    p => p !== deletedProduct
  );
  }

  addToFavorites(product: Product) {
      product.isFav = true;
      this.favoriteProducts.push(product);
  }

  removeFromFavorites(product: Product) {
    product.isFav = false;
    this.favoriteProducts = this.favoriteProducts.filter(p => p.isFav !== false);
  }
}
