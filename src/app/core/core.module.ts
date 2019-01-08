import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { RouterModule } from '@angular/router';
import { ProgressBarService } from './services/progress-bar.service';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './services/auth-guard.service';
import { JwtService } from './services/jwt.service';
import { SubjectService } from './services/subject.service';
import { CodeService } from './services/code.service';

@NgModule({
  imports: [
    RouterModule,
  ],
  providers: [
    LoggerService,
    ProgressBarService,
    UserService,
    AuthGuard,
    ApiService,
    JwtService,
    SubjectService,
    CodeService,
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
