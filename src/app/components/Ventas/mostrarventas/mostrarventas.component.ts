import { Component, OnInit } from '@angular/core';
import { VentasI } from './../../../models/ventas';
import { Router } from '@angular/router';
import { VentasService } from '../../../services/ventas.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrarventas',
  templateUrl: './mostrarventas.component.html',
  styleUrls: ['./mostrarventas.component.css']
})
export class MostrarventasComponent {

  public ventas: VentasI[] = [];
  public msgs1: Message[] = [];

  constructor(
    private ventasService: VentasService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarVentas();
  }

  mostrarVentas() {
    this.ventasService.getAllVenta()
      .subscribe({
        next: (ventas) => {
          this.ventas = ventas;
          console.log(this.ventas);
        },
      });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/ventas');
    this.ventasService.deleteVenta(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'Venta Eliminada',
          life: 5000,
        });
        this.mostrarVentas();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/ventas');
      }
    );
  }

  imprimir(id: number) {
    // Mantuve la función imprimir, ya que no se mencionó un cambio específico.
  }

}
