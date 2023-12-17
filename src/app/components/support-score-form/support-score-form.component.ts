import {Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UxReferenceSelectorItem} from "@netcracker/ux-ng2/reference-field";
import { CommonService } from 'src/app/common-service.service';

@Component({
  selector: 'app-support-score-form',
  templateUrl: './support-score-form.component.html',
  styleUrls: ['./support-score-form.component.scss']
})
export class SupportScoreFormComponent {

  @Output() updated = new EventEmitter<any>();

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

  public items =[
    {id: 'paswo323', text: 'Swamy'},
    {id: '2', text: 'Angular'},
    {id: '3', text: 'React'},
    {id: '5', text: 'Python'},
  ]
  supportScoreForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService){
    this.supportScoreForm = this.formBuilder.group({
      technologies: ['', Validators.required],
      rating: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required],
      badgeId: ['', Validators.required]
    });
  }

  // public handleSwitch()

  public ngOnInit(): void {

  }

  public isBadgeSelected(event: any, key: string): void {
    if(key === 'gold' && event) {
      this._isSilverBadge = false;
      this._isGoldBadge = true;
    }
    if(key === 'silver' && event) {
      this._isSilverBadge = true;
      this._isGoldBadge = false;
    }
  }

  openForm(): void {
    this._isFormVisible = true;
  }

  onFormSubmitAction(): void {
    if(this._isGoldBadge){
      this.supportScoreForm.controls["badgeId"].setValue(1)
    }else{
      this.supportScoreForm.controls["badgeId"].setValue(2)
    }
    this.supportScoreForm.controls["rating"].setValue(this.noOfBadges)
    const payload = {
      ...this.supportScoreForm.value,
      employeeId: JSON.parse(localStorage.getItem("UserDetails") || '{}').employeeId
    }
    this.commonService.submitSupportScore(payload).subscribe((score) =>{
      this.commonService.openSnackBar('Your score has been submitted successfully');  
    })
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
