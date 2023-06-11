import { Component, OnInit } from '@angular/core';
import { AfiliadoInter, nSisben, tipoCedula } from 'src/app/interface/DatosAfiliado';

import { AppService } from 'src/app/servicios/App.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  documentos:tipoCedula[] = [];
  nSisben:nSisben[] = [];
   crearUser:FormGroup;
   afiliadoArray:any[] =[];
   isSubmit=false;
   id: string | null;
   btnSubmit='Usuario';
   tituloPag= '';


  constructor(private ServiceApp:AppService,private fb: FormBuilder, private ruta: Router, private aRoute: ActivatedRoute){
    this.crearUser = this.fb.group({
      tipoDocumento: ['', Validators.required ],
      numeroDocumento: ['', Validators.required ],
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required ],
      fechaNacimiento: ['', Validators.required ],
      fechaAfiliacion: ['', Validators.required ],
      direccion: ['', Validators.required ],
      telefono: ['', Validators.required ],
      sisben: ['', Validators.required ],
      nivelSisben:['',Validators.required]      
    })
   
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
   this.cargaDatos();
  }

  cargaDatos(){

    if(this.id !== null){
      this.getUsuario(this.id);
      this.btnSubmit = 'Actualizar Usuario';
     
     
      

    }else{
      this.btnSubmit = 'Agregar Usuario';
      this.tituloPag ='Nuevo Usuario' ;
    }

    this.getDocumentos();  
    this.getNsisben();  
  }


  
  getDocumentos(){    
    this.ServiceApp.getDocumento().subscribe(
      res=>{  
        const docu =<any>res;
        for (let i = 0; i < docu.length; i++) {
         this.documentos.push(docu[i])          
        }            
      },
      err => console.log(err)
      
    )
  }

  getNsisben(){    
    this.ServiceApp.getNsisben().subscribe(
      res=>{  
        const docu =<any>res;
        for (let i = 0; i < docu.length; i++) {
         this.nSisben.push(docu[i])          
        }  
       
      },
      err => console.log(err)
    
      
    )
  }

  getUsuario(id:string){
    this.ServiceApp.UnAfiliado(id).subscribe(
      res=>{  
        const docu =<any>res;
        for (let i = 0; i < docu.length; i++) {
         this.afiliadoArray.push(docu[i]);         
        }    
        this.crearUser.setValue({
          tipoDocumento: this.afiliadoArray[0].id_tipo_doc,
          numeroDocumento:  this.afiliadoArray[0].CC,
          nombre:  this.afiliadoArray[0].nombre,
          apellido:  this.afiliadoArray[0].apellidos,
          fechaNacimiento: new Date(this.afiliadoArray[0].fecha_nacimiento).toISOString().substring(0,10), 
          fechaAfiliacion:new Date(this.afiliadoArray[0].fecha_afiliacion).toISOString().substring(0,10),   
          direccion:  this.afiliadoArray[0].direccion,
          telefono:  this.afiliadoArray[0].telefono,
          sisben:  this.afiliadoArray[0].id_sisben,
          nivelSisben: this.afiliadoArray[0].nivel_sisben
        })   
   
     
      this.tituloPag =`Actualizar Usuario  ${this.afiliadoArray[0].nombre} ${this.afiliadoArray[0].apellidos}` ;  
               
      },
      err => console.log(err)
      
    )
    

  }

  AccionAddEdit(){
  this.isSubmit =true;
  if(this.crearUser.invalid){
   
    return;
  };
  
  if(this.id === null){   
    this.crearUsuario();
  }else{
    this.editarUsuario(this.id);
    this.ruta.navigate(['/listar']);    
  } 
    
  }

  crearUsuario(){
    const{ tipoDocumento,numeroDocumento,nombre,
      apellido,fechaNacimiento,fechaAfiliacion,
      direccion,telefono,sisben,nivelSisben }=this.crearUser.value

    const usuarioNew:any = {
      id_tipo_doc: tipoDocumento.trim(),
      CC:numeroDocumento,
      nombre:nombre,
      apellido:apellido.trim(),
      fecha_nacimiento:fechaNacimiento,
      fecha_afiliacion:fechaAfiliacion,
      direccion:direccion,
      telefono:telefono,
      id_sisben:sisben,
      nivel_sisben:nivelSisben,

    }
       
    this.ServiceApp.anidarAfiliado(usuarioNew).subscribe(
      res=>{
        const docu =<any>res;

     if(docu['estado']===true){
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'usuario Agregado!',
        showConfirmButton: false,
        timer: 1000
      });
   
      this.ruta.navigate(['/listar'])
      
     }else{
     
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se logro agregar el usuario!',
        
      })
      
     }      
      
      },
      err => console.log(err)
      
    )
  

  }

  editarUsuario(idAnexo:string){
    const{ tipoDocumento,numeroDocumento,nombre,
      apellido,fechaNacimiento,fechaAfiliacion,
      direccion,telefono,sisben,nivelSisben }=this.crearUser.value

    const usuarioNew:any = {
      id_tipo_doc: tipoDocumento,
      CC:numeroDocumento,
      nombre:nombre,
      apellido:apellido,
      fecha_nacimiento:fechaNacimiento,
      fecha_afiliacion:fechaAfiliacion,
      direccion:direccion,
      telefono:telefono,
      id_sisben:sisben,
      nivel_sisben:nivelSisben,

    }
    const ida = this.id;
       
    this.ServiceApp.actualizarAfiliado(idAnexo, usuarioNew).subscribe(
      res=>{
        const docu =<any>res;

     if(docu['estado']===true){
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'usuario Actualizado!',
        showConfirmButton: false,
        timer: 1000
      });
   
      this.ruta.navigate(['/listar'])
      
     }else{
     
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se logro actualizar el usuario!',
        
      })
      
     }      
      
      },
      err => console.log(err)
      
    )
  

  }
}
