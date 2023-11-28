import axios from 'axios';
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api";
export const baseURL = adminUrl
let axiosInstance = axios.create({baseURL});

export const profile_pic = (media) => {
  return `https://wtsacademy.dedicateddevelopers.us`+`/uploads/user/profile_pic/${media}`;
}

export const image = (media) => {
  return `https://wtsacademy.dedicateddevelopers.us`+`/uploads/product/${media}`;
}



axiosInstance.interceptors.request.use(
    async function (config) {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  export const fetchBaseQueryInstance = () => {
    return {
      baseUrl: baseURL,
      prepareHeaders: (headers) => {
        headers.set(
          "x-access-token",
          localStorage.getItem("token") || sessionStorage.getItem("token")
        );
  
        return headers;
      },
    };
  };

export default axiosInstance; 