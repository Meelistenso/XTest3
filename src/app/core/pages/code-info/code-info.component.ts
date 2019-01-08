import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CodeService } from '@app/core/services/code.service';
import { Observable } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-code-info',
  templateUrl: './code-info.component.html',
  styleUrls: ['./code-info.component.scss']
})
export class CodeInfoComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private id: number;

  private codeInfoSubscription: Subscription;
  codeInfo = null;

  watcher: Subscription;
  columns = 2;
  rowHeight = '2:1';

  get codeId() {
    if (this.codeInfo) {
      return this.codeInfo.article.codeId;
    }
  }

  get decodeId() {
    if (this.codeInfo) {
      return this.codeInfo.article.decodeId;
    }
  }

  get testId() {
    if (this.codeInfo) {
      return this.codeInfo.article.codeId;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private codeService: CodeService,
    media: ObservableMedia,
  ) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change) {
        if (change.mqAlias === 'xs') {
          this.columns = 1;
          this.rowHeight = '2:1';
        } else if (change.mqAlias === 'sm') {
          this.columns = 1;
          this.rowHeight = '2:1';
        } else if (change.mqAlias === 'md') {
          this.columns = 2;
          this.rowHeight = '3:1';
        } else {
          this.columns = 2;
          this.rowHeight = '3:1';
        }
      }
    });



    this.sub = this.route.params.subscribe(params => {

      if (!params['id']) {
        return;
      }

      this.id = +params['id'];

      this.unsub(this.codeInfoSubscription);

      this.codeInfoSubscription = this.codeService
        .getCodeInfo(this.id)
        .subscribe(data => {
          this.codeInfo = data;
        });
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.unsub(this.codeInfoSubscription);
  }

  unsub(sub) {
    if (sub) { sub.unsubscribe(); }
  }
}
