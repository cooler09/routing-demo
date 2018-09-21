import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

const API_URL = 'https://swapi.co/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  getPeople(): Observable<any> {
    console.log('test');
    return this.http
    .get(API_URL + 'people/1');
  }
}
