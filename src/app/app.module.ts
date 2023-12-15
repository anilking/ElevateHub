import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {UMSideNavigationBarModule} from "@netcracker/um-ng2/components/side-navigation-bar";
import {UxHeaderModule} from "@netcracker/ux-ng2/header";
import {UxMultipleButtonModule} from "@netcracker/ux-ng2/multiple-button";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SupportScoreWedgetComponent } from './components/support-score-wedget/support-score-wedget.component';
import { VelocityWedgetComponent } from './components/velocity-wedget/velocity-wedget.component';

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
    VelocityWedgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UxHeaderModule,
    UxMultipleButtonModule,
    MatCardModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,
    ...umModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
