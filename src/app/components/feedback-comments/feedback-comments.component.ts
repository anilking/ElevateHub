import {Component, Input} from '@angular/core';
import { CommonService } from 'src/app/common-service.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-feedback-comments',
  templateUrl: './feedback-comments.component.html',
  styleUrls: ['./feedback-comments.component.scss']
})
export class FeedbackCommentsComponent {

  public feedBackComments: any[] = [];

  @Input()
  overview: string = "no";

constructor(private commonService: CommonService, private dataService: DataService){

}

ngOnInit(): void {

  this.commonService.updateScore.subscribe((score) =>{
    score && this.feedBackComments.unshift(score);
  });

  this.getFeedbackComments();
}

getFeedbackComments(): void {
  let userEmail: string = "";
  this.dataService.userDetails$.subscribe((userDetails: any) => {
    userEmail = userDetails.email;
  })
  this.commonService.getFeedbackComments(userEmail).subscribe( (feedBackComments) => {
    if(feedBackComments.status === "success") {
      this.feedBackComments = feedBackComments.data || [];
      this.feedBackComments.map(comment => {
        comment.fillStars = Array.apply(null, Array(comment.rating));
        comment.emptyStars = comment.rating !== 5 ? Array.apply(null, Array(5 - comment.rating)) : [];
      })
    }
  })
}


}
