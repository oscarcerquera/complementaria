const EstudiantesModels = require('../models/EstudiantesModels');

async function listarEstudiantes(req, res) {
    const datosestu = await EstudiantesModels().listarEstudiantes();
    //console.log(datosestu)
    res.render('estudiantes/estudiante',{datosestu});
}
async function listarEstudiantesApi(req, res) {
    const datosestu = await EstudiantesModels().listarEstudiantes();
    console.log(datosestu)
    res.status(200).json(datosestu)

}
async function crearEstudiantes(req, res) {
    //console.log(req.body)
    const pepito = req.body;
    await EstudiantesModels().CrearEstudiantes(pepito);
    res.redirect('/estudiantes/estudiante');
}
async function CrearEstudiantesApi(req, res) {
    const creaestu = req.params.id;
    await EstudiantesModels().CrearEstudiantes(crearestu);
    //res.render('estudiantes/estudiante');
    res.status(200).json({
        sucess: 1,
        msg:'registro completo'
    })
}

async function EliminarEstudiantes(req, res){
    const elimiestu = req.params.id;
    await EstudiantesModels().EliminarEstudiantes(elimiestu);
    res.redirect('/estudiantes/estudiante');
}
async function ModificarEstudiantes(req, res){
    const modiestu = [
        req.body.nombre_estu,
        req.body.edad,
        req.body.correo,
        req.body.semestre,
        req.params.id
    ]
    await EstudiantesModels().ModificarEstudiantes(modiestu)
    res.redirect('/estudiantes/estudiante');
    //res.render('estudiantes/estudiante');
}

module.exports = {
    listarEstudiantes,
    crearEstudiantes,
    EliminarEstudiantes,
    ModificarEstudiantes,
    listarEstudiantesApi,
    CrearEstudiantesApi
}