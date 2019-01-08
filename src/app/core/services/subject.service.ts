import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { User } from '../models';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SubjectService {
  private _currentSubject = new BehaviorSubject<any>(null);
  private _subjects = new BehaviorSubject<any[]>([]);

  get currentSubjects(): Observable<any> {
    return this._currentSubject;
  }
  get currentSubject(): any {
    return this._currentSubject.getValue();
  }
  set currentSubject(value: any) {
    this._currentSubject.next(value);
  }
  get allSubjects(): Observable<any[]> {
    return this._subjects;
  }
  get allSubject(): any[] {
    return this._subjects.getValue();
  }

  constructor(private apiService: ApiService, private http: HttpClient) {
    this.apiService
      .get('/subjects')
      .subscribe(
        response => this._subjects.next(response.data.subjects),
        err => console.log
      );
  }

  getCodes(subjectId: number): Observable<any> {
    const params = new HttpParams().set('subjectId', `${subjectId}`);

    return this.apiService.get('/subjects/codes', params)
      .pipe(
        map(response => {
          return response.data;
        })
      );
  }

  populate() {
    // If JWT detected, attempt to get & store user's info
    // if (this.jwtService.getToken()) {
    //   this.apiService.get('/subjects')
    //   .subscribe(
    //     data => this.setAuth(data.user),
    //     err => this.purgeAuth()
    //   );
    // } else {
    //   // Remove any potential remnants of previous auth states
    //   this.purgeAuth();
    // }
  }
  // private currentUserSubject = new BehaviorSubject<User>({} as User);
  // public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  // private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  // public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  // constructor (
  //   private apiService: ApiService,
  //   private http: HttpClient,
  // ) {}

  // // Verify JWT in localstorage with server & load user's info.
  // // This runs once on application startup.
  // populate() {
  //   // If JWT detected, attempt to get & store user's info
  //   if (this.jwtService.getToken()) {
  //     this.apiService.get('/subjects')
  //     .subscribe(
  //       data => this.setAuth(data.user),
  //       err => this.purgeAuth()
  //     );
  //   } else {
  //     // Remove any potential remnants of previous auth states
  //     this.purgeAuth();
  //   }
  // }

  // setSubject(user: User) {
  //   // Save JWT sent from server in localstorage
  //   this.jwtService.saveToken(user.token);
  //   // Set current user data into observable
  //   this.currentUserSubject.next(user);
  //   // Set isAuthenticated to true
  //   this.isAuthenticatedSubject.next(true);
  // }

  // purgeAuth() {
  //   // Remove JWT from localstorage
  //   this.jwtService.destroyToken();
  //   // Set current user to an empty object
  //   this.currentUserSubject.next({} as User);
  //   // Set auth status to false
  //   this.isAuthenticatedSubject.next(false);
  // }

  // attemptAuth(type, credentials): Observable<User> {
  //   const route = (type === 'login') ? '/login' : '';
  //   return this.apiService.post('/users' + route, {user: credentials})
  //     .pipe(map(
  //     response => {
  //       this.setAuth(response.data.user);
  //       return response.data.user;
  //     }
  //   ));
  // }

  // getCurrentUser(): User {
  //   return this.currentUserSubject.value;
  // }

  // // Update the user on the server (email, pass, etc)
  // update(user): Observable<User> {
  //   return this.apiService
  //   .put('/user', { user })
  //   .pipe(map(data => {
  //     // Update the currentUser observable
  //     this.currentUserSubject.next(data.user);
  //     return data.user;
  //   }));
  // }
}
