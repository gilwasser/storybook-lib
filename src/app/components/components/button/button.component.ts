import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ButtonColor, ButtonSize} from "./button.enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() color : ButtonColor = ButtonColor.primary;
  @Input() text: string ='Button';
  @Input() size?: ButtonSize = ButtonSize.medium;
  @Input() disable = false;



  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
