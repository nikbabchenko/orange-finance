import {
  ChangeDetectionStrategy,
  Component, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'orange-finance-history-container',
  templateUrl: './history-container.component.html',
  styleUrls: ['./history-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryContainerComponent  {
}
