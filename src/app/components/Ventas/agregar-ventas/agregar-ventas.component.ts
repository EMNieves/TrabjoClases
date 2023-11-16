import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VentasService } from '../../../services/ventas.service';
import { VentasI } from '../../../models/ventas';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-agregar-ventas',
  templateUrl: './agregar-ventas.component.html',
  styleUrls: ['./agregar-ventas.component.css']
})
export class AgregarVentasComponent {
  
  public form: FormGroup = this.formBuilder.group({
    precio_venta: ['', [Validators.required]],
    metodo_pago: ['', [Validators.required]],
    fecha_venta: ['', [Validators.required]],
   
  });

  
  constructor(
    private formBuilder: FormBuilder,
    private ventasService: VentasService,
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: VentasI = this.form.value;
    console.log(formValue);
    this.ventasService.createVenta(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Venta Creada',
            life: 5000
          });
        }, 0);
        this.router.navigateByUrl('ventas');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  get precio_venta() {
    return this.form.get('nombreVenta');
  }

  get metodo_pago() {
    return this.form.get('direccionVenta');
  }

  get fecha_venta() {
    return this.form.get('telefonoVenta');
  }

 
}
