import * as wxSearch from '../../component/wxSearch/wxSearch';
import { getStorage, setStorage } from '../../utils/util';
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData: {
      searchList: getStorage('searchList'),
      hotsSearch: ['ls', 'cd', 'rm', 'mv', 'cp', 'cat', 'pwd', 'mkdir', 'rmdir'], activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      searchResultIsHidden: true,
      searchIsHidden: true,
      searchAllShow: false,
      loadingIsHidden: true,
      inputVal: '',
      mdText: '',
      windowHeight: 0,
      scrollHeight: 400
    }
  },
  onLoad: function (options) {
    //初始渲染-读取storage的历史记录
    wxSearch.init(this)
  },
  bindSearchAllShow: function (e) {
    wxSearch.bindSearchAllShow(e, this)
  },
  bindInputSchool: function (e) {
    wxSearch.bindInputSchool(e, this)
  },
  bindGoSearch: function (e) {
    let val = this.data.tabData.inputVal;
    wxSearch.bindGoSearch(val, this)
  },
  bindGoHotSearch: function (e) {
    console.log('e: ', e);
    let val = e.currentTarget.dataset.item;
    wxSearch.bindGoSearch(val, this)
  },
  bindClearSearch: function () {
    wxSearch.updataLog(this,[])
  },
  bindGoHistorySearch(e) {
    let val = e.currentTarget.dataset.item;
    wxSearch.bindGoSearch(val, this)
  },
  bindDelLog(e) {
    wxSearch.bindDelLog(e, this)
  },
  bindShowLog(e) {
    wxSearch.bindShowLog(e, this)
  },
  bindHideLog(e) {
    wxSearch.bindHideLog(e, this)
  },
  bindSearchHidden() {
    wxSearch.bindSearchHidden(this)
  }
})