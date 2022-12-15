import { defineStore } from 'pinia';
import { MenuOption } from 'naive-ui';

export interface IPermissionState {
  menus: IMenus;
  tabs: ITabs;
}
export interface ITab {
  path: string;
  name: string;
  meta: {
    title: string;
    path: string;
    name: string;
    [key: string]: any;
  };
  [key: string]: any;
}
export type ITabs = ITab[];
type IMenu = MenuOption & { path: string };
type IMenus = IMenu[];
export type Action = 'push' | 'remove' | 'clear';
export interface IUpdateTabsPayLoad {
  tab: ITab;
  action: Action;
}
export interface IPermissionStore {
  namespaced: boolean;
  state: () => IPermissionState;
  mutations: {};
}

const usePermissionStore = defineStore({
  id: 'permission',
  state: (): IPermissionState => ({
    menus: [],
    tabs: [],
  }),
  actions: {
    setMenus(menus: IMenus) {
      // @ts-ignore
      this.menus = menus;
    },

    updateTabs(payload: IUpdateTabsPayLoad) {
      const { tab, action } = payload;
      const exist = tab && this.tabs.findIndex((v: ITab) => v.path === tab.path) > -1;
      if (tab && action === 'push') {
        if (!exist) {
          this.tabs.push(tab);
        }
      }

      if (tab && action === 'remove' && exist) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
      }

      if (action === 'clear') {
        this.tabs = [];
      }
    },
  },
});

export default usePermissionStore;
