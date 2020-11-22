import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {IconName} from "../icon/icon.enum";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() total: number = 0;
  @Input() current: number = 7;
  @Input() dataPerPage: number = 10;
  @Input() simple: boolean = true;

  @Input() dropdownOpen: boolean = false;

  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
  @Output() changePagesPerPage: EventEmitter<number> = new EventEmitter<number>();

  leftIcon = IconName.leftArrow;
  rightIcon = IconName.rightArrow;
  pages: number[] = [];

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getPages()
    this.dropdownOpen = false;
  }

  onClick(page: number) {
    if (page > 0) {
      this.current = page;
    }
    this.getPages();
    this.navigate.emit(this.current);
  }

  onIncrement() {
    if (this.current == this.pages[this.pages.length - 1])
      return;
    this.current++;
    this.navigate.emit(this.current);
    this.getPages();
  }

  getPages() {
    let end = this.total / this.dataPerPage;
    this.pages = [1];
    end = Math.floor(end) === end ? end : Math.floor(end) + 1;
    if (!this.pages.includes(end)){
      this.pages.push(end);
    }
    for (let i = -2; i < 3; i++) {
      let current = this.current + i;
      if (current > 1 && current < end)
        this.pages.push(current);
    }
    this.pages = this.pages.sort((a, b) => a - b);
    if (this.pages.length > 1) {
      for (let i = 0; i < this.pages.length - 1; i++) {
        if (this.pages[i + 1] - this.pages[i] !== 1) {
          this.pages.splice(i + 1, 0, 0);
          i++;
        }
      }
    }
  }

  onDecrement() {
    if (this.current == 1)
      return;
    this.current--;
    this.navigate.emit(this.current);
    this.getPages();
  }


  dataPerPageChange(number: number) {
    this.dropdownOpen = false;
    this.dataPerPage = number;
    this.current = 1;
    this.getPages();
    this.cd.detectChanges();
    this.changePagesPerPage.emit(this.dataPerPage);
    this.navigate.emit(0);
  }


  openDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.cd.detectChanges();
  }
}
