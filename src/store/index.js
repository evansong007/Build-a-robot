import { createStore } from "vuex";
import robotsModule from "./moodules/robots";
import usersModule  from "./moodules/users";

export default createStore({
  modules:{
    robots:robotsModule,
    users:usersModule,
  }
});
