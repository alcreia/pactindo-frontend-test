import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiToken: localStorage.getItem("apiToken") || "",
  },
  getters: {
    isLogin: (state) => state.isLoggedIn,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login() {
      localStorage.setItem("apiToken", "34f9410a18cf435ca082d7d567154141");
    },
    logout() {
      localStorage.removeItem("apiToken");
    },
  },
  modules: {},
});
