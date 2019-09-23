import { MealService } from './meal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'getMeal';

  meal: any;


  constructor(private mealService: MealService) {}

  ngOnInit() {}


  getAMealAtRandom() {
    console.log('oops!');
    this.mealService.getMeal().subscribe(data => {
      this.meal = data.meals[0];
      console.log(this.meal);
    });
  }

  getVideo(str) {
    return str.replace('watch?v=', 'embed/');
  }

}
