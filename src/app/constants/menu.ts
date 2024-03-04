import {
  faHome,
  faNewspaper,
  faMagnifyingGlass,
  faChartColumn,
  faBarsProgress,
  faUserGroup,
  faUserShield,
  faBook
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
            route: 'page/consultas/estructura-comercial',
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
          },
          {
            id: '1_2_2',
            title: 'Posición de Títulos',
            route: 'page/consultas/posicion-titulos',
          },
          {
            id: '1_2_3',
            title: 'Disciplina de Liquidación',
            route: 'page/consultas/disciplina-liquidacion',
          },
          {
            id: '1_2_3',
            title: 'Operaciones de Liquidación Real Time',
            route: 'page/consultas/operaciones-liquidacion-real-time',
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
            route: 'page/consultas/eventos',
          },
          {
            id: '1_3_2',
            title: 'Instrucciones Cliente',
            route: 'page/consultas/instrucciones-clientes',
          },
          {
            id: '1_3_3',
            title: 'Entitlements',
            route: 'page/consultas/entitlements',
          },
          {
            id: '1_3_4',
            title: 'Posición Elegible',
            route: 'page/consultas/posicion-elegible',
          },
          {
            id: '1_3_5',
            title: 'UBR (Uninstructured Balanced Report)',
            route: 'page/consultas/ubr',
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
            route: 'page/consultas/reclamaciones',
          },
          {
            id: '1_4_2',
            title: 'Comisiones Recuperación de Impuestos',
            route: 'page/consultas/comisiones-recuperacion-impuestos',
          },
          {
            id: '1_4_3',
            title: 'Documentación RAS',
            route: 'page/consultas/documentacion-ras',
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
            route: 'page/consultas/posicion-efectivo',
          },
          {
            id: '1_5_2',
            title: 'Movimientos de Efectivo',
            route: 'page/consultas/movimientos-efectivo',
          },
          {
            id: '1_5_3',
            title: 'Devolución de Recibos',
            route: 'page/consultas/devolucion-recibos',
          },
          {
            id: '1_5_4',
            title: 'Facturación',
            route: 'page/consultas/facturacion',
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
            route: 'page/consultas/diario-garantias',
          },
          {
            id: '1_6_2',
            title: 'Estructura Comercial Compensación',
            route: 'page/consultas/estructura-comercial-compensacion',
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
            route: 'page/consultas/cash-projection',
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
            route: 'page/consultas/informacion-fiscal',
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
            route: 'page/consultas/auditoria',
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
            route: 'page/consultas/estructura-comercial-depositaria',
          },
          {
            id: '1_10_2',
            title: 'Distribución Patrimonial (posición)',
            route: 'page/consultas/distribucion-patrimonial',
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "INFORMES",
    icon: faNewspaper,
    childrens: [
      {
        id: '2_1',
        title: 'Qlik Sense',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '2_2',
        title: 'NPrinting',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '2_3',
        title: 'Kiosko Nprinting',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
    ]
  },
  {
    id: "3",
    title: "TRANSACCIONALIDAD",
    icon: faChartColumn,
    childrens: []
  },
  {
    id: "4",
    title: "GESTION",
    icon: faBarsProgress,
    childrens: [
      {
        id: '4_1',
        title: 'Carga de Ficheros',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '4_2',
        title: 'Plataforma de Documentacion',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '4_3',
        title: 'Distrubucion N43',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '4_4',
        title: 'Class Actions',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '4_5',
        title: 'Solicitud de Movimientos',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
      {
        id: '4_6',
        title: 'Gestión de Banners',
        route: 'page/consultas/estructura-comercial',
        childrens: []
      },
    ]
  },
  {
    id: "5",
    title: "ONBOARDING",
    icon: faUserGroup,
    childrens: []
  },
  {
    id: "6",
    title: "SOPORTE",
    icon: faUserShield,
    childrens: []
  },
  {
    id: "7",
    title: "LIBRERIA",
    icon: faBook,
    childrens: []
  }
];
