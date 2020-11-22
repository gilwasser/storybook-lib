// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';

import {ButtonComponent} from "./button.component";
import {ButtonModule} from "./button.module";
import {boolean, select, text} from "@storybook/addon-knobs";
import {ButtonColor, ButtonSize} from "./button.enum";

export default {
  title: 'Button',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [ButtonModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem">
    <app-button [color]="color" [text]="text" [size]="size" [disable]="disable"></app-button>
  </div>
`,
  props: {
    color: select('color', ButtonColor,ButtonColor.primary),
    text: text('text','Button'),
    size: select('size',ButtonSize,ButtonSize.medium),
    disable: boolean('disable',false)
  },
});
