import { InjectionToken } from '@angular/core';

import { IAppConfig } from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    error404: '404',

    login: 'login',
    register: 'register',

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

    subjects: 'subjects',
    subject: 'subjects/:id',

    dashboard: 'dashboard',
    code: 'codes/:id',
    test: 'test',

    home: 'home'
  },
  endpoints: {
  },
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Meelistenso/XTest3'
};
