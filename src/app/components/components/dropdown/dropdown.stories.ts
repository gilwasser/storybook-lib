
import { moduleMetadata } from '@storybook/angular';
import {number, text} from "@storybook/addon-knobs";
import {DropdownModule} from "./dropdown.module";
import {DropdownComponent} from "./dropdown.component";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Dropdown',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [DropdownModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: DropdownComponent,
  template: `
  <div style="padding: 3rem" >
    <app-dropdown (selected)="selected($event)"></app-dropdown>
  </div>
`,
  props: {
    selected: action('selected')
  },
});
