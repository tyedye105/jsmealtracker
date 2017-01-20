import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-new',
  template: `
  <button class="btn" (click)="newMealForm()">Log a new Meal</button>
  <div *ngIf="newMeal">
    <div class="inputForm">
      <h3> Enter the information of what you ate!</h3>
      <label>Name</label>
      <input #newName>
      <label>Details</label>
      <input #newDetails>
      <label>Calories</label>
      <input #newCalories>
      <label>Date dd-mm-yr</label>
      <input #newlogDate>
      <button class = "btn" (click)="addMeal(newName.value, newDetails.value, newCalories.value, newlogDate.value)"> Log it!</button>
      <button class = "btn" (click)="cancel()">Cancel</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  newMeal = null;

  newMealForm() {
    this.newMeal = true;
  }

  addMeal(name: string, details: string, calories: number, date: string) {
    var newMealToAdd: Meal = new Meal ( name, details, calories, date);
    this.newMealSender.emit(newMealToAdd);
    this.newMeal = null
  }

  cancel() {
    this.newMeal = null;
  }
}
