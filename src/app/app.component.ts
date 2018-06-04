import { Component } from '@angular/core';
import {RedcomponentComponent} from './redcomponent/redcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  entryComponents: [RedcomponentComponent]
})
export class AppComponent {

  nameComponent = 'Main Component';



} // Main Class
