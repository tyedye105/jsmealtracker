import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  template: `
  <div *ngIf="childSelectedMeal">
    <div class="inputForm">
      <h3>Edit entry for {{childSelectedMeal.name}}</h3>
      <h6>use this feature responsibly!</h6>
      <label>Meal Name</label>
      <input [(ngModel)]="childSelectedMeal.name">
      <label>Meal details</label>
      <input [(ngModel)]="childSelectedMeal.details">
      <label>Calories</label>
      <input [(ngModel)]="childSelectedMeal.calories">
      <label>Date eaten</label>
      <input [(ngModel)]="childSelectedMeal.logDate">
      <button class="btn" (click)="finishedEditing()">Done</button>
      <button class="btn" (click)="cancel()">Cancel</button>
    </div>
  </div>
  `
})

export class MealEditComponent {
@Input() childSelectedMeal: Meal;
@Output() finishedEditingSender = new EventEmitter();

finishedEditing() {
  this.finishedEditingSender.emit();
  }
cancel() {
  this.childSelectedMeal = null;
}

}
