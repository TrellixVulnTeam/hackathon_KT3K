import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:5000/workoutoptions";

  constructor(private httpClient: HttpClient) { }

  public getWorkoutOptions(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
