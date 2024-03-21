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
  passsword: string;
}
