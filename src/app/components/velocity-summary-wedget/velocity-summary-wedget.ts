import {Component} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import { CommonService } from 'src/app/common-service.service';

@Component({
  selector: 'app-velocity-summary-wedget',
  templateUrl: './velocity-summary-wedget.html',
  styleUrls: ['./velocity-summary-wedget.scss']
})
export class VelocitySummaryWedget {
  public doughnutChartLabels: string[] = [
    'Download Sales',
  ];

  public _current!: number;

  public _total: number = 100;

  public velocityDetails: any = {};

  public _label: string = "Some label";
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

  constructor(private commonService: CommonService){

  }

  ngOnInit(){
    this.commonService.getVelocityScore().subscribe((velocityDetails) => {
      this.velocityDetails = velocityDetails;
      this._current = velocityDetails.TER;
    })
  }

}
