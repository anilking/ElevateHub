import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  user: any = {
    name: 'Anil Pathuri',
    role: "Senior Software Engineer"
  };

}
