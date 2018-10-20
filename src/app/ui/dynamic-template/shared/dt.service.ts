import { Injectable } from '@angular/core';

import { QuoteComponent } from '../components/quote/quote.component';
import { DtItem } from './dt-item';

@Injectable()
export class DtService {
  getDt() {
    return new DtItem(
      QuoteComponent,
      { name: 'Bombasto', text: 'Brave as they come' }
    );

  }
}
