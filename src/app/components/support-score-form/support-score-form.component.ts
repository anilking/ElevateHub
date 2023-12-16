import { Component } from '@angular/core';

@Component({
    selector: 'app-support-score-form',
    templateUrl: './support-score-form.component.html',
    styleUrls: ['./support-score-form.component.scss']
})
export class SupportScoreFormComponent {

    public noOfBadges: number = 3;

    public _isGoldBadge: boolean = false;

    public _isSilverBadge: boolean = false;

    public _isFormVisible : boolean = false;

    public _description: string = "";

    public ngOnInit(): void {

    }

    openForm(): void {
        this._isFormVisible = true;
    }

    onFormSubmitAction(): void {
        console.log("Submitted");
    }

}
