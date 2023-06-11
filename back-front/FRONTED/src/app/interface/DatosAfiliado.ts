export interface AfiliadoInter{
    CC?:string;
    descripcion:string;
    direccion:string;
    fecha_afiliacion?:Date;
    fecha_nacimiento?:Date;
    id_afiliado?:string;
    nivel_sisben?:Number;
    nombre?:string;
    apellidos:string;
    puntaje_sisben?:String;
    telefono?:number; 
    edad?:String  

}

export interface tipoCedula{
    id_tipo_doc:number,
    descripcion:String

}
export interface nSisben{
    id_sisben:number,
    puntaje_sisben:String

}








