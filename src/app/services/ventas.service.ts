import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentasI } from '../models/ventas';
@Injectable({
  providedIn: 'root'
})
export class VentasService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/ventas/`
  constructor(
    private http:HttpClient
  ) { }

  getAllVenta() {
    return this.http
      .get<VentasI[]>(this.base_path);
  }
  
  getOneVenta(id: number): Observable<{ venta: VentasI[] }> {
    return this.http
      .get<{ venta: VentasI[] }>(`${this.base_path}${id}`);
  }
  
  createVenta(data: any): Observable<VentasI> {
    return this.http.post<VentasI>(this.base_path, data);
  }
  
  updateVenta(id: number, data: VentasI): Observable<VentasI> {
    return this.http.put<VentasI>(`${this.base_path}${id}`, data);
  }
  
  deleteVenta(id: number): Observable<VentasI> {
    return this.http.delete<VentasI>(`${this.base_path}${id}`);
  }
}
