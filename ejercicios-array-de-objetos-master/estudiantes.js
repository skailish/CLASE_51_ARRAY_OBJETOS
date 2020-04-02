// // Hacer ejercicios de estudiantes acá
// Estudiantes
// Hacer las siguientes funciones:

// estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido

const estudiantesPorHechizo = (hechizo, estudiantes) => {
    const hechizoPreferido = estudiante => estudiante.hechizoPreferido === hechizo;
    return estudiantes.filter(hechizoPreferido)
}


// estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro


const estudiantesConMasAmiguesQue = (cantidadAmigues, estudiantes) => {
    const tieneMasAmiguesQue = estudiante => estudiante.amigues.length >= cantidadAmigues;
    return estudiantes.filter(tieneMasAmiguesQue);
}


// estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares(p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro

const estudiantesConFamiliares = (familiares, estudiantes) => {

    const estudianteTieneAlgunFamiliar = estudiante => familiares.includes(estudiante.familiar)

    return estudiantes.filter(estudianteTieneAlgunFamiliar)
}



// obtenerPromedioDeEstudiante, que tome por parámetro une estudiante(que se saca del array estudiantes) y devuelva el promedio total de todas las materias

const obtenerPromedioDeEstudiante = estudiante => {

    const sumaMaterias = (sumaParcial, materia, index, array) => {
        sumaParcial = sumaParcial + materia.promedio;
        return index !== array.length - 1 ? sumaParcial : sumaParcial / array.length
    }

    return estudiante.materias.reduce(sumaMaterias, 0)
   
}




// estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número(usar la función anterior)


const estudiantesConPromedioMayorA = (numero, estudiantes) => {
    const copiaEstudiantes = [...estudiantes];
    const promedioMayor = estudiante => {
        return obtenerPromedioDeEstudiante(estudiante) > numero;
    }
    return copiaEstudiantes.filter(promedioMayor);
}



// mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

const mejoresEstudiantesPorCasa = (casa, estudiantes) => {
    const porCasa = estudiante => estudiante.casa === casa;
    return estudiantesConPromedioMayorA(6, estudiantes.filter(porCasa));
}


// casaConMejoresEstudiantes, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6(usar la función anterior)
const casaConMejoresEstudiantes = estudiantes => {

    const aMejoresPormedioPorCasa = (objParcial, estudiante) => {
        objParcial[estudiante.casa] = objParcial[estudiante.casa] + 1 || 1;
        return objParcial
    }
    
    const conMayorCantidad = (masCantidad, casa, estudiantes) =>{
        return mejoresEstudiantesPorCasa(masCantidad, estudiantes) > mejoresEstudiantesPorCasa(casa, estudiantes) ? masCantidad : casa
        
    }
    
    const estudiantesMejoresPromedio = estudiantesConPromedioMayorA(6, estudiantes);
    const mejorPromedioPorCasa = estudiantesMejoresPromedio.reduce(aMejoresPormedioPorCasa, {})
    const nombresCasas = Object.keys(mejorPromedioPorCasa);
    
    
    return nombresCasas.reduce((masCantidad, casa) => conMayorCantidad(masCantidad, casa, estudiantes))
    

}        


            
// estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6

const estudiantesPorMateriaAprobada = (materiaElegida, estudiantes) => {
    const esPromedioMayorA6 = materia => materia.nombre === materiaElegida && materia.promedio > 6
    const estudiantesConMejorPromedioEnMateria = estudiante => {
        const esMayorA6 = estudiante.materias.filter(esPromedioMayorA6)
        return esMayorA6.length !== 0
    }
    return estudiantes.filter(estudiantesConMejorPromedioEnMateria)
}


// obtenerInfoResumida, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: nombre, casa, promedio, amigues(cantidad)

const obtenerInfoResumida = estudiantes => {
    const infoResumidaEstudiante = estudiante => ({ nombre: estudiante.nombreCompleto.nombre + " " + estudiante.nombreCompleto.apellido, casa: estudiante.casa, promedio: Math.round(obtenerPromedioDeEstudiante(estudiante)), amigues: estudiante.amigues.length })
    return estudiantes.map(infoResumidaEstudiante);
}




// cantidadDeEstudiantesPorCasa, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa(no debe contar amigues)

const cantidadDeEstudiantesPorCasa = estudiantes => {
    const aEstudiantesPorCasa = (objetoParcial, estudiante) => {
        objetoParcial[estudiante.casa] = objetoParcial[estudiante.casa] + 1 || 1;
        return objetoParcial
    };
    return estudiantes.reduce(aEstudiantesPorCasa, {});
}

// cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia(promedio superior a 6)
/// EJERCICIO RESUELTO EN CLASE

const cantidadDeEstudiantesPorMateriaAprobada = estudiantes => {
    
    const aEstudiantesPorMateria = (cuentaParcial, materia) => { 
        cuentaParcial[materia] = cuentaParcial[materia] + 1 || 1
        return cuentaParcial
    }
    
    
    const aEstudiantesPorMateriasAprobadas = (cuentaParcial, estudiante) => {
        return estudiante.materias
        .filter(materia => materia.promedio > 6)
        .map(materia => materia.nombre)
        .reduce(aEstudiantesPorMateria, cuentaParcial)
        
    };
    
    return estudiantes.reduce(aEstudiantesPorMateriasAprobadas, {});

}



// promedioPorMateria, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y el promedio total de dicha materia entre todes les estudiantes(suma de todos los promedios divido la cantidad de estudiantes)

const promedioPorMateria = estudiantes => {
    
    const aPromedioPorMateria = (cuentaParcial, estudiante, index, array) => {
        
        if (index === (array.length - 1)) {
            estudiante.materias.forEach(materia => {
                cuentaParcial[materia.nombre] = ((cuentaParcial[materia.nombre] + materia.promedio) / array.length) || materia.promedio
            });
            
        } else {
            estudiante.materias.forEach(materia => {
                cuentaParcial[materia.nombre] = cuentaParcial[materia.nombre] + materia.promedio || materia.promedio
            });
        }
        
        return cuentaParcial
    }
    
    return estudiantes.reduce(aPromedioPorMateria,{})
    
}



// familiarPreferido, que tome por parámetro un array de estudiantes y devuelva el familiar que más estudiantes tienen

const familiarPreferido = estudiantes => {
    
    
    const aEstudiantePorFamiliar = (objParcial, estudiante) => {
        objParcial[estudiante.familiar] = objParcial[estudiante.familiar] + 1 || 1;
        
        return objParcial
    }
    
    const conMayorCantidad = (masCantidad, familiar, estudiantesPorFamiliar) => {
        return estudiantesPorFamiliar[familiar] > estudiantesPorFamiliar[masCantidad] ? familiar : masCantidad
    }
 
    
    const estudiantesPorFamiliar = estudiantes.reduce(aEstudiantePorFamiliar, {})
    const nombresFamiliares = Object.keys(estudiantesPorFamiliar);
    
    return nombresFamiliares.reduce((masCantidad, familiar) => conMayorCantidad(masCantidad, familiar, estudiantesPorFamiliar))
    
}

