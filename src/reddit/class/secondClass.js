export default class SecondClass {
  constructor(data) {
    // console.log(JSON.stringify(data, null, 2));
    const _this = this;
    _this.__privates = {
      title: '',
      thumbnail: [],
      url: '',
      author: '',
      over_18: '',
    };
    _this.setTitle(data.title);
    _this.setThumbnail(data.thumbnail);
    _this.setUrl(data.url_overridden_by_dest);
    _this.setAuthor(data.author);
    _this.setOver_18(data.over_18);
  }

  getTitle() {
    return this.__privates.title;
  }
  setTitle(data) {
    this.__privates.title = data;
  }
  getThumbnail() {
    return this.__privates.thumbnail;
  }
  setThumbnail(data) {
    // console.log(data);
    this.__privates.thumbnail = data;
  }
  getUrl() {
    return this.__privates.url;
  }
  setUrl(data) {
    this.__privates.url = data;
  }
  getAuthor() {
    return this.__privates.author;
  }
  setAuthor(data) {
    this.__privates.author = data;
  }
  getOver_18() {
    return this.__privates.over_18;
  }
  setOver_18(data) {
    this.__privates.over_18 = data;
  }
}
