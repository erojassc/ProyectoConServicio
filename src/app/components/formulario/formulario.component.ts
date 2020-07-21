import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Tarea } from 'src/app/models/tarea';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public descripcion: string;
  public usuario: string;

  constructor(private tareaSvc: PrincipalService) { 

  }

  ngOnInit(): void {
  }

  procesar(): void{
    if (this.descripcion && this.descripcion !== '' && this.usuario && this.usuario !== ''){
      //console.log(this.descripcion);
      const tarea = new Tarea();
      var today = new Date(); 
      tarea.descripcion = this.descripcion;
      tarea.usuario = this.usuario;
      tarea.fecha = today; 
      this.tareaSvc.tareas.push(tarea);
      //console.log(tarea);
    }
  }

}
