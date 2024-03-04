export interface MenuItem {
  id: string;
  title: string;
  icon?: any;
  route?: string;
  childrens?: MenuItem[];
  showChildren?: boolean;
}
