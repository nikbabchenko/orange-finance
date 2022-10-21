import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oe-toolbar',
  template: `<mat-toolbar>
    <ng-content></ng-content>
  </mat-toolbar>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {}
