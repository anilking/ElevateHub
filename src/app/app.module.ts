import {NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {UMSideNavigationBarModule} from "@netcracker/um-ng2/components/side-navigation-bar";
import {UxHeaderModule} from "@netcracker/ux-ng2/header";
import {UxMultipleButtonModule} from "@netcracker/ux-ng2/multiple-button";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {OverviewComponent} from './components/overview/overview.component';
import {SupportScoreWedgetComponent} from './components/support-score-wedget/support-score-wedget.component';
import {VelocityWedgetComponent} from './components/velocity-wedget/velocity-wedget.component';
import {UxButtonModule} from "@netcracker/ux-ng2/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {UmNavigationBarModule} from "@netcracker/um-ng2/services/navigation-bar";
import {NgChartsModule} from 'ng2-charts';
import {TeamMembersComponent} from './components/team-members/team-members.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {FeedbackCommentsComponent} from './components/feedback-comments/feedback-comments.component';
import {VelocityComponent} from './components/velocity/velocity.component';
import {SupportScoreComponent} from './components/support-score/support-score.component';
import {AssessmentPromotionComponent} from './components/assessment-promotion/assessment-promotion.component';
import {PerformanceSummaryComponent} from './components/performance-summary/performance-summary.component';
import {UMCardModule} from "@netcracker/um-ng2/components/card";
import {UxDropdownFieldModule} from "@netcracker/ux-ng2/dropdown-field";
import {UMPieModule} from "@netcracker/um-ng2/components/pie";
import { SupportScoreFormComponent } from './components/support-score-form/support-score-form.component';
import {UxSearchFieldModule} from "@netcracker/ux-ng2/search-field";
import { UxLoaderModule } from "@netcracker/ux-ng2/loader";
import { UxTextAreaFieldModule } from "@netcracker/ux-ng2/textarea-field";
import { UxTooltipModule } from "@netcracker/ux-ng2/tooltip";
import {UxSwitcherFieldModule} from "@netcracker/ux-ng2/switcher-field";

// const uxModules: Type<any>[] = [
//   UxOverlayModule,
//   UxLinearDotsLoaderModule,
//   UxLinkButtonModule,
//   UxLoaderModule
// ];

const umModules: Type<any>[] = [
  UMSideNavigationBarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
    OverviewComponent,
    SupportScoreWedgetComponent,
    VelocityWedgetComponent,
    TeamMembersComponent,
    TasksComponent,
    FeedbackCommentsComponent,
    VelocityComponent,
    SupportScoreComponent,
    AssessmentPromotionComponent,
    PerformanceSummaryComponent,
    SupportScoreFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UMSideNavigationBarModule,
    UmNavigationBarModule,
    BrowserAnimationsModule,
    UxHeaderModule,
    MatIconModule,
    UMCardModule,
    UxDropdownFieldModule,
    HttpClientModule,
    UxMultipleButtonModule,
    UMPieModule,
    UxButtonModule,
    MatCardModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,
    ...umModules,
    NgChartsModule,
    MatListModule,
    UxSearchFieldModule,
    UxLoaderModule,
    UxTextAreaFieldModule,
    UxTooltipModule,
    UxSwitcherFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
