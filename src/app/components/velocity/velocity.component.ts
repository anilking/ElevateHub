import { Component } from '@angular/core';
import { UxReferenceSelectorItem } from '@netcracker/ux-ng2/reference-field';

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.scss'],
})
export class VelocityComponent {
  selectedMenuItem: string = 'currentMonth';
  public _items: UxReferenceSelectorItem[] = [
    { id: '1', text: 'Project1' },
    { id: '2', text: 'Project2' },
    { id: '3', text: 'Project3' },
    { id: '4', text: 'Project4' },
  ];

  public _empitems: UxReferenceSelectorItem[] = [
    { id: '1', text: 'Naveen Kumar' },
    { id: '2', text: 'Anil Kumar' },
    { id: '3', text: 'Swamy Rao' },
    { id: '4', text: 'Hari Krishna' },
  ];

  public handleClick(type: string) {
    this.selectedMenuItem = type;
  }
  public handleProjectChange(value: any) {
    console.log(value);
  }
  public handleEmpChange(value: any) {
    console.log(value);
  }
}
