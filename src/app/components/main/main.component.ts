import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {UMSideNavigationItem} from "@netcracker/um-ng2/components/side-navigation-bar";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  public _expanded: boolean = false;

  public _items: UMSideNavigationItem[] = [
    {
      icon: "home",
      title: "Overview",
      url: "new-url-disabled"
    },
    {
      icon: "velocity",
      title: "Velocity",
      url: "new-url-2",
    },
    {
      icon: "support_screen",
      title: "Support Score",
      url: "new-url-5",
    },
    {
      icon: "assessment",
      title: "Assessment for Promotion",
      url: "new-url-6",
    },
    {
      icon: "performance",
      title: "Performance Summary",
      url: "new-url-6",
    }
  ];

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/themes/base/images/icons/logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/home.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "velocity",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/velocity.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "support_score",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/support_score.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "assessment",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/assessment.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "performance",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/promotion.svg")
    );
  }

  public _onExpandedChange(value: boolean): void {
    this._expanded = value;
  }

}
