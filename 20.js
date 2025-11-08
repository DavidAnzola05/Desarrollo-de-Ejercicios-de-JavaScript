function filtrarAprobados_DAAC(lista_DAAC) {
  return lista_DAAC.filter(a_DAAC => a_DAAC.nota >= 80);
}
console.log("20) Aprobados:", filtrarAprobados_DAAC(alumnos_DAAC));