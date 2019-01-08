import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { User } from '../models';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class CodeService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  getCodeInfo(codeId: number): Observable<any> {
    const params = new HttpParams().set('codeId', `${codeId}`);

    return this.apiService.get('/codes', params)
      .pipe(
        map(response => {
          return response.data;
        })
      );
  }
}
