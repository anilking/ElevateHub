import { Component, ViewChild } from '@angular/core';
import { UxReferenceSelectorItem } from '@netcracker/ux-ng2/reference-field';
import { CommonService } from 'src/app/common-service.service';
import { DataService } from 'src/app/data-service.service';
import { VelocityWedgetComponent } from '../velocity-wedget/velocity-wedget.component';
import { VelocitySummaryWedget } from '../velocity-summary-wedget/velocity-summary-wedget';

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.scss'],
})
export class VelocityComponent {
  selectedMenuItem: string = 'last15Days';

  public values = {
    tms: 0,
    ter:0,
    untracked: 0
  }

  public params:any ={
    employeeId:null,
    projectCode: null,
    duration:"last15Days"
  }

  @ViewChild("velocityWidget")
  public velocityWidget: VelocityWedgetComponent;


  @ViewChild(VelocitySummaryWedget)
  public velocitySummaryWidget: VelocitySummaryWedget;

  public usersList: UxReferenceSelectorItem[] = [
    {id: 'haor1122', text: 'Hari Brahmendra Oruganti'},
    {id: 'nach0523', text: 'Naveen Kumar'},
    {id: 'pasw0323', text: 'Pasupaleti Swamy'}
  ];

  public projectsList: UxReferenceSelectorItem[] = [
    { id: '1', text: 'CLOUDJPG' },
    { id: '2', text: 'VO MS' },
    { id: '3', text: 'CLOUDSCT' },
    { id: '4', text: 'NTT UI' },
  ];

  public handleClick(type: string) {
    this.selectedMenuItem = type;
    this.params.duration = type;
    this.getData()
  }
  public handleProjectChange(value: any) {
    this.params.projectCode = value.newValue[0]?.id;
    this.getData()
  }

  public handleEmpChange(value: any) {
    this.params.employeeId = value.newValue[0]?.id;
    this.getData()
  }

  user: any = {};

  constructor(private dataService: DataService, private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.getData();
    this.dataService.userDetails$.subscribe(userDetails => {
      this.user = userDetails;
    })
  }

  getData(){
    let query = "" 
    Object.keys(this.params).forEach((param) =>{
        if(query){
          query+="&";
        }
        this.params[param] && (query=query+param+"="+this.params[param]);
    })
    this.commonService.getVelocityBarDetails(query).subscribe((velocityDetails) => {
      this.getValues(velocityDetails);
    })
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

    this.velocitySummaryWidget.updateBarchartOptions(labels, TMSList, TERList, untracked, this.values);
    this.velocityWidget.updateBarchartOptions(labels, TMSList, TERList, untracked, this.values);
  }
}
