import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }


  getHost(): string {
    let host = localStorage.getItem('host');
    if(!host) {
      host = 'http://localhost:8080';
    }
    return host;
  }

  setHost(host: string) {
    localStorage.setItem('host', host);
  }
}
