import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContentfullService {

  constructor() { }
  private client = createClient({
    space: 'xtahtliuu1qc',
    accessToken: 'OitOE-gZ0RJT_jxV8uyuUVQAwLPliOFCaP7dxvrKZYc',
  })

  getAllEntries() {
    const promise = this.client.getEntries();
    console.log(promise);
    return from (promise);
  
  }
}