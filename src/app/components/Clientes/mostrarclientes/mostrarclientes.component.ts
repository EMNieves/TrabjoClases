import { Component, OnInit } from '@angular/core';
import { ClienteI } from './../../../models/cliente'
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service'
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrarclientes',
  templateUrl: './mostrarclientes.component.html',
  styleUrls: ['./mostrarclientes.component.css']
})
export class MostrarclientesComponent {
  public clientes:ClienteI[] = []
  public msgs1: Message[]=[];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (clientes) => {
         
          this.clientes = clientes
          console.log(this.clientes)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/clientes');
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
        this.mostrarClientes();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/clientes');

      }
    );
  }

  imprimir(id: number){

  }

}

