import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from "./components/main/main.component";
import {OverviewComponent} from "./components/overview/overview.component";
import {SupportScoreComponent} from './components/support-score/support-score.component';
import {AssessmentPromotionComponent} from './components/assessment-promotion/assessment-promotion.component';
import {PerformanceSummaryComponent} from './components/performance-summary/performance-summary.component';
import {VelocityComponent} from "./components/velocity/velocity.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "overview",
        component: OverviewComponent
      },
      {
        path: "velocity",
        component: VelocityComponent
      },
      {
        path: "support-score",
        component: SupportScoreComponent
      },
      {
        path: 'assessment-promotion',
        component: AssessmentPromotionComponent
      },
      {
        path: 'performance-summary',
        component: PerformanceSummaryComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
