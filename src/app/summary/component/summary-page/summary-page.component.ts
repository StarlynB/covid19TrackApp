import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  constructor(private sevice: DataServiceService) {}
  data: any[] | undefined;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.sevice.getAllSummaryData().pipe(delay(2000)).subscribe({
      next: (data: any) => { console.table('this is summary data', this.data =  data.response)
      this.isLoading = false},
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    } )
  }
}
