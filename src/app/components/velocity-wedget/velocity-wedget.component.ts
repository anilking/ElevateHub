import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-velocity-wedget',
  templateUrl: './velocity-wedget.component.html',
  styleUrls: ['./velocity-wedget.component.scss'],
})
export class VelocityWedgetComponent {
  @Input()
  public selectedType: string = 'currentMonth';

  public _barChartData: any;

  public ngOnChanges(change: SimpleChanges): void {
    if (change['selectedType']) {
      if (change['selectedType'].currentValue === 'currentMonth') {
        this._barChartData = { ...this.barChartDataForCurrentMonth };
      }
      if (change['selectedType'].currentValue === 'previousMonth') {
        this._barChartData = { ...this.barChartDataForPrevioustMonth };
      }
      if (change['selectedType'].currentValue === 'currentYear') {
        this._barChartData = { ...this.barChartDataForCurrentYear };
      }
    }
  }

  public ngOnInit(): void {
    this._barChartData = { ...this.barChartDataForCurrentMonth };
  }

  public barChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartDataForCurrentMonth: ChartData<'bar'> = {
    labels: ['05', '10', '15', '20', '25', '30'],
    datasets: [
      {
        data: [81, 56, 65, 59, 80, 55, 40],
        label: 'TMS',
        barPercentage: 0.5,
        borderRadius: 20,
        backgroundColor: '#7551FF',
      },
      {
        data: [48, 86, 27, 28, 90, 40, 19],
        label: 'TER',
        borderRadius: 20,
        barPercentage: 0.5,
        backgroundColor: '#5BABD5',
      },
    ],
  };

  public barChartDataForPrevioustMonth: ChartData<'bar'> = {
    labels: ['05', '10', '15', '20', '25', '30'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'TMS',
        barPercentage: 0.5,
        borderRadius: 20,
        backgroundColor: '#7551FF',
      },
      {
        data: [28, 48, 86, 27, 90, 40, 19],
        label: 'TER',
        borderRadius: 20,
        barPercentage: 0.5,
        backgroundColor: '#5BABD5',
      },
    ],
  };

  public barChartDataForCurrentYear: ChartData<'bar'> = {
    labels: ['05', '10', '15', '20', '25', '30'],
    datasets: [
      {
        data: [31, 56, 65, 59, 80, 55, 40],
        label: 'TMS',
        barPercentage: 0.5,
        borderRadius: 20,
        backgroundColor: '#7551FF',
      },
      {
        data: [37, 90, 28, 48, 86, 40, 19],
        label: 'TER',
        borderRadius: 20,
        barPercentage: 0.5,
        backgroundColor: '#5BABD5',
      },
    ],
  };
}
