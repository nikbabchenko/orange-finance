import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HistoryContainerComponent } from './history-container.component';

export default {
  title: 'Features / History / HistoryContainerComponent',
  component: HistoryContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HistoryContainerComponent>;

const Template: Story<HistoryContainerComponent> = (
  args: HistoryContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
