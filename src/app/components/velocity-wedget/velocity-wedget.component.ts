import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { CommonService } from 'src/app/common-service.service';

@Component({
  selector: 'app-velocity-wedget',
  templateUrl: './velocity-wedget.component.html',
  styleUrls: ['./velocity-wedget.component.scss'],
})
export class VelocityWedgetComponent {
  @Input()
  public selectedType: string = 'currentMonth';

  public _barChartData: any;

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

  public velocityDetails: any;

  constructor(private commonService: CommonService){

  }

  public ngOnInit(): void {
    this.commonService.getVelocityBarDetails(this.selectedType).subscribe((velocityDetails) => {
      this.velocityDetails = velocityDetails;
      this.getValues(velocityDetails);
    })
  }

  public ngOnChanges(change: SimpleChanges): void {
    if (change['selectedType']) {
      this.commonService.getVelocityBarDetails(change['selectedType'].currentValue).subscribe((velocityDetails) => {
        this.velocityDetails = velocityDetails;
        this.getValues(velocityDetails);
      })
    }
  }

  getValues(velocityDetails: any): any {
    const labels:any[] = [];
    const TERList: any[] = [];
    const TMSList: any[] = [];
    velocityDetails?.velocityDataSet?.map((item: any) => {
      labels.push(item.label);
      TMSList.push(item.TMS);
      TERList.push(item.TER);
    })
    this._barChartData = {
      labels: labels,
      datasets: [
        {
          data: TMSList,
          label: 'TMS',
          barPercentage: 0.5,
          borderRadius: 20,
          backgroundColor: '#7551FF'
        },
        {
          data: TERList,
          label: 'TER',
          borderRadius: 20,
          barPercentage: 0.5,
          backgroundColor: '#5BABD5'
        },
      ],
    };
  }
}
