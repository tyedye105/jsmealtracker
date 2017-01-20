import { Component, Output, Input} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'cal-count',
  template: `
  <div class="entry" *ngFor="let currentMeal of childMealList | cal-calculator">
  <h3 (click)="mealEdit(currentMeal)">{{currentMeal.name}}</h3>
  <h4>Details:</h4>
  <h5>{{currentMeal.details}}</h5>
  <h4>Calories: {{currentMeal.calories}}</h4>
  <h5> Eaten on: {{currentMeal.logDate}}</h5>
  </div>
  `
})

export class CalCountComponent {
  @Input() childMealList: Meal[];

}
