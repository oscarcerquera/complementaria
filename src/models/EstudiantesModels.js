const pool = require('../database');
module.exports = function() {
    
    async function listarEstudiantes() {
        let query="select * from estudiantes ";
        return await pool.query(query);

    }
    async function CrearEstudiantes(creaestu) {
        let query = "insert into estudiantes set ?";
        return await pool.query (query, creaestu);

    }
    async function EliminarEstudiantes(elimiestu) {
        let sql = "delete from estudiantes where id_estudiantes = ?"
        return await pool.query(sql, elimiestu);

    }   
    async function ModificarEstudiantes(modifiestu) {
        let blanca = `update estudiantes set nombre_estu=?,
                                             edad=?,
                                             correo=?,
                                             semestre=?
                                             where id_estudiantes =?`
        return await pool.query(blanca, modifiestu);                                     


    } 
    return {
        listarEstudiantes,
        CrearEstudiantes,
        EliminarEstudiantes,
        ModificarEstudiantes
    }
    
}