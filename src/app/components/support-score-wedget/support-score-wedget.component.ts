import {Component} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import { CommonService } from 'src/app/common-service.service';

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

  public _total: number = 100;

  public _label: string = "Gold";
  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  constructor(private commonService: CommonService){

  }

  ngOnInit(){
    this.commonService.getSupportScore().subscribe((supportScore) => {
      this.supportScore = supportScore;
      this._current = supportScore.gold;
    })
  }

  
}
