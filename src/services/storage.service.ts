import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js'
@Injectable({
  providedIn: 'root'
})
export class LocalService {
  key = "123";
  constructor() { }
  public saveData(key: string, value: string) {
    localStorage.setItem(key,value);
  }
  public getData(key: string) {
    let data = localStorage.getItem(key)|| "";
    return data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
  
}