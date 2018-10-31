import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class MapsProvider {
  url;

  constructor(public http: Http) {
    console.log('Hello MapsProvider Provider');
    this.url = 'http://178.62.193.226:8000/maps/6/'
  }

  getLocation(){
    return this.http.get(this.url)
    //.map(this.getData)
    //.do(this.logResponse)
    //.map(res => res.json());
    //.do(res => console.log(res));
    .map(res => res.json());
  }
/*
  private logResponse(res: Response){
    console.log(res);
  }


  private getData(res: Response){
    return res.json
  }
  */

}
