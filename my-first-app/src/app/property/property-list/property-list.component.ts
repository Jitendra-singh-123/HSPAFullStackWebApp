import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  ngOnInit(): void {
  }
  /**
   *
   */
  constructor() {
    
  }
  properties: Array<any>=[{
    "Id":1,
    "Name":"Birla house",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":2,
    "Name":"Eros Vila",
    "Type":"Vila",
    "Price":1560000
  },
  {
    "Id":3,
    "Name":"Dev house",
    "Type":"House",
    "Price":16000
  },
  {
    "Id":4,
    "Name":"Jeet hotel",
    "Type":"Hotel",
    "Price":130000
  },
  {
    "Id":5,
    "Name":"Pearl White House",
    "Type":"House",
    "Price":140000
  },

]

}
