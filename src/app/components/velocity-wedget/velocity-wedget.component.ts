import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-velocity-wedget',
  templateUrl: './velocity-wedget.component.html',
  styleUrls: ['./velocity-wedget.component.scss']
})
export class VelocityWedgetComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'TER', 'LOE' ],
    datasets: [
      { data: [ 75 ], label: 'TER', backgroundColor: '#7551FF', hoverBackgroundColor: '#7551FF', hoverBorderColor: '#7551FF' },
      { data: [ 28 ], label: 'LOE', backgroundColor: '#5BABD5', hoverBackgroundColor: '#5BABD5', hoverBorderColor: '#5BABD5' }
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
