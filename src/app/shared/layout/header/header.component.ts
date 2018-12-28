import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from '@app/config/app.config';
import { IAppConfig } from '@app/config/iapp.config';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { ProgressBarService } from '@app/core/services/progress-bar.service';
import { UserService } from '@app/core/services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appConfig: any;
  menuItems: any[];
  menuItemsAuthed: any[];
  progressBarMode: string;
  currentLang: string;

  public currentUser = this.userService.currentUser;

  constructor(
    @Inject(APP_CONFIG) appConfig: IAppConfig,
    private progressBarService: ProgressBarService,
    private translateService: TranslateService,
    private userService: UserService
  ) {
    this.appConfig = appConfig;
  }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
    this.loadMenus();
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });

    this.userService.currentUser.subscribe(data => console.log(data));
  }

  changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  }

  private loadMenus(): void {
    this.menuItems = [
      { link: '/', name: _('home') },
      // {link: '/' + AppConfig.routes.heroes, name: _('heroesList')}
      { link: '/' + AppConfig.routes.login, name: _('login') },
      { link: '/' + AppConfig.routes.register, name: _('register') }
    ];

    this.menuItemsAuthed = [
      { link: '/', name: _('home') },
      // {link: '/' + AppConfig.routes.heroes, name: _('heroesList')}
      // { link: '/' + AppConfig.routes.login, name: _('login') },
      // { link: '/' + AppConfig.routes.register, name: _('register') }
    ];
  }
}
