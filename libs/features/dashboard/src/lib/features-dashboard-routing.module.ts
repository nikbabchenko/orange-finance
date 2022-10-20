import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardContainerComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class FeaturesDashboardRoutingModule {}
