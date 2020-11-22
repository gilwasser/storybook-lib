import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  text:string = 'Dropdown';
  open = false;
  items: string[] = ['Save', 'Edit', 'Delete'];
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(str: string) {
    console.log(str);
    this.selected.emit(str);
    this.open = false;
  }
}
