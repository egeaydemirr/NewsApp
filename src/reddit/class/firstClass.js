import SecondClass from './secondClass';

export default class FirstClass {
  constructor(data) {
    // console.log(JSON.stringify(data, null, 2));
    const _this = this;
    _this.__privates = {
      after: '',
      before: '',
      children: [],
    };

    if (data) {
      this.setAfter(data.after);
      this.setBefore(data.before);
      this.setChildren(data.children);
      // console.log(data.children);
    }

    //TODO: children gelmiyorsa hata ver ve çık
    // if (data?.children) {
    //   this.setChildren(data.children);
    //   console.log(data.children.length);
    // }
  }
  getAfter() {
    return this.__privates.after;
  }
  setAfter(data) {
    this.__privates.after = data;
  }
  getBefore() {
    return this.__privates.before;
  }
  setBefore(data) {
    this.__privates.before = data;
  }
  getChildren() {
    return this.__privates.children;
  }
  setChildren(data) {
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      const newData = new SecondClass(data[i].data);
      // console.log(JSON.stringify(newData, null, 2));
      this.addChildren(newData);
    }
  }

  addChildren(data) {
    this.__privates.children.push(data);
  }
}
