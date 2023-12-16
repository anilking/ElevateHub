import {Component} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from 'chart.js';

@Component({
  selector: 'app-velocity-wedget',
  templateUrl: './velocity-wedget.component.html',
  styleUrls: ['./velocity-wedget.component.scss']
})
export class VelocityWedgetComponent {
  public barChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'TMS',
        barPercentage: 0.5,
        borderRadius: 20,
        backgroundColor: '#7551FF'
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'TER',
        borderRadius: 20,
        barPercentage: 0.5,
        backgroundColor: '#5BABD5'
      },
    ],
  };
}
