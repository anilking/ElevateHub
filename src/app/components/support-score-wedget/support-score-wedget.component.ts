import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-support-score-wedget',
  templateUrl: './support-score-wedget.component.html',
  styleUrls: ['./support-score-wedget.component.scss']
})
export class SupportScoreWedgetComponent {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ 'Gold', 'Silver' ];
  public pieChartDatasets = [ {
    data: [ 75, 25 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
