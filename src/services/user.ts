import request from "@/utils/request";
import API from "@/consts/api";

const userService = {
  getUserInfo(): Promise<unknown> {
    return request.get(API.userInfo);
  }
};

export default userService;
