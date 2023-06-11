const { error, log } = require('console');
const conexion = require('../config/conexion');
const moment = require('moment/moment');



const afiliadosGet = (req,res) =>{
    let sql = 'select a.CC, a.nombre,a.apellidos, a.fecha_nacimiento, a.fecha_afiliacion, a.direccion, a.telefono, a.id_afiliado, a.nivel_sisben, s.puntaje_sisben, tc.descripcion'+
    ' from afiliado a INNER JOIN sisben s ON (a.nivel_sisben = s.id_sisben) INNER JOIN tipo_documento tc on (a.id_tipo_doc = tc.id_tipo_doc)'
      
    conexion.query(sql,(error,filas,campos)=>{
            if (error){
                res.json({estado:false, msj:error['sqlMessage'],codeError:error['code']})
               }
            else {
                res.json(filas)
            }
         })
}



const unicoAfiliadoGet = (req,res)=>{
    const {id} = req.params
    let sql = 'select * from afiliado where id_afiliado =? ';
    conexion.query(sql,[id],(error,filas,campos)=>{
        if (error){
            res.json({estado:false, msj:error['sqlMessage'],codeError:error['code']})
           }
        else {
            res.json(filas)
        }
     })
};


const afiliadoDetete = (req,res)=>{
    const {id} = req.params;
 
     let sql = `delete from afiliado where id_afiliado = ${id}`;
     conexion.query(sql,[id],(error,filas,campos)=>{
         if (error){
             res.json({estado:false, msj:error['sqlMessage'],codeError:error['code']})
            }
         else {
             res.json({estado:true})
         }
      })
 };

const afiliadoPost = (req,res)=>{
  
    const {id_tipo_doc,  CC, nombre,apellido, fecha_nacimiento,
          fecha_afiliacion, direccion, telefono, id_sisben, nivel_sisben} = req.body;
 
      const nacimiento =  moment(fecha_nacimiento).format('YYYY-MM-DD');
      const afiliacion =  moment(fecha_afiliacion).format('YYYY-MM-DD');
      if(fecha_nacimiento != '' && fecha_afiliacion != ''){
         let sql = `INSERT INTO afiliado(id_tipo_doc, CC, nombre,apellidos, fecha_nacimiento,
             fecha_afiliacion, direccion, telefono, id_sisben, nivel_sisben) VALUES ('${id_tipo_doc}', '${CC}', '${nombre}','
             ${apellido.trim()}','${nacimiento}', '${afiliacion}', '${direccion}', '${telefono}', '${id_sisben}', '${nivel_sisben}')`;
    
        conexion.query(sql,(error,filas,campos)=>{
            if (error){
             res.json({estado:false, msj:error['sqlMessage'],codeError:error['code']})
            }
            else {
                res.json({estado:true})
            }
         })
      }else{
         res.json({estado:false})
      } 
     
 };

const afiliadoUpdate = (req,res)=>{

    const {id} = req.params
   const {id_tipo_doc,  CC, nombre,apellido, fecha_nacimiento,
         fecha_afiliacion, direccion, telefono, id_sisben, nivel_sisben} = req.body
    let sql = `UPDATE afiliado SET id_tipo_doc='${id_tipo_doc}', CC= '${CC}',nombre= '${nombre}',apellidos= '${apellido}', fecha_nacimiento= '${fecha_nacimiento}' ,fecha_afiliacion= '${fecha_afiliacion}'
    ,direccion='${direccion}',telefono='${telefono}',id_sisben='${id_sisben}',
    nivel_sisben='${nivel_sisben}' WHERE id_afiliado = '${id}' `;
    conexion.query(sql,(error,filas,campos)=>{
        if (error){
            res.json({estado:false, msj:error['sqlMessage'],codeError:error['code']})

           }
        else {
            res.json({estado:true})
        }
     })
};
 
 


module.exports={
    afiliadosGet,
    unicoAfiliadoGet,
    afiliadoDetete,
    afiliadoPost,
    afiliadoUpdate
}


