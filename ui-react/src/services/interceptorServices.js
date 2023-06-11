import appAxios from './baseApi';
import { NotificationManager } from 'react-notifications';
export const interceptorServices = {
  setupInterceptor: () => {
    appAxios.interceptors.request.use(
      (conf) => {
        if (conf.url.includes('/product')) {
          conf.baseURL = 'http://127.0.0.1:8001';
        }
        if (conf.url.includes('/order')) {
          conf.baseURL = 'http://127.0.0.1:8002';
        }
        if (conf.url.includes('/payment')) {
          conf.baseURL = 'http://127.0.0.1:8003';
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
            NotificationManager.error(
              err.response.data.data.status.description
            );
          } else {
            NotificationManager.error(err.message);
          }
        });
      }
    );
  },
};
