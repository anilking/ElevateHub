import {Component} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-support-score-wedget',
  templateUrl: './support-score-wedget.component.html',
  styleUrls: ['./support-score-wedget.component.scss']
})
export class SupportScoreWedgetComponent {
  public doughnutChartLabels: string[] = [
    'Download Sales',
  ];

  public _current: number = 40;

  public _total: number = 150;

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
}
