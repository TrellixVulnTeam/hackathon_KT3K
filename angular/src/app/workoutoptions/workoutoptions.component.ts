import { Component, OnInit } from '@angular/core';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom"

@Component({
  selector: 'app-workoutoptions',
  templateUrl: './workoutoptions.component.html',
  styleUrls: ['./workoutoptions.component.css']
})
export class WorkoutoptionsComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
