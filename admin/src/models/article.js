import request from './request.js';
import API from './api.js';

export default {
  list () {
    return request.get(API.article)
  },
  update (id,params) {
    return request.put(API.articleItem(id),params)
  },
  add (params) {
    return request.post(API.article,params)
  },
  delete (id) {
    return request.delete(API.articleItem(id))
  },
  item(id) {
    return request.get(API.articleItem(id))
  }
}