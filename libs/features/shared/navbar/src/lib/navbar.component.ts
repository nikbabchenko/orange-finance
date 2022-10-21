import { Component, ViewEncapsulation } from '@angular/core';
import { portalLinks } from './constants';
import { Navlink } from './interfaces';

@Component({
  selector: 'oe-shared-navbar',
  template: `
    <oe-toolbar>
      <span>Orange Portal </span>
      <ul class="main-navigation">
        <li *ngFor="let link of links">
          <a [routerLink]="link.route">{{ link.title }}</a>
        </li>
      </ul>
      <span class="spacer"></span>
      <span>Contacts</span>
    </oe-toolbar>
  `,
  styles: [
    `
      oe-toolbar .spacer {
        flex: 1 1 auto;
      }

      oe-toolbar .main-navigation {
        display: flex;
      }

      oe-toolbar .main-navigation li {
        list-style: none;
        padding: 0 10px;
      }

      oe-toolbar .main-navigation li a  {
        font-size: 14px;
        color: black;
      }
      `
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  links: Navlink[] = portalLinks;
}
