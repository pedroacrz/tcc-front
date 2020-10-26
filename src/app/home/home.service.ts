import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private header = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  api_url = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  public getUser() {
    return this.http.get(`${this.api_url}usuarios`, { headers: this.header });
  }

  public searchUser(texto) {
    return this.http.post(`${this.api_url}usuarios/search`, { texto: texto }, { headers: this.header });
  }
}
