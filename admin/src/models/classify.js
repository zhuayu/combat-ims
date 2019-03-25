import request from './request.js';
import API from './api.js';

export default {
  list () {
    return request.get(API.classify)
  },
  update (id,params) {
    return request.put(API.classifyItem(id),params)
  },
  add (params) {
    return request.post(API.classify,params)
  },
  delete (id) {
    return request.delete(API.classifyItem(id))
  }
}