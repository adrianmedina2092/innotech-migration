export const COLUMNS_OPERACIONES_LIQUIDACION = [
  {
    columnDef: 'position',
    header: 'No.',
    cell: (element: any) => `${element.position}`,
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: any) => `${element.name}`,
  },
  {
    columnDef: 'weight',
    header: 'Weight',
    cell: (element: any) => `${element.weight}`,
  },
  {
    columnDef: 'symbol',
    header: 'aguacate',
    cell: (element: any) => `${element.symbol}`,
  },
];
