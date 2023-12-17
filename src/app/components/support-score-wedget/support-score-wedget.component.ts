import {Component} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import { CommonService } from 'src/app/common-service.service';
import { DataService } from 'src/app/data-service.service';
import _ from "lodash";

@Component({
  selector: 'app-support-score-wedget',
  templateUrl: './support-score-wedget.component.html',
  styleUrls: ['./support-score-wedget.component.scss']
})
export class SupportScoreWedgetComponent {
  public doughnutChartLabels: string[] = [
    "Gold", "Silver"
  ];

  public supportScore: any = {}

  public _current!: number;

  public _total!: number;

  public _label: string = "Gold";
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {data: [350, 450]}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  constructor(private commonService: CommonService, private dataService: DataService){

  }

  ngOnInit(){
    let userEmail: string = "";
    this.dataService.userDetails$.subscribe((userDetails: any) => {
      userEmail = userDetails.email;
    })
    this.commonService.getFeedbackComments(userEmail).subscribe((supportScore) => {
      this.supportScore = supportScore;
      if(supportScore.data.length){
        this._total = 5;
        const totalRating = supportScore.data.reduce((result: number, item: any) =>{
            result+= item.rating;
            return result;
        },0);
        this.supportScore.currentScore = (totalRating/(this._total * supportScore.data.length)) * 5;
        this.supportScore.currentScore = this.supportScore.currentScore.toFixed(2);
        const groupedData: any = _.groupBy(supportScore?.data, 'badgeId') || [];
          const goldRating = groupedData[1]?.reduce((result: number, item: any) =>{
              result += item.rating;
              return result;
          },0);
          supportScore.gold = goldRating || 0;
          const silverRating = groupedData[2]?.reduce((result: number, item: any) =>{
              result += item.rating;
              return result;
          },0);
          supportScore.silver = silverRating || 0;
          this._current = supportScore.currentScore;
      }
    })
  }

  
}
