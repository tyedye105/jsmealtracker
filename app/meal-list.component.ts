import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div class="col-md-6">
    <h2> Food eaten on {{month}}-{{day}}-{{year}}! </h2>
    </div>
  </div>
  <label> Filter entries by amount of calories</label>
  <select (change)="updateCalorieLimit($event.target.value)">
    <option value=200> 200 calories or less </option>
    <option value=400 selected> 400 calories or less </option>
    <option value=600> 600 calories or less </option>
    <option value=800> 800 calories or less </option>
    <option value=3000> no limit </option>
  </select>
  <div class="entryDisplay">
    <div class="entry" *ngFor="let currentMeal of childMealList | calorieFilter : calorieLimit">
    <h3 (click)="mealEdit(currentMeal)">{{currentMeal.name}}</h3>
    <h4>Details:</h4>
    <h5>{{currentMeal.details}}</h5>
    <h4>Calories: {{currentMeal.calories}}</h4>
    <h5> Eaten on: {{currentMeal.logDate}}</h5>
    </div>
  </div>

  `
})

export class MealListComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  calorieLimit: number = 400;

  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  updateCalorieLimit(limit) {
    this.calorieLimit = limit;
  }

  mealEdit(clickedMeal) {
    this.clickSender.emit(clickedMeal);
  }
 }
