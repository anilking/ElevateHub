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
      { data: [ 75 ], label: 'TER' },
      { data: [ 28 ], label: 'LOE' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
