
import { moduleMetadata } from '@storybook/angular';

import {ProgressBarModule} from "./progress-bar.module";
import {ProgressBarComponent} from "./progress-bar.component";
import {number, text} from "@storybook/addon-knobs";

export default {
  title: 'Progress Bar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [ProgressBarModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: ProgressBarComponent,
  template: `
  <div style="padding: 3rem" >
    <app-progress-bar [percent]="percent" [text]="text"></app-progress-bar>
  </div>
`,
  props: {
    percent: number('percent', 50),
    text: text('text','Loading')
  },
});
