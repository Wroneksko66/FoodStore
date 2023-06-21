import {Component, OnInit} from '@angular/core';
import {FoodService} from "../service/food/food.service";
import {Food} from "../../shared/model/food";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
        if (params['searchTerm']) {
          this.foods = this.foodService.getFoodBySearchTerm(params['searchTerm']);

        }
        else if(params['tag']){
          this.foods = this.foodService.getAllFoodsByTag(params['tag'])
        }
        else
          this.foods = this.foodService.getAll()

      }
    )
  }
}


