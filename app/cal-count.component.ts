import { Component, Output, Input} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'cal-count',
  template: `
  <h3> {{totalCal}} Calories consumed today!</h3>
  `
})

export class CalCountComponent {
  @Input() childMealList: Meal[];
  totalCal: number = 500

  childMeals: Meal[];
  for(var child of children) {
    console.log();
  }


  }
}
