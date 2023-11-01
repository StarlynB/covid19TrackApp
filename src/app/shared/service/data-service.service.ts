import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService implements OnInit {

  now = new Date();
  formatterDateTime = `${this.now.getFullYear()}-${(this.now.getMonth() + 1).toString().padStart(2, '0')}-${this.now.getDate().toString().padStart(2, '0')}`;

  isLoading:boolean = true;
  private _url: string = 'https://covid-193.p.rapidapi.com/';
  private _urlSummary:string = 'statistics';
  private _urlCountries: string = 'countries';
  private _urlHistory:string = `history?country=usa&day=${this.formatterDateTime}`;
  private _headers = new HttpHeaders({
    'X-RapidAPI-Key': '75860edf12mshbb54eb162e9e767p1cdd8djsn8489220fda8d',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  })


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getDataSummary();
    this.getDataCountries();
    this.getHistoryAffected();
  }

  //#region summary 
  async getDataSummary(){
    try{
      await this.getAllSummaryData();
      this.isLoading = false;
    } catch (error) {
      console.log("error getting data", error);
    }
    
  }

  // get all summary data
  getAllSummaryData(): Observable<any> {
    return of(null).pipe(delay(2000), switchMap( () => {
      return this.http.get<any>(this._url + this._urlSummary, {headers: this._headers});
    }))

  }
  //#endregion sumary
 
  //#region countiesAffected

  async getDataCountries() {
    try{
      await this.getAllCountriesAffected();
      this.isLoading = false;
    }
    catch(error){
      console.log('get is affected',error);
    }
  }

  getAllCountriesAffected(): Observable<any>{
    return of(null).pipe(delay(2000), switchMap( () => {
      return this.http.get<any>(this._url + this._urlCountries, {headers: this._headers});
    }))
  }

  //#endregion countriesAffected

  //#region HistoryAffected

  async getHistoryAffected() {
    try{
      await this.getHistoryAffected();
      this.isLoading = false;
    } catch(error) {
      console.log(error);
    }
    
  }

  getAllHistoryAffected(): Observable<any>{
    return of(null).pipe(delay(2000), switchMap( () => {
      return this.http.get<any>(this._url + this._urlHistory, {headers: this._headers});
    }));
  }

  

  //#endregion


}
