import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output () notify:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  setButtonClicked(val){
    console.log(val);
    this.notify.emit(val);
  }

}
