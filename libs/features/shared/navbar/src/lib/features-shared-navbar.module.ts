import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UiKitComponentsToolbarModule } from '@orange-ui-kit/components/toolbar';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, UiKitComponentsToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class FeaturesSharedNavbarModule {}
