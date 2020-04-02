// // Hacer ejercicios de empleades acá
// Empleades
// Hacer las siguientes funciones:

// empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia
const empleadesQueHacenGuardia = empleades => {
    const haceGuardia = empleade => empleade.haceGuardia === true;
    return empleades.filter(haceGuardia);
};

// empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

const empleadesPorPais = (paisElegido, empleades) => {
    const esDePais = empleade => empleade.pais === paisElegido;

    return empleades.filter(esDePais);
};

// empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área

const empleadesPorArea = (areaElegida, empleades) => {
    const esDeArea = empleade => empleade.area === areaElegida;

    return empleades.filter(esDeArea);
};

// empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

const empleadesConSueldoMayorA = (montoSueldo, empleades) => {
    const tieneMayorSueldoQue = empleade => empleade.sueldo > montoSueldo;

    const sueldoMenorAMayor = (a, b) => {
        return a.sueldo - b.sueldo;
    };

    return empleades.filter(tieneMayorSueldoQue).sort(sueldoMenorAMayor);
};

// empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número

const empleadesConMasLenguajes = (cantidadLenguajes, empleades) => {
    const tieneMasLenguajesQue = empleade =>
        empleade.lenguajes.length > cantidadLenguajes;

    return empleades.filter(tieneMasLenguajesQue);
};

// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleados
const sueldoPromedioEmpleades = empleades => {
    const sumaTotalSueldos = (sumaParcial, empleade, index, empleades) => {
        sumaParcial += empleade.sueldo;

        return index !== empleades.length - 1
            ? sumaParcial
            : sumaParcial / empleades.length;
    };

    return empleades.reduce(sumaTotalSueldos, 0);
};

// sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

const sueldoPromedioPorSeniority = (seniorityFiltro, empleades) => {
    const empleadesConSeniority = empleade =>
        empleade.seniority === seniorityFiltro;

    return sueldoPromedioEmpleades(empleades.filter(empleadesConSeniority));
};

// buscarEmpleades, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

const buscarEmpleades = (area, puesto, seniority, empleades) => {
    const filtrarEmpleades = empleade =>
        empleade.area === area &&
        empleade.puesto === puesto &&
        empleade.seniority === seniority;

    return empleades.filter(filtrarEmpleades);
};

// errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

const errorEnProduccion = empleades => {
    const cambiarATrue = empleade => ({ ...empleade, haceGuardia: true }); /// SOLUCIÓN POR PABLO

    return empleades.map(cambiarATrue);
};

// subirDeCategoria, que tome como parámetro un objeto empleade.Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

/// como hacerlo con reduce???
const subirDeCategoria = empleade => {
    if (empleade.seniority != "Senior") {
        if (empleade.seniority === "Trainee") {
            empleade.seniority = "Junior";
        } else if (empleade.seniority === "Junior") {
            empleade.seniority = "Semisenior";
        } else if (empleade.seniority === "Semisenior") {
            empleade.seniority = "Senior";
        }
    }

    empleade.sueldo = empleade.sueldo + 10000; // SI LA CONSIGNA PIDE QUE SOLO SI !NO ES SENIOR SE LE APLIQUEN EL AUMENTO DE SUELDO, ESTO VA DENTRO DE LA OTRA FUNCION.
    return empleade;
};

// agregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías, que es un array conteniendo los valores "GIT" y "Node.js"

const agregarTecnologias = empleades => {
    const agregoTecnologias = empleade => {
        empleade.tecnologías = ["GIT", "Node.js"];
        return empleade;
    };

    return empleades.map(agregoTecnologias);
};

// empleadeSabeLenguaje, que tome por parámetro un objeto empleade(elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje

const empleadeSabeLenguaje = (empleade, lenguaje) => {
    const { lenguajes } = empleade;
    return lenguajes.includes(lenguaje);
};

// empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje(usar la función anterior)

const empleadesQueSabenLenguaje = (lenguaje, empleades) => {
    const sabeLenguaje = empleade => empleadeSabeLenguaje(empleade, lenguaje);

    return empleades.filter(sabeLenguaje);
};

// empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

const empleadesQueSabenLenguajes = (lenguajes, empleades) => {
    const empleadeSabeLenguajes = (empleade, lenguajes) => {
        return lenguajes.every(lenguaje => empleade.lenguajes.includes(lenguaje));
    };

    const sabeLenguajes = empleade => empleadeSabeLenguajes(empleade, lenguajes);

    return empleades.filter(sabeLenguajes);
};

// empleadesQueSabenAlgunosLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

const empleadesQueSabenAlgunosLenguajes = (lenguajes, empleades) => {
    const empleadeSabeAlgunLenguaje = empleade => {
        return lenguajes.some(lenguaje => empleade.lenguajes.includes(lenguaje));
    };

    return empleades.filter(empleadeSabeAlgunLenguaje);
};

// empleadesConMejorSueldo, que devuelva un array con los 10 mejores empleades pagos(investigar metodo sort)

const empleadesConMejorSueldo = empleades => {
    const empleadesOrdenados = [...empleades];
    const sueldoMayorAMenor = (a, b) => {
        return b.sueldo - a.sueldo;
    };

    empleadesOrdenados.sort(sueldoMayorAMenor);
    return empleadesOrdenados.slice(0, 10);
};

// obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade(usar map)

const obtenerTitulosCompletos = empleades => {
    const tituloCompleto = empleade =>
        `${empleade.nombre}, ${empleade.seniority}, ${empleade.puesto}, ${empleade.area}`;

    return empleades.map(tituloCompleto);
};

// obtenerInfoPersonal, que devuelva un array donde cada elemento es un objeto con las propiedades
// nombre
// pais
// edad habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original(usar map)
const obtenerInfoPersonal = empleades => {
    const infoPersonal = empleade => ({
        nombre: empleade.nombre,
        pais: empleade.pais,
        edad: empleade.edad
    });

    return empleades.map(infoPersonal);
};

// obtenerInfoPuestos, que devuelva un array donde cada elemento es un objeto con las propiedades
// nombre
// area
// puesto
// seniority habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original(usar map)

const obtenerInfoPuestos = empleades => {
    const infoPuestos = empleade => ({
        nombre: empleade.nombre,
        area: empleade.area,
        puesto: empleade.puesto,
        seniority: empleade.seniority
    });

    return empleades.map(infoPuestos);
};

// obtenerInfoSeniority, que devuelva un array donde cada elemento es un objeto con las propiedades
// nombre
// seniority
// sueldo
// cantidadLenguajes habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe(usar map)

const obtenerInfoSeniority = empleades => {
    const infoSeniority = empleade => ({
        nombre: empleade.nombre,
        seniority: empleade.seniority,
        sueldo: empleade.sueldo,
        cantidadLenguajes: empleade.lenguajes.length
    });

    return empleades.map(infoSeniority);
};

// obtenerInfoPagos, que devuelva una array donde cada elemento es un objeto con las propiedades
// nombre
// sueldoBruto
// obraSocial
// jubilacion
// sueldoNeto habiendo un elemento por cada empleade, donde
// sueldoBruto es el sueldo del objeto original
// obraSocial es el 3 % del sueldoBruto
// jubilacion es el 11 % del sueldoBruto
// sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion

const obtenerInfoPagos = empleades => {
    const infoPagos = empleade => ({
        nombre: empleade.nombre,
        sueldoBruto: empleade.sueldo,
        obraSocial: Math.round(empleade.sueldo * 0.03),
        jubilacion: Math.round(empleade.sueldo * 0.11),
        sueldoNeto: Math.round(
            empleade.sueldo - empleade.sueldo * 0.03 - empleade.sueldo * 0.11
        )
    });

    return empleades.map(infoPagos);
};

// obtenerEstadisticasSeniority que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority

const obtenerEstadisticasSeniority = empleades => {
    const sumaSeniority = (sumaParcial, empleade) => {
        sumaParcial[empleade.seniority] = sumaParcial[empleade.seniority] + 1 || 1;

        return sumaParcial;
    };

    return empleades.reduce(sumaSeniority, {});
};

// obtenerEstadisticasLenguajes que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje

const obtenerEstadisticasLenguajes = empleades => {
    const sumaLenguajes = (sumaParcial, lenguaje) => {
        sumaParcial[lenguaje] = sumaParcial[lenguaje] + 1 || 1;
        return sumaParcial;
    };

    const aLenguajes = (listaParcial, item) => [
        ...listaParcial,
        ...item.lenguajes
    ];

    return empleades.reduce(aLenguajes, []).reduce(sumaLenguajes, {});
};

