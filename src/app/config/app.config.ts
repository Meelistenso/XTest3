import { InjectionToken } from '@angular/core';

import { IAppConfig } from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    error404: '404',

    login: 'login',

    teacher: {
      teacher: 'teacher',
    },
    student: {
      student: 'student',
      labs: 'labs',
      lab: 'lab',
    },
    admin: {
      admin: 'admin',
    },

    dashboard: 'dashboard',
    code: 'code',
    test: 'test'
  },
  endpoints: {
  },
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Meelistenso/XTest3'
};
