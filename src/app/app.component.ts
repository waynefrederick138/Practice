import { Component } from '@angular/core';


// @Component is  a function that gets an object passed in
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) // no semi-colon here because it's decorating the AppComponent Class
// The class for the view
export class AppComponent {
title = 'MyGunCard';
}


