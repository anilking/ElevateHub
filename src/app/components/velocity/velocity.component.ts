import { Component } from '@angular/core';
import { UxReferenceSelectorItem } from '@netcracker/ux-ng2/reference-field';
import { CommonService } from 'src/app/common-service.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.scss'],
})
export class VelocityComponent {
  selectedMenuItem: string = 'last15Days';
  public usersList: UxReferenceSelectorItem[] = [];

  public projectsList: UxReferenceSelectorItem[] = [
    { id: '1', text: 'CLOUDJPG' },
    { id: '2', text: 'VO MS' },
    { id: '3', text: 'CLOUDSCT' },
    { id: '4', text: 'NTT UI' },
  ];

  public handleClick(type: string) {
    this.selectedMenuItem = type;
  }
  public handleProjectChange(value: any) {
    console.log(value);
  }
  public handleEmpChange(value: any) {
    console.log(value);
  }

  user: any = {};

  constructor(private dataService: DataService, private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.getUserList();
    this.dataService.userDetails$.subscribe(userDetails => {
      this.user = userDetails;
    })
  }

  getUserList(){
    debugger
    this.commonService.getUsersList().subscribe(userList => {
      userList?.data?.map((user: any) => {
        this.usersList.push({ id: user.id, text: user.name })
      })
    })
  }
}
