import {Component, Input} from '@angular/core';
import { CommonService } from 'src/app/common-service.service';

@Component({
  selector: 'app-feedback-comments',
  templateUrl: './feedback-comments.component.html',
  styleUrls: ['./feedback-comments.component.scss']
})
export class FeedbackCommentsComponent {

  public feedBackComments: any[] = [];

  @Input()
  overview: string = "no";

constructor(private commonService: CommonService){

}

ngOnInit(): void {
  this.getFeedbackComments();
}

getFeedbackComments(): void {
  this.commonService.getFeedbackComments().subscribe( (feedBackComments) => {
    this.feedBackComments = feedBackComments;
    this.feedBackComments.map(comment => {
      comment.fillStars = Array.apply(null, Array(comment.rating));
      comment.emptyStars = comment.rating !== 5 ? Array.apply(null, Array(5 - comment.rating)) : [];
    })
  })
}


}
