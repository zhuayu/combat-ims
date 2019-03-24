const PREFIX  = '/api';
export default {
  login: PREFIX + '/login',
  user: PREFIX + '/user',
  userItem : (id) => `${PREFIX}/user/${id}`,
  classify: PREFIX + '/classify',
  classifyItem : (id) => `${PREFIX}/classify/${id}`,
  article: PREFIX + '/article',
  articleItem : (id) => `${PREFIX}/article/${id}`,
}