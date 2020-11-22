import {Component, Input, OnInit} from '@angular/core';
import {faAward, faBars, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {IconName, IconSize} from "./icon.enum";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon : IconName;
  @Input() size? : IconSize = IconSize.medium;



  constructor() {
  }

  ngOnInit(): void {
  }

  getIcon () {
    switch (this.icon) {
      case IconName.award: return faAward;
      case IconName.menu: return faBars;
      case IconName.downArrow: return faChevronDown;
    }
  }

}
