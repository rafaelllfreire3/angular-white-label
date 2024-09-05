import { Component, OnInit } from '@angular/core';
import { SSOConectorService } from '@rafaelllfreire3/ngx-wiz-sso';
import { Util } from '../../../shared/utils/util';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isLoggedIn = false;
  features: string[];
  logoUrl: string;

  constructor(
    private configurationService: ConfigurationService,
    private sso: SSOConectorService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!SSOConectorService.isLogged();

    this.configurationService.getConfig().subscribe((data) => {
      this.features = data.features;
      this.logoUrl = data.logoImageUrl;
    });
  }

  isFeatureEnabled(key: string): boolean {
    return !!this.features && this.features.includes(key);
  }

  logOut(): void {
    this.sso.logOut();
    Util.windowReload();
  }
}
