import {Component} from '@angular/core';
import {UxReferenceSelectorItem} from "@netcracker/ux-ng2/reference-field";

@Component({
  selector: 'app-support-score-form',
  templateUrl: './support-score-form.component.html',
  styleUrls: ['./support-score-form.component.scss']
})
export class SupportScoreFormComponent {

  public noOfBadges: number = 3;

  public _isGoldBadge: boolean = false;

  public _isSilverBadge: boolean = false;

  public _isFormVisible: boolean = false;

  public _description: string = "";
  public _items: UxReferenceSelectorItem[] = [
    {id: '1', text: 'Chevonne Margot'},
    {id: '2', text: 'Mathis Florine'},
    {id: '3', text: 'Philbert Samuel'},
    {id: '5', text: 'Clarissa Mariam Florine Gabriel Markes'},
    {id: '6', text: 'Vanessa Mariam', disabled: true},
  ];

  public ngOnInit(): void {

  }

  openForm(): void {
    this._isFormVisible = true;
  }

  onFormSubmitAction(): void {
    console.log("Submitted");
  }

}
