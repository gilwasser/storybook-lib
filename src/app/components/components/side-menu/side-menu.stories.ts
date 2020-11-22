import {moduleMetadata} from '@storybook/angular';
import {SideMenuComponent} from "./side-menu.component";
import {SideMenuModule} from "./side-menu.module";
import {number, object} from "@storybook/addon-knobs";
import {IconName} from "../icon/icon.enum";

export default {
  title: 'Side Menu',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [SideMenuModule],
    }),
  ],
};


// default TaskList state
export const Default = () => ({
  component: SideMenuComponent,
  template: `
  <div style="padding:3rem; padding-top: 0; margin-top: 0">
    <app-side-menu [menuItems]="menuItems" [activeIndex]="activeIndex"></app-side-menu>
  </div>
`,
  props: {
    menuItems: object('menuItems',
      [
        {name: 'Home', icon: IconName.menu},
        {name: 'About', icon: IconName.award},
        {name: 'Home', icon: IconName.menu},
        {name: 'Home', icon: IconName.menu},
        {name: 'Home', icon: IconName.menu},
        {name: 'Home', icon: IconName.menu},


      ]),
    activeIndex: number('activeIndex', 0)
  },
});
