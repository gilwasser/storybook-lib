import {Component, Input, OnInit} from '@angular/core';
import {AvatarSize, AvatarStatus} from "./avatar.enum";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() url = 'https://thebuzzpaper.com/wp-content/uploads/2020/07/avatar-publicity_still-h_2019.jpg';
  @Input() status? : AvatarStatus = AvatarStatus.offline;
  @Input() size? : AvatarSize = AvatarSize.small;

  constructor() { }

  ngOnInit(): void {
  }

}
