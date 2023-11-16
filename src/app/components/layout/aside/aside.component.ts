import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        
        items: [
           {
             label: 'Mostrar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/clientes',
           },
           {
             label: 'Agregar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/addclientes',
           },
           {
             label: 'Actualizar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/clientes/edit/:id',
           },
           {
             label: 'Eliminar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/deleteclientes/:id',
           }
         ]
      },
      //----------------------------------------------//

      {
        label: 'Ventas',
        icon: 'pi pi-credit-card',
        items:[

          {
            label: 'Mostrar Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'ventas'
          },

          {
            label: 'Agregar Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'addventas'
          },

          {
            label: 'Actualizar  Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'ventas/edit/:id'
          },

          {
            label: 'Eliminar Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'deleteventas/:id'
          }
        ]
      },
      {
        label: 'Marcas',
        icon: 'pi pi-fw pi-users',
      
        items: [
          {
            label: 'Mostrar Marcas',
            icon: 'pi pi-fw pi-note',
            routerLink: '/Marca',
          },
          {
            label: 'Agregar Marcas',
            icon: 'pi pi-fw pi-note',
            routerLink: '/addMarca',
          },
          {
            label: 'Actualizar Marcas',
            icon: 'pi pi-fw pi-note',
            routerLink: '/Marca/edit/:id',
          },
          {
            label: 'Eliminar Marcas',
            icon: 'pi pi-fw pi-note',
            routerLink: '/deleteMarca/:id',
          }
        ]
      },
      //----------------------------------------------//
      
      {
        label: 'Coches',
        icon: 'pi pi-credit-card',
        items: [
          {
            label: 'Mostrar Coches',
            icon: 'pi pi-credit-card',
            routerLink: 'coches',
          },
          {
            label: 'Agregar Coches',
            icon: 'pi pi-credit-card',
            routerLink: 'addcoches',
          },
          {
            label: 'Actualizar Coches',
            icon: 'pi pi-credit-card',
            routerLink: 'coches/edit/:id',
          },
          {
            label: 'Eliminar Coches',
            icon: 'pi pi-credit-card',
            routerLink: 'deletecoches/:id',
          }
        ]
      }
      
      
     

    ];
  }

}
