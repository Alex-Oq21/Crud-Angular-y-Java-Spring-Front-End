import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  //URL que hace referencia al proyecto back-end
   Url='http://localhost:8082/CrudConAngular/persona';
   getPersonas(){
     return this.http.get<Persona[]>(this.Url);
   }
   createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
   }
}

