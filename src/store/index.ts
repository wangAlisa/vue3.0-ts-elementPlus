import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default createStore({
  state: {
    /* 面包屑导航列表 */
    crumbList: [],
    currentMenu: "",
  },
  mutations,
  actions,
  getters,
  // modules,
});
