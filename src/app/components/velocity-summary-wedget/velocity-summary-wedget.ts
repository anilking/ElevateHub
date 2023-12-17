import {Component, Input, SimpleChanges} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import { CommonService } from 'src/app/common-service.service';

@Component({
  selector: 'app-velocity-summary-wedget',
  templateUrl: './velocity-summary-wedget.html',
  styleUrls: ['./velocity-summary-wedget.scss']
})
export class VelocitySummaryWedget {

  @Input()
  public selectedType: string = 'last15Days';

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

  constructor(private commonService: CommonService){

  }

  public calculateValues(velocityDetails: any){
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
    this.perc = this.getRandomInt(80,100);
  }


  private getRandomInt (min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  ngOnInit(){
    this.getScore({"duration": this.selectedType});
  }

  public ngOnChanges(change: SimpleChanges): void {
    if (change['selectedType']) {
      this.getScore({"duration": change['selectedType'].currentValue})
    }
  }

  getScore(duretaionObj: any){
    this.commonService.getVelocityBarDetails(duretaionObj).subscribe((velocityDetails) => {
      this.velocityDetails = velocityDetails;
      this._current = velocityDetails.TER;
      this.calculateValues(this.velocityDetails);
    })
  }

}
