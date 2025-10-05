import { CommonModule } from '@angular/common';
import { Component,EventEmitter ,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
type Product={
name: string;
price: number;
category: string; 
}
@Component({
  selector: 'app-product-dash-board',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-dash-board.html',
  styleUrl: './product-dash-board.css'
})
export class ProductDashBoard {
  @Output() sendDataEvent = new EventEmitter<Product[]>();
products:Product[] = [];
name:string='';
price:number=0;
category:string='';
favArr:Product[]=[];

AddProduct(){
  
this.products.push({
        name: this.name,
        price: this.price,
        category: this.category
      })

      this.sendDataEvent.emit(this.products);
}

DeleteProduct(product:any){
this.products=this.products.filter((p)=>{
  return p.name!=product.name;
})
}
AddFav(product:any){
  this.favArr.push(product);

}
}
