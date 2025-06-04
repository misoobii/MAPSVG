import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://api.worldbank.org/v2/country';
  constructor(private http: HttpClient) {}

  getCountryDetails(code: string): Observable<any> {
    const url = `${this.apiUrl}/${code}?format=json`;
    return this.http.get<any>(url).pipe(
      map(response => response[1][0]) // World Bank API wraps the result in an array
    );
  }
}