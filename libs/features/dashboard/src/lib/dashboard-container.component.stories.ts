import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DashboardContainerComponent } from './dashboard-container.component';

export default {
  title: 'Features / Dashboard / DashboardContainerComponent',
  component: DashboardContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DashboardContainerComponent>;

const Template: Story<DashboardContainerComponent> = (
  args: DashboardContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
