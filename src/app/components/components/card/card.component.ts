import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() url = 'https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg';
  @Input() title = 'Title';
  @Input() text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, exercitationem quaerat repellat repudiandaesoluta sunt?';
  @Input() minutes?:number = 15;
  constructor() { }

  ngOnInit(): void {
  }

}
