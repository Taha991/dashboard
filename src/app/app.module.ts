import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { LitComponendComponent } from './lit-componend/lit-componend.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopNavComponent,
    DashboardBodyComponent,
    LitComponendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
