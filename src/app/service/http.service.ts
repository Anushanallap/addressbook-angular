import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl: string = "http://localhost:8082/addressbookspring";

  constructor(private httpClient: HttpClient) { }

  getAddressBookData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get");
  }

  addNewContact(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", body);
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id);
  }

  updateContact(id: number, body: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update/" + id, body);
  }

}
