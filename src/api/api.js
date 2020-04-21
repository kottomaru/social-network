import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "221c1805-6931-4c1e-840a-129a3f65d9c0"
  }
});

export const membersAPI = {
  getMembers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
  },
  follow(memberId) {
    return instance
      .post(`follow/${memberId}`, {})
        .then(response => response.data);
  },
  unfollow(memberId) {
    return instance
      .delete(`follow/${memberId}`, {})
        .then(response => response.data);
  }
}

export const authAPI = {
  auth() {
    return instance
      .get(`auth/me`)
        .then(response => response.data);
  }
}
