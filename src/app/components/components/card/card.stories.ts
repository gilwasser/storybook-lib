// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import {CardModule} from "./card.module";
import {CardComponent} from "./card.component";
import {number, text} from "@storybook/addon-knobs";

export default {
  title: 'Card',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [CardModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: CardComponent,
  template: `
  <div style="padding: 2rem;  max-width: 800px">
    <app-card [text]="text" [title]="title" [minutes]="minutes" [url]="url"></app-card>
  </div>
`,
  props: {
    text: text('text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, exercitationem quaerat repellat repudiandae\n' +
      '        soluta sunt?'),
    title: text('title','Title'),
    minutes: number('minutes',15),
    url:text('url','https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg')
  },
});
