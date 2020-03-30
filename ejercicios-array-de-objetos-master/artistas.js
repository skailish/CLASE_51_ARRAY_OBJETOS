// // Hacer ejercicios de artistas acá
// Artistas
// artistasSolistas, que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas
const artistasSolistas = artistas => {

    const esSolista = artista => artista.solista;
    return artistas.filter(esSolista)
}

// artistasPorEdad, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad, ordenados de menor a mayor según la edad

///interpreto que NO PUEDO ORDENAR UN ARRAY SI TODOS LOS ARTISTAS TIENEN LA MISMA EDAD (filtré según UNA EDAD)
const artistasPorEdad = (edad, artistas) => {
    const tieneEdad = artista => artista.edad >= edad;
    return artistas.filter(tieneEdad);

}



// cantidadDeArtistasPorInstrumento, que tome un parámetro "instrumento" y devuelva un objeto donde cada "instrumetno" es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento
const cantidadDeArtistasPorInstrumento = artistas => {
    const artistasPorInstrumento = (datosParciales, artista) => {
        datosParciales[artista.instrumento] = datosParciales[artista.instrumento] + 1 || 1;
        return datosParciales;
    }

    return artistas.reduce(artistasPorInstrumento, {})
}

// cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género
const cantidadDeArtistasPorGenero = artistas => {

    const artistaPorGenero = (datosParciales, artista) => {
        datosParciales[artista.genero] = datosParciales[artista.genero] + 1 || 1;
        return datosParciales;
    }

    return artistas.reduce(artistaPorGenero, {})
}


// artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos

// COMO ORDENO???? ==> SORT()..... método encontrado en internet

const artistasConMasDiscosQue = (cantidadDeDiscos, artistas) => {
    const tienenMasDiscosQue = artista => artista.discos.length >= cantidadDeDiscos;
    const artistasPorCantidadDeDiscos = artistas.filter(tienenMasDiscosQue);

    const sortByDisco = (a, b) => {
        return b.discos.length - a.discos.length
    }

    return artistasPorCantidadDeDiscos.sort(sortByDisco)

}



// artistaConMasEntradasVendidas, que tome por parámetro un array de artistas y devuelva el objeto artista que vendió más entradas en su último recital

const artistaConMasEntradasVendidas = artistas => {
    const aArtistaQueMasEntradasVendio = (artistaQueMasVendio, artista) => {
       
        return (artistaQueMasVendio.ultimoRecital.entradasVendidas) > (artista.ultimoRecital.entradasVendidas) ? artistaQueMasVendio : artista
    }

  return artistas.reduce(aArtistaQueMasEntradasVendio)

}


// artistaConMayorRecaudacion, que tome por parámetro un array de artistas y devuelva el objeto artista que más recaudó en su último recital(entradasVendidas * costoEntradas)


const artistaConMayorRecaudacion = artistas => {
    const aArtistaQueMasRecaudo = (artistaQueMasVendio, artista) => {

        return (artistaQueMasVendio.ultimoRecital.entradasVendidas * artistaQueMasVendio.ultimoRecital.costoEntradas) > (artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas) ? artistaQueMasVendio : artista
    }

    return artistas.reduce(aArtistaQueMasRecaudo)
}



///// NO ME SALE ///// COPIO DE FLOR
// artistasConDiscoEnAnio, que tome por parámetro un parámetro "anio", y devuelva true un array con los artistas que tengan publicado al menos un disco en dicho año

const artistasConDiscoEnAnio = (anio, artistas) => {
    const tieneAnio = disco => disco.anioLanzamiento === anio
    const porDiscoEnAnio = artista => {
        const resultado = artista.discos.filter(tieneAnio)
        return resultado.length !== 0
    }
    return artistas.filter(porDiscoEnAnio)
}




// artistaConMasCopias, que devuelva el objeto artista que más copias de discos en total vendió
const artistaConMasCopias = artistas => {
    const copiaArtistas = [...artistas]

    const aCantidadCopiasVendidas = (discosTotal, disco) => {
        discosTotal += disco.copiasVendidas;
        return discosTotal
    }


    const aMasCopiasVendidas = (masCopiasArtista, artista) => {
        const primerArtista = masCopiasArtista.discos.reduce(aCantidadCopiasVendidas, 0);
        const segundoArtista = artista.discos.reduce(aCantidadCopiasVendidas, 0);

        const artistaConMasVentas = primerArtista > segundoArtista ? masCopiasArtista : artista;

        return artistaConMasVentas
    }


    return copiaArtistas.reduce(aMasCopiasVendidas);
}

