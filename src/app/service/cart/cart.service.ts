import { Injectable } from '@angular/core';
import {Cart} from "../../../shared/model/cart";
import {Food} from "../../../shared/model/food";
import {CartItem} from "../../../shared/model/CartItems";

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();

  addCard(food:Food):void{
    let cartItem = this.cart.items.find( item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId:number){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }
  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(items => items.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
