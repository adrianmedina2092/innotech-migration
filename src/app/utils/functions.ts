/**
 * Funcion que transforma los datos de la consulta
 * a un formato valido de datos para una tabla
 * de angular materiaal
 * @param displayedColumns array de string de las cabeceras
 * @param datos array de string de datos de la consulta
 * @returns un array de objetos con las cabeceras como claves y los valores de datos como valores de las claves
 * @example
 * const displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 * const datos: string[] = [["1", "Hydrogen", "1.0079",  "H"], ["2", "Helium", "4.0026",  "He"]];
 * 
 * const transformedData = transformDataConsulta(displayedColumns, datos);
 * 
 * output:
 * [
        {
            position: '1',
            name: 'Hydrogen',
            weight: '1.0079',
            symbol: 'H'
        },
        {
            position: '2',
            name: 'Helium',
            weight: '4.0026',
            symbol: 'He'
        }
    ]
 */
export const transformDataConsulta = (
  displayedColumns: string[],
  datos: string[][]
): any[] => {
  // Utilizamos el método map para generar el array de objetos transformados
  const transformedData = datos.map((row) => {
    return row.reduce((obj: any, value, index) => {
      obj[displayedColumns[index]] = value;
      return obj;
    }, {});
  });

  // Retornamos el array de objetos transformados
  return transformedData;
};
