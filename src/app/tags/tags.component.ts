import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../../shared/model/tags";
import {FoodService} from "../service/food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() foodPageTags?: string[];
  @Input() justifyContent: string = "center";
  tags?: Tag[];

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTag();
  }
}
