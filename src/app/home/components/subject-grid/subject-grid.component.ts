import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';

import { SubjectService } from '@app/core/services/subject.service';

@Component({
  selector: 'app-subject-grid',
  templateUrl: './subject-grid.component.html',
  styleUrls: ['./subject-grid.component.scss']
})
export class SubjectGridComponent implements OnDestroy, OnInit {

  watcher: Subscription;
  columns = 4;
  rowHeight = '2:1';

  subjects: Observable<any[]> = this.subjectService.allSubjects;

  constructor(
    media: ObservableMedia,
    private subjectService: SubjectService,
  ) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change) {
        if (change.mqAlias === 'xs') {
          this.columns = 1;
          this.rowHeight = '1.5:1';
        } else if (change.mqAlias === 'sm') {
          this.columns = 2;
          this.rowHeight = '1:1';
        } else if (change.mqAlias === 'md') {
          this.columns = 3;
          this.rowHeight = '1:1';
        } else {
          this.columns = 4;
          this.rowHeight = '1.5:1';
        }
      }
    });
  }

  getBackground(image) {
    switch (image.type) {
      case 0:
        return {'background-color': `${image.value}`};
      case 1:
        return {'background-image': `url('${image.value}')`};
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
