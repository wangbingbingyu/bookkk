// components/exploredetail/exploredetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    users: {
      type: Array
    },
    books: {
      type: Array
    },
    show: {
      type: Boolean
    }
  },
  create() {
    this.setData({
      index:0
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    index: 0,
    arr: [0, 1, 2, 3]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    book(e) {
      let book = e.currentTarget.dataset.ind
      this.setData({
        index:book,
        show: !this.data.show
      })
      this.triggerEvent('myevent', {sonParam:this.data.show})
    }
  }
})