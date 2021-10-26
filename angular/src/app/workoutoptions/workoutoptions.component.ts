import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../data.service';

@Component({
  selector: 'app-workoutoptions',
  templateUrl: './workoutoptions.component.html',
  styleUrls: ['./workoutoptions.component.css']
})

export class WorkoutoptionsComponent implements OnInit {
  
  length: number;
  selectedResult: any;
  pageSize = 10;
  pageEvent: PageEvent;
  workoutoptions: any;

  ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorkoutOptions().subscribe( (workoutoptions: any) => {
      this.workoutoptions = workoutoptions;
      this.length = this.workoutoptions.length;
      this.selectedResult = this.workoutoptions.slice(0, this.pageSize);
      console.log(workoutoptions);
    })
  }

  getData( event?: PageEvent) {
    if(event) {
      this.selectedResult = this.workoutoptions.slice(event?.pageIndex * event?.pageSize, event?.pageIndex * event?.pageSize + event?.pageSize);
    }
    return event;
  }

}
