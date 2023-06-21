import {Component, OnInit} from '@angular/core';
import {Cart} from "../../shared/model/cart";
import {CartService} from "../service/cart/cart.service";
import {CartItem} from "../../shared/model/CartItems";
import {FoodService} from "../service/food/food.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
cart!:Cart;
constructor(private cartService:CartService,
            ) {
  this.setCart()
}
ngOnInit() {
}

  setCart(){
  this.cart = this.cartService.getCart()
}
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart()
}
changeQuantity(cartItem:CartItem, quantityToSting: string){
  const quantity = parseInt(quantityToSting);
  this.cartService.changeQuantity(cartItem.food.id, quantity )
}
}
