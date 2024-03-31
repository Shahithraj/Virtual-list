function throttle(fn, wait) {
  let lastTime = 0;
  let timer;
  return function (...args) {
    function run() {
      const now = new Date().valueOf();
      if (now - lastTime > wait) {
        fn.apply(this, args);
        lastTime = now;
      }
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(run, wait);
    run();
  };
}

function fetchData(pageSize) {
  for (let i = 0; i < pageSize; i++) {
    const dataItem = dummyText.substring(
      0,
      Math.round(20 + Math.random() * dummyText.length) * 0.3
    );
    const length = data.push(dataItem);
    renderItem(dataItem, length - 1);
  }
}

const virtualScroller = new VirtualScroller({
  element: '#virtual-scroller',
  height: '400px',
  rowHeight: 50, // px
  pageSize: 40,
  //   buffer: 10,
  renderItem: function (dataItem) {
    const div = document.createElement('div');
    div.classList.add('row-content');
    div.textContent = dataItem;
    return div;
  },
  loadMore: function (pageSize) {
    const data = [];
    for (let i = 0; i < pageSize; i++) {
      const dataItem = `I'm number ${this.data.length + i}`;
      data.push(dataItem);
    }
    return data;
  },
});
