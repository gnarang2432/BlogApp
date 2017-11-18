import {Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output () notify:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  setCategory(val){
    this.notify.emit(val);
  }

}
