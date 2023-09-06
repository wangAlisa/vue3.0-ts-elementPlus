import axios from "axios";
// 创建一个axios实例
const service = axios.create({
  baseURL: "/api", // 所有的请求地址前缀
  timeout: 60000, // 请求的超时时间
  withCredentials: true, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
    "Content-Type": "application/json",
    token: "is tocken",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 添加请求拦截
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    // console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    console.log(response);
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    // 这个状态码是和后端约定的
    // const code = dataAxios.reset;
    return dataAxios;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.log(error);
    return Promise.reject(error);
  }
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function get(api: string, data: any, options?: any): any {
  const formdata: any = {
    url: "",
    method: "get",
    params: {},
  };
  if (data && typeof data === "object") {
    formdata.params = data;
  }
  return returnResponse(formdata, options);
}

/**
 * POST
 *
 * @param {string} api, 请求路径,
 * @param {Object} data, 请求数据
 * @return {Deferred}, dfd
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function post(api: string, data = {}, options?: any) {
  const formData: any = {
    url: "",
    method: "POST",
    withCredentials: true, // 设置跨域请求为true，如果是cros同源请求的话，则可以不用加此项
    data,
  };
  return returnResponse(formData, options);
}

function returnResponse(formData: any, options: any) {
  options = Object.assign({}, { allback: 0, needLoading: false }, options);
  return new Promise((resolve, reject) => {
    service(formData)
      .then(function (response: any) {
        // 后端返回的数据挂载在res.data内
        // 如果allback=1则不做验证 直接返回数据
        if (options.allback) {
          resolve(response.data);
        } else {
          // todo
          switch (response.errNo) {
            case 0:
              resolve(response.data);
              break;
            case 70001:
              console.error("用户未登录, 请先登录~");
              break;
          }
        }
      })
      .catch(function (error) {
        reject("接口请求失败，请查证" + error);
      });
  });
}

export default {
  get,
  post,
  service,
};
