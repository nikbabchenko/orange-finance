import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { FeaturesDashboardRoutingModule } from './features-dashboard-routing.module';

@NgModule({
  imports: [CommonModule, FeaturesDashboardRoutingModule],
  declarations: [DashboardContainerComponent],
})
export class FeaturesDashboardModule {}
