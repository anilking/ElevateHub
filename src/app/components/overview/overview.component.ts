import { Component } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  user: any = {};

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.userDetails$.subscribe(userDetails => {
      this.user = userDetails;
    })
  }

  
}
