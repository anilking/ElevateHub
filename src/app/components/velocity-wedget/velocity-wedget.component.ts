import {Component} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from 'chart.js';
import { CommonService } from 'src/app/common-service.service';

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

  public barChartData!: ChartData<'bar'>;

  public velocityDetails: any;

  constructor(private commonService: CommonService){

  }

  ngOnInit(){
    this.commonService.getVelocityDetails().subscribe((velocityDetails) => {
      this.velocityDetails = velocityDetails;
      this.getValues(velocityDetails);
    })
  }

  getValues(velocityDetails: any): any {
    const labels:any[] = [];
    const TERList: any[] = [];
    const TMSList: any[] = [];
    velocityDetails?.velocityDataSet.map((item: any) => {
      labels.push(item.label);
      TMSList.push(item.TMS);
      TERList.push(item.TER);
    })
    this.barChartData = {
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
