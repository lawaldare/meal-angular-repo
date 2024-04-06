import { MealService } from "./meal.service";
import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, delay, map, tap } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  meal$: Observable<any>;

  constructor(
    private mealService: MealService,
    private spinner: NgxSpinnerService
  ) {}

  getAMeal() {
    this.meal$ = this.mealService.getMeal().pipe(
      tap(() => this.spinner.show()),
      delay(1000),
      map((data) => {
        return {
          ...data.meals[0],
          strYoutube: data.meals[0].strYoutube.replace("watch?v=", "embed/"),
        };
      }),
      tap(() => this.spinner.hide())
    );
  }
}
