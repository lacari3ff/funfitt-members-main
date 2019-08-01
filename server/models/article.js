module.exports = class Article {
  constructor(articleObject) {
    // The article information
    this.title = articleObject.title;
    this.category = articleObject.category;
    this.authorId = articleObject.authorId;
    this.context = articleObject.context;
    // The database information
    this.cdate = articleObject.cdate;
    this.status = articleObject.status;
  }
};
