import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: (): { userInfo: { id: string } | null } => {
    return {
      userInfo: null
    };
  },
  actions: {
    setUserInfo(userInfo: { id: string } | null) {
      this.userInfo = userInfo;
    }
  }
});

export default useStore;
