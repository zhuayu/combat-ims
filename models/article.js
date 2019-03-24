const Base = require('./base.js');
const knex = require('./knex.js')
class Article extends Base {
  constructor(props = 'article') {
    super(props);
  }

  joinClassify(params={}){
    return knex('article')
      .join('classify', 'article.classify_id', '=', 'classify.id')
      .select()
      .where(params)
  }
}

module.exports = new Article()