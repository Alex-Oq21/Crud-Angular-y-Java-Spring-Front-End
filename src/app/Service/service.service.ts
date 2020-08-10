import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  //URL que hace referencia al proyecto back-end
   url='http://localhost:xxx';
   getPersonas(){
     return this.http.get<Persona[]>(this.url);
   }
}
