const Base = require('./base.js');
const knex = require('./knex.js')
class Article extends Base {
  constructor(props = 'article') {
    super(props);
  }

  joinClassify(params={}){
    return knex('article')
      .leftJoin('classify', 'article.classify_id', '=', 'classify.id')
      .select('article.title',{classify_name: 'classify.name'},'article.created_time','article.id')
      .where(params)
  }
}

module.exports = new Article()