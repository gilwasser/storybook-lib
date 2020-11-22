
import { moduleMetadata } from '@storybook/angular';
import {PaginatorModule} from "./paginator.module";
import {PaginatorComponent} from "./paginator.component";
import {action} from "@storybook/addon-actions";
import {boolean} from "@storybook/addon-knobs";

export default {
  title: 'Paginator',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [PaginatorModule],
    }),
  ],
};

// default TaskList state
export const Default = () => ({
  component: PaginatorComponent,
  template: `
  <div style="padding: 3rem">
    <app-paginator [total]="105" (navigate)="navigate($event)" [simple]="simple" (changePagesPerPage)="changePagesPerPage()"></app-paginator>
  </div>
`,
  props: {
    navigate: action('navigate'),
    changePagesPerPage: action('changePagesPerPage'),
    simple: boolean('simple', false)
  },
});
