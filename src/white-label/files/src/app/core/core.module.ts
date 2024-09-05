import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxWizSSOModule } from '@rafaelllfreire3/ngx-wiz-sso';
import { ssoConfig } from '../../config/sso_config';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [MainLayoutComponent, NavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgxWizSSOModule.forRoot(ssoConfig),
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [MainLayoutComponent, NgxWizSSOModule],
})
export class CoreModule {}
