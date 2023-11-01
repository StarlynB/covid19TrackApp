import { Component, OnInit } from '@angular/core';
import { delay, pipe } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {

  data: any[] | undefined;
  isLoading: boolean = true;

  constructor(private service: DataServiceService) {}
  ngOnInit(): void {
    this.service.getAllHistoryAffected().pipe(delay(2000)).subscribe({
      next: (data:any) => {console.table('data received from server', data)
      this.data = data.response;
      this.isLoading = false;
    },
    error: (err) => {console.error("data transfer is failed",err)},
    complete: () => {console.table("data transfer complete")}
  })
  
  }

  clickKey(event : Event) {

  }

}
