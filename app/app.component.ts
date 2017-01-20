import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Meal Tracker</h1>
    <p> Welcome to the meal tracker!  Need help trying to keep track of everything eaten today? This this app is for! </p>
    <br>
    <h2> Food eaten on current date! </h2>
    <div *ngFor="let currentMeal of masterMealList">
    <h3>{{currentMeal.name}}</h3>
    <h4>Details:</h4>
    <h5>{{currentMeal.details}}</h5>
    <h4>Calories: {{currentMeal.calories}}</h4>
    <h5> Eaten on: {{currentMeal.logDate}}</h5>
    </div>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("apple", "they saw it keeps the dentist away", 100, "1-20-17"),
    new Meal("pbj", "the classic", 300, "1-20-17"),
    new Meal("chips", "I couldn't deny the crunchy goodness ", 390, "1-20-17")
  ]
}
