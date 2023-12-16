import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UxReferenceSelectorItem} from "@netcracker/ux-ng2/reference-field";
import { CommonService } from 'src/app/common-service.service';

@Component({
  selector: 'app-support-score-form',
  templateUrl: './support-score-form.component.html',
  styleUrls: ['./support-score-form.component.scss']
})
export class SupportScoreFormComponent {

  public noOfBadges: number = 0;

  public _isGoldBadge: boolean = false;

  public _isSilverBadge: boolean = false;

  public _isFormVisible: boolean = false;


  public _description: string = "";
  public _items: UxReferenceSelectorItem[] = [
    {id: '1', text: 'Java'},
    {id: '2', text: 'Angular'},
    {id: '3', text: 'React'},
    {id: '5', text: 'Python'},
  ];
  supportScoreForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService){
    this.supportScoreForm = this.formBuilder.group({
      technologies: ['', Validators.required],
      rating: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required],
      brageId: ['', Validators.required]
    });
  }

  // public handleSwitch()

  public ngOnInit(): void {

  }

  public isBadgeSelected(event: any, key: string): void {
    if(key === 'gold' && event) {
      this._isSilverBadge = false;
    } 
    if(key === 'silver' && event) {
      this._isGoldBadge = false;
    }
  }

  openForm(): void {
    this._isFormVisible = true;
  }

  onFormSubmitAction(): void {
    this.supportScoreForm.controls["rating"].setValue(this.noOfBadges)
    console.log(this.supportScoreForm.value)
  }

  selectedStar(starsCount: number): void {
    this.noOfBadges = starsCount;
  }

  technologiesChanges(event: any){
    let technologies: any = [];
    if(event?.newValue?.length) {
      event.newValue.map((item: UxReferenceSelectorItem) => {
        technologies.push(item.text)
      })
      this.supportScoreForm.controls["technologies"].setValue(technologies.toString())
    }
  }

}
