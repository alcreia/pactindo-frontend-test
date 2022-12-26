import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
    apiToken: "",
  },
  mutations: {
    setLogIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setApiToken(state) {
      if (!state.apiToken) {
        state.apiToken = "34f9410a18cf435ca082d7d567154141";
      } else {
        state.apiToken = "";
      }
    },
  },
});
