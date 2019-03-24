import request from './request.js';
import API from './api.js';

export default {
  login (params) {
    return request.post(API.login, params)
  },
  logout () {
    localStorage.clear()
  },
  list () {
    return request.get(API.user)
  },
  update (id,params) {
    return request.put(API.userItem(id),params)
  },
  add (params) {
    return request.post(API.user,params)
  },
  delete (id) {
    return request.delete(API.userItem(id))
  }
}