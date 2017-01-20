import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorieFilter",
  pure: false
})

export class CalorieFilterPipe implements PipeTransform {
  transform(input: Meal[], calorieLimit) {
    var output: Meal[] = [];
    for(var i=0; i<input.length; i++){
      console.log(input[i].calories)
      if (input[i].calories <= calorieLimit){
        output.push(input[i]);
      }
    }
    return output;
  }
}
