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
      url: "overview"
    },
    {
      icon: "velocity",
      title: "Velocity",
      url: "velocity",
    },
    {
      icon: "support_screen",
      title: "Support Score",
      url: "support-score",
    },
    {
      icon: "assessment",
      title: "Assessment for Promotion",
      url: "assessment-promotion",
    },
    {
      icon: "performance",
      title: "Performance Summary",
      url: "performance-summary",
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
