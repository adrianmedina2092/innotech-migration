import {
  faHome,
  faNewspaper,
  faMagnifyingGlass,
  faChartColumn,
  faBarsProgress,
  faUserGroup,
  faUserShield,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

export const menu = [
  {
    id: '1',
    title: 'MIS CONSULTAS',
    icon: faMagnifyingGlass,
    childrens: [
      {
        id: '1_1',
        title: 'Estructura Comercial',
        childrens: [
          {
            id: '1_1_1',
            title: 'Estructura Comercial',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_2',
        title: 'Liquidación',
        childrens: [
          {
            id: '1_2_1',
            title: 'Operaciones de Liquidación',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_2_2',
            title: 'Posición de Títulos',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_2_3',
            title: 'Disciplina de Liquidación',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_2_3',
            title: 'Operaciones de Liquidación Real Time',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_3',
        title: 'Operaciones Financieras',
        childrens: [
          {
            id: '1_3_1',
            title: 'Eventos',
            route: 'page/consultas/operaciones-liquidacioneventos',
            childrens: [],
          },
          {
            id: '1_3_2',
            title: 'Instrucciones Cliente',
            route:
              'page/consultas/operaciones-liquidacioninstrucciones-clientes',
            childrens: [],
          },
          {
            id: '1_3_3',
            title: 'Entitlements',
            route: 'page/consultas/operaciones-liquidacionentitlements',
            childrens: [],
          },
          {
            id: '1_3_4',
            title: 'Posición Elegible',
            route: 'page/consultas/operaciones-liquidacionposicion-elegible',
            childrens: [],
          },
          {
            id: '1_3_5',
            title: 'UBR (Uninstructured Balanced Report)',
            route: 'page/consultas/operaciones-liquidacionubr',
            childrens: [],
          },
        ],
      },
      {
        id: '1_4',
        title: 'Recuperación de Impuestos',
        childrens: [
          {
            id: '1_4_1',
            title: 'Reclamaciones',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_4_2',
            title: 'Comisiones Recuperación de Impuestos',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_4_3',
            title: 'Documentación RAS',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_5',
        title: 'Pagos',
        childrens: [
          {
            id: '1_5_1',
            title: 'Posición de Efectivo',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_5_2',
            title: 'Movimientos de Efectivo',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_5_3',
            title: 'Devolución de Recibos',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_5_4',
            title: 'Facturación',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_6',
        title: 'Compensaciones',
        childrens: [
          {
            id: '1_6_1',
            title: 'Diario de Garantías',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_6_2',
            title: 'Estructura Comercial Compensación',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_7',
        title: 'Cash Projection',
        childrens: [
          {
            id: '1_7_1',
            title: 'Cash Projection',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_8',
        title: 'Información Fiscal',
        childrens: [
          {
            id: '1_8_1',
            title: 'Información Fiscal',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_9',
        title: 'Auditoría',
        childrens: [
          {
            id: '1_9_1',
            title: 'Auditoría',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '1_10',
        title: 'Depositaría',
        childrens: [
          {
            id: '1_10_1',
            title: 'Estructura Comercial',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '1_10_2',
            title: 'Distribución Patrimonial (posición)',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'INFORMES',
    icon: faNewspaper,
    childrens: [
      {
        id: '2_1',
        title: 'Qlik Sense',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '2_2',
        title: 'NPrinting',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '2_3',
        title: 'Kiosko Nprinting',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
    ],
  },
  {
    id: '3',
    title: 'TRANSACCIONALIDAD',
    icon: faChartColumn,
    childrens: [
      {
        id: '3_1',
        title: 'Instrucciones de Liquidación',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '3_2',
        title: 'Instrucciones de Eventos',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '3_3',
        title: 'Instrucciones de Reclamación de Impuestos',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '3_4',
        title: 'Instrucciones de Pagos',
        childrens: [
          {
            id: '3_4_1',
            title: 'Instrucciones de Pagos',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_4_2',
            title: 'Instrucciones de Pagos - Pendientes',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_4_3',
            title: 'Instrucciones de Pagos - Gestión',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '3_5',
        title: 'Instrucciones por Norma',
        childrens: [
          {
            id: '3_5_1',
            title: 'Instrucciones por Norma',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_5_2',
            title: 'Instrucciones por Norma - Pendientes',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_5_3',
            title: 'Instrucciones por Norma - Gestión',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '3_6',
        title: 'Gestión',
        childrens: [
          {
            id: '3_6_1',
            title: 'Grupos Firmantes y Limites',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_6_2',
            title: 'Validadores (4 eyes)',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '3_7',
        title: 'Instrucciones de Serv. Fin. - Forex | Fondos',
        childrens: [
          {
            id: '3_7_1',
            title: 'Instrucciones de Serv. Fin. - Forex',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_7_2',
            title: 'Instrucciones de Serv. Fin. - Fondos',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
          {
            id: '3_7_3',
            title: 'Clientes Documentados',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
      {
        id: '3_8',
        title: 'Instrucciones de Liquidación - Gestión',
        childrens: [
          {
            id: '3_8_1',
            title: 'Parametría',
            route: 'page/consultas/operaciones-liquidacion',
            childrens: [],
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'GESTION',
    icon: faBarsProgress,
    childrens: [
      {
        id: '4_1',
        title: 'Carga de Ficheros',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '4_2',
        title: 'Plataforma de Documentacion',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '4_3',
        title: 'Distrubucion N43',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '4_4',
        title: 'Class Actions',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '4_5',
        title: 'Solicitud de Movimientos',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
      {
        id: '4_6',
        title: 'Gestión de Banners',
        route: 'page/consultas/operaciones-liquidacion',
        childrens: [],
      },
    ],
  },
  {
    id: '5',
    title: 'ONBOARDING',
    icon: faUserGroup,
    childrens: [],
  },
  {
    id: '6',
    title: 'SOPORTE',
    icon: faUserShield,
    childrens: [],
  },
  {
    id: '7',
    title: 'LIBRERIA',
    icon: faBook,
    childrens: [],
  },
];
