import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {

  opened = true;
  over = 'side';

  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }
}
