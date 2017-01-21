import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container well">
    <div class="jumbotron">
    <h1> Meal Tracker</h1>
    <p> Welcome to the meal tracker!  Need help trying to keep track of everything eaten today? This this app is for! </p>
    </div>
    <meal-list [childMealList]="masterMealList"  (clickSender)="mealEdit($event)"></meal-list>
    <hr>
    <meal-edit [childSelectedMeal]="selectedMeal" (finishedEditingSender)="finishedEditing()"></meal-edit>
    <hr>
    <meal-new (newMealSender)='addMeal($event)'></meal-new>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("apple", "they saw it keeps the dentist away", 100, "1-20-17"),
    new Meal("pbj", "the classic", 300, "1-20-17"),
    new Meal("chips", "I couldn't deny the crunchy goodness ", 390, "1-20-17")
  ]
  selectedMeal = null;
  newMeal = "placeholder";

  mealEdit(clickedMeal) {
    this.selectedMeal = clickedMeal
  }

  finishedEditing() {
    this.selectedMeal = null;
  }



  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }


}
