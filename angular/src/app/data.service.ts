import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:5000/workoutoptions";

  constructor(private httpClient: HttpClient) { }

  public getWorkoutOptions(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public postWorkoutOptions(workoutSchema?: string, workoutProgramType?: string, servicerAccountIdentifier?: number, loanIdentifier?: number){
    const body = {
      "workoutSchema": workoutSchema,
      "workoutProgramType": workoutProgramType,
      "servicerAccountIdentifier": servicerAccountIdentifier,
      "loanIdentifier": loanIdentifier
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.httpClient.post<any>(this.REST_API_SERVER, body, httpOptions);
  }
  
}
