import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Meal Tracker</h1>
  <p> Welcome to the meal tracker!  Need help trying to keep track of everything eaten today? This this app is for! </p>
  <br>
  <h2> Food eaten on {{date}} </h2>
  <br>
  <p> Food 1, desc: shouldn't have eaten that, 345 cal, 1-20-17</p>
  <br>
  <p> Food 2, desc: worth it, 545 cal, 1-20-17</p>
  <br>
  <p> Food 3, desc: I need to learn how to cook..., 745 cal, 1-20-17</p>

  `
})

export class AppComponent {}
