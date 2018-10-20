import { Type } from '@angular/core';

export class DtItem {
  constructor(public component: Type<any>, public data: any) {}
}
