import { ItemDetailsComponent } from './../item-details/item-details.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() set title(name: string ) {
    console.log(name);
  }
  myTitle: string = '';
  constructor() {

   }

  ngOnInit(): void {
  }

}
