import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-feedback-comments',
  templateUrl: './feedback-comments.component.html',
  styleUrls: ['./feedback-comments.component.scss']
})
export class FeedbackCommentsComponent {

  @Input()
  overview: string = "no";

}
