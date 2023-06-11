const { error, log } = require('console');
const conexion = require('../config/conexion');


const documentosGet = (req,res)=>{
    let sql = 'select * from tipo_documento'
    conexion.query(sql,(error,filas,campos)=>{
        if (error){
            res.json({estado:false, msj:error['sqlMessage'],codeError:error['code']})
           }
        else {
           
            res.json(filas)
        }
     })
};
module.exports = {
    documentosGet
}