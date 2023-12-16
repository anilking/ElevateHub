import { Component } from '@angular/core';
import { CommonService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ElevateHub';

  constructor(private commonService: CommonService){

  }

  ngOnInit(){
    this.commonService.getData().subscribe((data) => {
        console.log(data)
    });
  }

}
