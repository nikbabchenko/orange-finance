import { UiKitComponentsToolbarModule } from '@orange-ui-kit/components/toolbar';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [UiKitComponentsToolbarModule, MatIconModule, MatButtonModule, RouterModule.forRoot([])],
    }),
  ],
} as Meta<NavbarComponent>;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
