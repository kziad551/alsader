import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }
}
export class SingletonService {
  public loginState:boolean = false;
}
