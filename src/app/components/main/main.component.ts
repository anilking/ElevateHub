import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sideMenuItems = [
    { 
      "icon": "icon-globe",
      "title": "Overview",
      "url": '/overview'
    }
  ]
    
}
