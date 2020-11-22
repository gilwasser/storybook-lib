import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import {IconModule} from "../icon/icon.module";



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [SideMenuComponent],
})
export class SideMenuModule { }
