import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import {ButtonModule} from "../button/button.module";
import {IconModule} from "../icon/icon.module";



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule
  ],
  exports:[DropdownComponent]
})
export class DropdownModule { }
