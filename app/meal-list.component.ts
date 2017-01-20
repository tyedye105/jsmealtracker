import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h2> Food eaten on {{month}}-{{day}}-{{year}}! </h2>
  <div *ngFor="let currentMeal of childMealList">
  <h3>{{currentMeal.name}}</h3>
  <h4>Details:</h4>
  <h5>{{currentMeal.details}}</h5>
  <h4>Calories: {{currentMeal.calories}}</h4>
  <h5> Eaten on: {{currentMeal.logDate}}</h5>

  <button class='btn' (click)="mealEdit(currentMeal)">Edit logged Meal</button>
  </div>

  `
})

export class MealListComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  mealEdit(clickedMeal) {
    this.clickSender.emit(clickedMeal);
  }
 }
