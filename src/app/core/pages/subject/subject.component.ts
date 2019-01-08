import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SubjectService } from '@app/core/services/subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private id: number;

  codeSectionsSubscription: Subscription;
  codeSections = [];
  subject = null;

  search = '';

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
  ) {
    this.sub = this.route.params.subscribe(params => {

      if (!params['id']) {
        return;
      }

      this.id = +params['id'];

      this.unsub(this.codeSectionsSubscription);

      this.codeSectionsSubscription = this.subjectService
        .getCodes(this.id)
        .subscribe(data => {
          console.log(data);
          this.codeSections = data.sections;
          this.subject = data.subject;
      });
    });
  }

  getIcon(code) {
    switch (code.type) {
      case 0:
        return 'vertical_split';
      case 1:
        return 'subject';
      default:
        return 'reorder';
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.unsub(this.codeSectionsSubscription);
    this.sub.unsubscribe();
  }

  unsub(sub) {
    if (sub) { sub.unsubscribe(); }
  }

}
