import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealListComponent }  from './meal-list.component';
import { MealEditComponent } from './meal-edit.component';
import { NewMealComponent } from './meal-new.component';
import { CalorieFilterPipe} from './calorieFilter.pipe';
import { CalCountComponent} from './cal-count.component';
import { CalCalculatorPipe} from './cal-calculator.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  MealListComponent,
                  MealEditComponent,
                  NewMealComponent,
                  CalorieFilterPipe,
                  CalCountComponent,
                  CalCalculatorPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
