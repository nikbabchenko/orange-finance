import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HistoryContainerComponent } from './history-container.component';

export const featuresHistoryRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HistoryContainerComponent],
})
export class FeaturesHistoryModule {}
