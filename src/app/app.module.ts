import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_CONFIG, AppConfig } from './config/app.config';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ProgressInterceptor } from './shared/interceptors/progress.interceptor';
import { TimingInterceptor } from './shared/interceptors/timing.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProgressBarService } from './core/services/progress-bar.service';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { Error404Component } from '@app/core/pages/error404/error404.component';

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    CoreModule,
    AppRoutingModule,
    HomeModule,
    SharedModule
  ],
  declarations: [AppComponent, FooterComponent, HeaderComponent, Error404Component],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressInterceptor,
      multi: true,
      deps: [ProgressBarService]
    },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
