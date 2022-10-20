import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HistoryContainerComponent } from './history-container.component';

export const featuresHistoryRoutes: Route[] = [
  {
    path: '',
    component: HistoryContainerComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featuresHistoryRoutes)],
  declarations: [HistoryContainerComponent],
})
export class FeaturesHistoryModule {}
