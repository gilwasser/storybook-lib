
import { moduleMetadata } from '@storybook/angular';
import {IconComponent} from "./icon.component";
import {IconModule} from "./icon.module";
import {select} from "@storybook/addon-knobs";
import {IconName, IconSize} from "./icon.enum";

export default {
  title: 'Icon',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [IconModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: IconComponent,
  template: `
  <div style="padding: 3rem">
    <app-icon [icon]="icon" [size]="size" ></app-icon>
  </div>
`,
  props: {
    icon: select('icon', IconName, IconName.menu),
    size: select('size', IconSize, IconSize.medium)
  },
});
