import { STATE } from "./type";

const getters = {
  getCrumbList: (state: STATE): any => state.crumbList,
  GET_CURRENTMENU: (state: STATE): any => state.currentMenu,
};
export default getters;
