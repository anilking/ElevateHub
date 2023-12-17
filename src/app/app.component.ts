import { Component } from '@angular/core';
import { CommonService } from './common-service.service';
import { DataService } from './data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ElevateHub';

  constructor(private commonService: CommonService, private dataService: DataService,
    private router: Router){

  }

  ngOnInit(){
    this.checkUserLogin();
  }

  checkUserLogin() {
    const userDetails = JSON.parse(localStorage.getItem('UserDetails') || '');
    if(userDetails.isLogedIn) {
      this.dataService.updateUserDetails(userDetails);
      this.router.navigate(['/overview']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
