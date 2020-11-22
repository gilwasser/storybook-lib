import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import {IconModule} from "../icon/icon.module";
import {DropdownModule} from "../dropdown/dropdown.module";



@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    IconModule,
    DropdownModule
  ],
  exports:[PaginatorComponent]
})
export class PaginatorModule { }
