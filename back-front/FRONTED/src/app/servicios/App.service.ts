import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AfiliadoInter } from '../interface/DatosAfiliado';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  url='/api/';

  constructor(private http: HttpClient) { }

  // sacar todos los afiliados
  getAfiliados(){
    return this.http.get(this.url+'afiliado');
  };

  //anidar nuevo afiliado a la bd 
  anidarAfiliado(afiliado:AfiliadoInter){

    return this.http.post(this.url+'afiliado',afiliado);

  };
// seleccionar un afiliado 
  UnAfiliado(id:string){
    return this.http.get(this.url+'afiliado/'+ id);
  };

  // eliminar afiliado
  deleteAfiliado(id:string){
    return this.http.delete(this.url+'afiliado/'+ id);
  };

  //acualizar afiliado
  actualizarAfiliado(id:string,afiliado:AfiliadoInter){
return this.http.put(this.url+'afiliado/'+id,afiliado);
  };

//obtener todos los documentos 
getDocumento(){
  return this.http.get(this.url+'documentos');
};

getNsisben(){
  return this.http.get(this.url+'nSisben');
};


}
