import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  constructor(private service: DataServiceService){}
  data: any[] | undefined;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.service.getAllCountriesAffected().subscribe({
      next: (data: any) => { console.log('data received from server', this.data = data.response);
        this.isLoading = false;
      },
      error: (error: any) => { console.error('error received from server', error) },
      complete: () => { console.info('data receive and complete data transfer') }
    })  
  }

}
