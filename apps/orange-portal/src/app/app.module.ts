import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            loadRemoteModule('dashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'history',
          loadChildren: () =>
            loadRemoteModule('history', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
