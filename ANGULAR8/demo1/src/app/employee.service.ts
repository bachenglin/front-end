import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Iemployee  } from './employee'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }


  getEmployees():Observable<Iemployee[]>{
    
    return this.http.get<Iemployee[]>(this._url)
            .pipe(catchError(error => {
              return Observable.throw('Something went wrong;)');
            }))
  }
}