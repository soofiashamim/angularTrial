import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  constructor() { }
  public loginservice (username:any, password:any)
  {
    console.log("Welocome to services"+username+"password"+password)
  }

}
