const express = require('express');
const router = express.Router();
const MateriasControllers = require('../../controllers/MateriasControllers');
const ClasesControllers = require('../../controllers/ClasesControllers');
const EstudiantesControllers = require('../../controllers/EstudiantesControllers');

router.get('/materia',MateriasControllers.listarMaterias);
router.get('/clase',ClasesControllers.listarClases);
router.get('/estudiante',EstudiantesControllers.listarEstudiantes);

router.get('/materiac',MateriasControllers.CrearMaterias);
router.get('/clasec',ClasesControllers.CrearClases );
router.get('/estudiantec', EstudiantesControllers.CrearEstudiantes);

router.get('/materiae',MateriasControllers.EliminarMaterias);
router.get('/clasee',ClasesControllers.EliminarClases );
router.get('/estudiantee', EstudiantesControllers.EliminarEstudiantes);

router.get('/materiam',MateriasControllers.ModificarMaterias);
router.get('/clasem',ClasesControllers.ModificarClases );
router.get('/estudiantem', EstudiantesControllers.ModificarEstudiantes);
module.exports = router;