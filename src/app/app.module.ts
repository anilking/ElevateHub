import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {UMSideNavigationBarModule} from "@netcracker/um-ng2/components/side-navigation-bar";
import {UxHeaderModule} from "@netcracker/ux-ng2/header";
import {UxMultipleButtonModule} from "@netcracker/ux-ng2/multiple-button";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UxHeaderModule,
    UxMultipleButtonModule,
    
    ...umModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
