import { MealService } from './meal.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'getMeal';

  meal: any;


  constructor(private mealService: MealService, private spinner: NgxSpinnerService) {}

  ngOnInit() {}


  getAMealAtRandom() {
    this.spinner.show();
    this.mealService.getMeal().subscribe(data => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.meal = data.meals[0];
        this.spinner.hide();
      }, 1000);
    });
  }

  getVideo(str) {
    return str.replace('watch?v=', 'embed/');
  }

}
