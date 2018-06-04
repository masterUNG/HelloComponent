import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redcomponent',
  templateUrl: './redcomponent.component.html',
  styleUrls: ['./redcomponent.component.css']
})
export class RedcomponentComponent implements OnInit {

  nameRedComponent = 'Red Component';


  onClickRedComponent() {
    window.alert('You Click ' + this.nameRedComponent);
  }




  constructor() { }

  ngOnInit() {
  }

} // Main Class
