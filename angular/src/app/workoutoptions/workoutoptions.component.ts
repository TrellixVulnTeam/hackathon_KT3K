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
  selectedSchema = '';
  selectedProgramType = '';
  loanIdentifierField: number;
  serviceLoanIdentifierField: number;

  displayedColumns: string[] = ['loanInterestRateAtModification', 'loanPrincipleAndInterestPaymentAmountAtModification', 
                                'loanGrossUPBAmountAtModification', 'loanModificationMaturityTermCount'];
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorkoutOptions().subscribe( (workoutoptions: any) => {
      this.workoutoptions = workoutoptions;
      this.length = this.workoutoptions.length;
      this.selectedResult = this.workoutoptions.slice(0, this.pageSize);
    })
  }

  getData( event?: PageEvent) {
    if(event) {
      this.selectedResult = this.workoutoptions.slice(event?.pageIndex * event?.pageSize, event?.pageIndex * event?.pageSize + event?.pageSize);
    }
    return event;
  }

  search() {
    if(!this.selectedProgramType && !this.selectedSchema && !this.loanIdentifierField && !this.serviceLoanIdentifierField) {
      this.dataService.getWorkoutOptions().subscribe( (workoutoptions: any) => {
        this.workoutoptions = workoutoptions;
        this.length = this.workoutoptions.length;
        this.selectedResult = this.workoutoptions.slice(0, this.pageSize);
      })
    } else {
      this.dataService.postWorkoutOptions(this.selectedSchema, this.selectedProgramType,
        this.serviceLoanIdentifierField ? this.serviceLoanIdentifierField : null, this.loanIdentifierField ? this.loanIdentifierField : null)
        .subscribe( (workoutoptions: any) => {
          this.workoutoptions = workoutoptions;
          this.length = this.workoutoptions.length;
          this.selectedResult = this.workoutoptions.slice(0, this.pageSize);
        })
    } 

  }

}
