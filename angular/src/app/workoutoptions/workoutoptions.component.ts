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

  displayedColumns: string[] = ['loanInterestRateAtModification', 'loanPrincipleAndInterestPaymentAmountAtModification', 
                                'loanGrossUPBAmountAtModification', 'loanModificationMaturityTermCount'];
  

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
