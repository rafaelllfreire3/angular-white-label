import { Component, OnInit } from '@angular/core';
import { SSOConectorService } from '@rafaelllfreire3/ngx-wiz-sso';
import { Util } from '../../shared/utils/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  isLoggingIn = false;

  constructor(private sso: SSOConectorService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!SSOConectorService.isLogged();
  }

  onSubmitLogin(): void {
    this.isLoggingIn = true;
    this.sso
      .loginWithCredentials({
        userName: '<<user name>>',
        password: '<<password>>',
      })
      .subscribe((data) => {
        Util.windowReload();
      });
  }
}
