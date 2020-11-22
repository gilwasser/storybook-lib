import {Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() percent: number = 50;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.percent > 100) this.percent =100;
    if(this.percent < 0) this.percent = 0;
  }

}
