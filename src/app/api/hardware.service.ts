import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { pathToFileURL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private http:HttpClient) { 

  }

  get_item(url): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(url, httpOptions).pipe();
  }


  // Create - POST
  // READ -   GET
  // UPDATE - PUT, PATCH
  // DElETE - DELETE


}
