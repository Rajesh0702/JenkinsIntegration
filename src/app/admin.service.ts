import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllrecords(){
    return this.http.get('//' + '' + '/locationId/' + '' + '/user/' + '');
  }

  updateRecord(){
    return this.http.put('//' + '' + '/locationId/' + '' + '/user/' + '', '');
  }

  deleteRecord(){
    return this.http.delete('//' + '' + '/locationId/' + '' + '/user/' + '',);
  }
}
