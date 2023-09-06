import httpRequest from "@/request/index";

// 定义接口的传参
interface UserInfoParam {
  userID: string;
  userName: string;
}

const path = "/api/table/tableList";

// 获取用户信息
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function apiGetuserinfo(param: UserInfoParam) {
  return httpRequest.get(path, param);
}
