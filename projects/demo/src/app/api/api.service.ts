import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  login(data: any) {
    return this.httpClient.post(
      'https://64501e47b61a9f0c4d3356f6.mockapi.io/api/v1/login/loginuser',
      data
    );
  }
}
