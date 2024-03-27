export interface MenuItem {
  id: string;
  title: string;
  icon?: any;
  route?: string;
  childrens?: MenuItem[];
  showChildren?: boolean;
}

export interface BredcrumbModel {
  name: string;
  route?: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Filters {
  filtros: Array<string>;
  firstRow: number;
  informe: string;
  language: string;
  lastRow: number;
}
