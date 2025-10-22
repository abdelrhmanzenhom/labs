import { Component,EventEmitter, Output } from '@angular/core';
import { Product } from '../../../type';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  @Output() NewProduct = new EventEmitter<Product>();
  products:Product[] = [];
name:string='';
price:number=0;
category:string='';
isFav:boolean=false;

AddProduct(){
  
 const newProduct: Product = {
      name: this.name,
      price: this.price,
      category: this.category,
      isFav: false
    };

    this.NewProduct.emit(newProduct);
    this.name = '';
    this.price = 0;
    this.category = '';
}

}
