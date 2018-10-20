import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppConfig } from './config/app.config';

import { HomePage } from './core/pages/home/home.page';
import { Error404Page } from './core/pages/error404/error404.page';

import { LoginComponent } from './core/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: HomePage },
  { path: AppConfig.routes.error404, component: Error404Page },

  { path: AppConfig.routes.login, component: LoginComponent },

  { path: AppConfig.routes.teacher.teacher, loadChildren: './modules/teacher/teacher.module#TeacherModule' },
  { path: AppConfig.routes.student.student, loadChildren: './modules/student/student.module#StudentModule' },
  { path: AppConfig.routes.admin.admin, loadChildren: './modules/admin/admin.module#AdminModule' },

  // otherwise redirect to 404
  { path: '**', redirectTo: '/' + AppConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
