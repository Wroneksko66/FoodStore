import { Component } from '@angular/core';
import {Food} from "../../shared/model/food";
import {FoodService} from "../service/food/food.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../service/cart/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!:Food;
  constructor(private foodService:FoodService,
              private activateRoute: ActivatedRoute,
              private router:Router,
              private cartService:CartService) {
    activateRoute.params.subscribe((params) =>{
      if(params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }
addToCart(){
    this.cartService.addCard(this.food);
    this.router.navigateByUrl('/cart-page')
}
}
