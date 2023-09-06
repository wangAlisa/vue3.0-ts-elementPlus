import { STATE } from "./type";

const mutations = {
  /* 面包屑导航列表 */
  setCrumbList(state: STATE, list: Array<any>): void {
    state.crumbList = list;
  },
  //当前选中的导航
  SET_CURRENT_MENU(state: STATE, currentMenu: string): void {
    state.currentMenu = currentMenu;
  },
};
export default mutations;
