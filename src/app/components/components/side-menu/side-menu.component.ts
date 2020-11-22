import {Component, Input, OnInit} from '@angular/core';
import {IconName} from "../icon/icon.enum";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() name: string = 'Brand';
  @Input() menuItems: {name:string, icon:IconName}[];
  @Input() activeIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
