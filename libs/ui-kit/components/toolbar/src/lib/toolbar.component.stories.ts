import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar.component';
import { Component } from '@angular/core';

@Component({
  selector: `oe-toolbar-test`,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
  `],
  template: `
    <oe-toolbar>
      <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <span>Orange App</span>
      <span class="spacer"></span>
      <button
        mat-icon-button
        class="example-icon favorite-icon"
        aria-label="Example icon-button with heart icon"
      >
        <mat-icon>favorite</mat-icon>
      </button>
      <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with share icon"
      >
        <mat-icon>share</mat-icon>
      </button>
    </oe-toolbar>
  `,
})
class ToolbarTestComponent {}

export default {
  title: 'UIkit / ToolbarComponent',
  component: ToolbarTestComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, MatIconModule, MatButtonModule],
      declarations: [ToolbarComponent, ToolbarTestComponent],
    }),
  ],
} as Meta<ToolbarComponent>;

const Template: Story<ToolbarComponent> = (args: ToolbarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
