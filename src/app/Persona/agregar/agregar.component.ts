import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego con éxito!");
      this.router.navigate(["Listar"]);
    })
  }
}
