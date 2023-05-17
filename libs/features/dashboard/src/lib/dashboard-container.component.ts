import {
  ChangeDetectionStrategy,
  Component, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'oe-container',
  template: ` <p class="main">DashBoard remote</p> 
    <div>
      <img class="responsive-image" src="https://images.klipfolio.com/website/public/22b133bc-124d-44f4-85f8-9170b08d3ce9/dashboard-examples-hero.png">
    </div>
  `,
  styles: [`
    .main {padding: 20px;}

    .responsive-image {
      max-width: 100%;
      display: block;
      height: auto;
      margin: 20px auto;
    }
  
  `],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent {}
