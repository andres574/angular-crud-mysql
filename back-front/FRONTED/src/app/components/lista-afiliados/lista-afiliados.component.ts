import { Component,OnInit } from '@angular/core';
import { AppService} from 'src/app/servicios/App.service';
import { AfiliadoInter } from 'src/app/interface/DatosAfiliado';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lista-afiliados',
  templateUrl: './lista-afiliados.component.html',
  styleUrls: ['./lista-afiliados.component.css']
})
export class ListaAfiliadosComponent implements OnInit {


  afiliadoArray:AfiliadoInter[];

  constructor(private ServiceApp:AppService ){
    this.afiliadoArray=[]
  }
   

  ngOnInit(): void {

    this.getAfiliados();
      
  }

  getAfiliados(){
    
    this.ServiceApp.getAfiliados().subscribe(
      res=>{
        this.afiliadoArray=<any>res;
        this.afiliadoArray.map(i =>{
         i.edad = this.getEdad((i.fecha_nacimiento));      
          
        })
        
      
      },
      err => console.log(err)
      
    )
  }

eliminar(id:any){
  this.ServiceApp.deleteAfiliado(id).subscribe(
    res => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'usuario eliminado',
        showConfirmButton: false,
        timer: 1000
      })
      this.getAfiliados();

    },
    err=> (
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se logro eleiminar el usuario!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    )
    
  )
  
}


 getEdad(fecha:any) {
  let hoy = new Date()
  let fechaNacimiento = new Date(fecha)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  let diferenciadias= hoy.getDay() - fechaNacimiento.getDay()
 
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    return `Fecha Invalidas`;

  }

  if(edad == 0 && diferenciaMeses > 0){
    return `${diferenciaMeses} meses`;
  }else if(edad == 0 && diferenciaMeses ==0 && diferenciadias >= 0){
    return `${diferenciadias} dias`;
  }
  return `${edad} años`;
}

}
