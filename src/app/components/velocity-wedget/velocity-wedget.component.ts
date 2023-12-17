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
  public selectedType: string = 'last15Days';

  public _barChartData: any;

  public values = {
    tms: 0,
    ter:0,
    untracked: 0
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

  public velocityDetails: any;

  constructor(private commonService: CommonService){

  }

  public ngOnInit(): void {
    this.commonService.getVelocityBarDetails({"duration": this.selectedType}).subscribe((velocityDetails) => {
      this.velocityDetails = velocityDetails;
      this.getValues(velocityDetails);
    })
  }

  public ngOnChanges(change: SimpleChanges): void {
    if (change['selectedType']) {
      this.commonService.getVelocityBarDetails({"duration": change['selectedType'].currentValue}).subscribe((velocityDetails) => {
        this.velocityDetails = velocityDetails;
        this.getValues(velocityDetails);
      })
    }
  }

  getValues(velocityDetails: any): any {
    const labels:any[] = [];
    const TERList: any[] = [];
    const TMSList: any[] = [];
    const untracked: any[] = [];
    let obj:any = [];
velocityDetails?.data?.timesheet?.map((item: any) => {
    const label =   {
              "TMS": 0.5,
              "TER": item[1],
              "label": item[0],
              "UntrackedHrs": 0.5
            };
      obj.push(label);
    });

    velocityDetails?.data?.worklog?.map((item: any) => {
      const current = obj.find((it:any) => it.label == item[0]);
      if(current){
        current.TER = current.TER;
        current.TMS = item[1];
        current.UntrackedHrs = 0;
        current.label = current.label;
        obj = obj.map((it:any) => {
          if(it.label == current.label){
            return current;
          }
          return it;
        });
      }else{
        const label =   {
          "TMS": item[1],
          "TER": 0.5,
          "UntrackedHrs": 0.5,
          "label": item[0]
        };
      obj.push(label);
      }
      });

      velocityDetails?.data?.untrackedHours?.map((item: any) => {
        const current = obj.find((it:any) => it.label == item[0]);
        if(current){
          current.TER = current.TER;
          current.TMS = current.TMS;
          current.UntrackedHrs = item[1];
          current.label = current.label;
          obj = obj.map((it:any) => {
            if(it.label == current.label){
              return current;
            }
            return it;
          });
        }else{
          const label =   {
            "TMS": 0.5,
            "TER": 0.5,
            "UntrackedHrs": item[1],
            "label": item[0]
          };
        obj.push(label);
        }
        });


    obj?.map((item: any) => {
      labels.push(item.label);
      TMSList.push(item.TMS);
      TERList.push(item.TER);
      untracked.push(item.UntrackedHrs);
    })

    this.values = {
      tms: TMSList.reduce((result, item) => result+=item),
      ter:TERList.reduce((result, item) => result+=item),
      untracked: untracked.reduce((result, item) => result+=item)
    }
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
        {
          data: untracked,
          label: 'Untracked Hrs',
          barPercentage: 0.5,
          borderRadius: 30,
          backgroundColor: '#99BF4D'
        }
      ],
    };
  }
}
