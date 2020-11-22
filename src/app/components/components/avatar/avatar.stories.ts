
import { moduleMetadata } from '@storybook/angular';

import {AvatarModule} from "./avatar.module";
import {AvatarComponent} from "./avatar.component";
import {select, text} from "@storybook/addon-knobs";
import {AvatarSize, AvatarStatus} from "./avatar.enum";

export default {
  title: 'Avatar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [AvatarModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: AvatarComponent,
  template: `
  <div style="padding: 3rem" >
    <app-avatar [url]="url" [status]="status" [size]="size"></app-avatar>
  </div>
`,
  props: {
    status: select('status', AvatarStatus, AvatarStatus.online),
    url: text('url','https://thebuzzpaper.com/wp-content/uploads/2020/07/avatar-publicity_still-h_2019.jpg'),
    size: select('size',AvatarSize, AvatarSize.medium)
  },
});
