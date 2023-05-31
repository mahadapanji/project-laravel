import appAxios from "./baseApi";

export default {
  setupInterceptor: () => {
    appAxios.interceptors.request.use(
      (conf) => {
        if (conf.url.includes("api/product/all")) {
          console.log("INTERCEPT");
        }
        return conf;
      },
      (error) => {
        // REQUEST ERROR
        return Promise.reject(error);
      }
    );
    appAxios.interceptors.response.use(
      (res) => {
        // RESPONSE SUCCESS
        return Promise.resolve(res);
      },
      (err) => {
        return new Promise(() => {
          // RESPONSE ERROR
          if (err?.response) {
            console.log(err);
            return Promise.reject(err);
          } else {
            console.log(err);
            return Promise.reject(err);
          }
        });
      }
    );
  },
};
