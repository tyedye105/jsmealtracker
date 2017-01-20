import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calCalculator",
  pure: false
})

export class CalCalculatorPipe implements PipeTransform {
  transform(input: Meal[]) {
    var output: number
    for(var i=0; i<input.length; i++){
      output =  output + (input[i].calories)
      }
    return output;
  }
}
