import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return ['popa1', 'popa2', 'popa3']
  }

  getCompress() {
    return [ 1, 23, 5, 6]
  }
}
