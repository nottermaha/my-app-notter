import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  param: any;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.param = {};
  }

  submit() {
    let param = {
      name: this.param.name || 0,
      surename: this.param.surename || 0,
    }

    console.log(param)
    let api = '/api/persons/create';
    this.http.post(api, param)
    .subscribe((res) => {
      console.log(res);
    }, (err: HttpErrorResponse) => console.log(JSON.stringify(err)));
  }
}