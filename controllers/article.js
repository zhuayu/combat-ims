const Article = require('./../models/article.js');
const { formatTime } = require('./../utils/date.js');

const articleController = {
  insert: async function(req,res,next){
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let content = req.body.content;
    let created_time = new Date();

    if(!title || !classify_id || !content){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }

    try{
      const article = await Article.insert({  title, classify_id, content, created_time });
      const id = article[0]
      res.json({ 
        code: 200, 
        data: { id }
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
  list: async function(req,res,next){
    try{
      let params = {};
      let classify_id = req.query.classify_id
      if (classify_id) {
        params.classify_id = classify_id
      }

      const articles = await Article.joinClassify(params);
      const articlesDisplay = articles.map(data => {
        data.created_time_display = formatTime(data.created_time);
        return data
      })
      res.json({
        code:200,
        data: articlesDisplay
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
  show: async function(req,res,next) {
    try{
      const id = req.params.id;
      const articles = await Article.select({ id });
      const article = articles[0];
      res.json({
        code:200,
        data: article
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
  update: async function(req,res,next) {
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let content = req.body.content;
    let id = req.params.id;
    
    if(!title || !classify_id || !content){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }

    try{
      const article = await Article.update( id ,{  title, classify_id, content });
      res.json({ 
        code: 200, 
        data: article
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
}

module.exports = articleController;