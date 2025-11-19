
/**
 * Consulta efemérides astronómicas desde la API de NASA JPL Horizons.
 * @param cuerpo Nombre del cuerpo celeste (ej: "Mars", "Venus", "Sun")
 * @param fechaInicio Fecha de inicio (ej: "2025-11-18")
 * @param fechaFin Fecha de fin (ej: "2025-11-19")
 * @param intervalo Intervalo de tiempo (ej: "1 d")
 * @returns Datos de efemérides traducidos al español
 */
export async function obtenerEfemerides(
  cuerpo: string,
  fechaInicio: string,
  fechaFin: string,
  intervalo: string = "1 d"
): Promise<string | object> {
  const url = `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND="${cuerpo}"&EPHEM_TYPE=OBSERVER&START_TIME="${fechaInicio}"&STOP_TIME="${fechaFin}"&STEP_SIZE="${intervalo}"&QUANTITIES="1,2,3"`;
  const res = await fetch(url);
  const data = await res.json();
  // Traducción básica de algunos términos comunes
  if (data.result) {
    let resultado: string = data.result;
    // Eliminar mensajes de selección múltiple
    resultado = resultado.replace(/\*{79,}[\s\S]*?\*{79,}/g, "");
    // Traducción básica de algunos términos comunes
    resultado = resultado.replace(/Target/g, 'Cuerpo');
    resultado = resultado.replace(/Observer/g, 'Observador');
    resultado = resultado.replace(/Date/g, 'Fecha');
    resultado = resultado.replace(/RA/g, 'Ascensión Recta');
    resultado = resultado.replace(/DEC/g, 'Declinación');
    resultado = resultado.replace(/Distance/g, 'Distancia');
    return resultado.trim();
  }
  return data;
}
