import {Component, Input, SimpleChanges} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import { CommonService } from 'src/app/common-service.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-velocity-summary-wedget',
  templateUrl: './velocity-summary-wedget.html',
  styleUrls: ['./velocity-summary-wedget.scss']
})
export class VelocitySummaryWedget {

  @Input()
  public selectedType: string = 'last2Months';

  public values = {
    tms: 0,
    ter:0,
    untracked: 0
  }


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

  perc: number = 0;

  constructor(private commonService: CommonService, private dataService: DataService){

  }

  updateBarchartOptions(labels:any, TMSList:any, TERList:any, untracked:any, value:any){
    this.values = value;
    this.perc = this.getRandomInt(80,100);
  }


  private getRandomInt (min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  ngOnInit(){
  }


}
