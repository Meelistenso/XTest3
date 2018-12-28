import { Injectable } from '@angular/core';

import { ApiService } from '@app/core/services/api.service';
import { Observable } from 'rxjs/Observable';

import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class TeacherService {
  constructor(private apiService: ApiService) {}

  getGroups(): Observable<any> {
    return this.apiService.get('/teacher/groups').pipe(
      map(response => response.data)
    );
  }
}
