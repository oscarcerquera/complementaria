const express = require('express');
const router = express.Router();
const MateriasControllers = require('../../controllers/MateriasControllers');
const ClasesControllers = require('../../controllers/ClasesControllers');
const EstudiantesControllers = require('../../controllers/EstudiantesControllers');

//materia
router.get('/materiae',MateriasControllers.EliminarMaterias);
router.get('/materiam',MateriasControllers.ModificarMaterias);
router.get('/materiac',MateriasControllers.CrearMaterias);
router.get('/materia',MateriasControllers.listarMaterias);

//clase
router.get('/clasem',ClasesControllers.ModificarClases );
router.get('/clasee',ClasesControllers.EliminarClases );
router.get('/clasec',ClasesControllers.CrearClases );
router.get('/clase',ClasesControllers.listarClases);

//estudiante
router.post('/estudiantem/:id', EstudiantesControllers.ModificarEstudiantes);
router.get('/estudiantee/:id', EstudiantesControllers.EliminarEstudiantes);
router.post('/estudiantec', EstudiantesControllers.crearEstudiantes);
router.get('/estudiante', EstudiantesControllers.listarEstudiantes);

//rutas api
router.get('/api/estudiantes', EstudiantesControllers.listarEstudiantesApi);



module.exports = router;