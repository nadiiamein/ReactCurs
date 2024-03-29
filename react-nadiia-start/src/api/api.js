import { instance } from "./instance";

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  onUnfollow(userId = 1) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  onFollow(userId = 1) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};

export const profilesApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then((response) => response.data);
  },
};

export const authApi = {
  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  loginMe(email, password, rememberMe = false, captcha = "") {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const securityApi = {
  captcha() {
    return instance
      .get(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};
