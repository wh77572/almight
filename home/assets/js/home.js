var mySwiper = new Swiper('.banner-swiper-wrapper', {
  autoplay: {
    delay:5000
  },
  loop: true,
  speed:3000,
  navigation: {
    nextEl: '.banner-next',
    prevEl: '.banner-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'banner-bullet',
    bulletActiveClass: 'banner-bullet-color',
  },
});

var mySwiper2 = new Swiper('.news-swiper-wrapper', {
  loop: true,
  navigation: {
    nextEl: '.news-next',
    prevEl: '.news-prev',
  },
});

console.log(window.devicePixelRatio);

// $(".news-header-right-single").mouseover(function () {
//   $(this).addClass("news-header-active-color").siblings('.news-header-right-single').removeClass("news-header-active-color");
// });

//鼠标滑过pagination控制swiper切换
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
  mySwiper.pagination.bullets[i].onmouseover = function () {
    this.click();
    mySwiper.autoplay.start();
  };
}

//鼠标移出隐藏按钮，移入显示按钮
mySwiper.el.onmouseover = function () {
  mySwiper.navigation.$nextEl.removeClass('hide');
  mySwiper.navigation.$prevEl.removeClass('hide');
  mySwiper.autoplay.start();
};
mySwiper.el.onmouseout = function () {
  mySwiper.navigation.$nextEl.addClass('hide');
  mySwiper.navigation.$prevEl.addClass('hide');
  mySwiper.autoplay.start();
};

setTimeout(function () {
  refresh();
}, 10);

window.onresize = function () {  //监听屏幕的改变
  setTimeout(function () {
    refresh();
  }, 10)
};

function refresh() {
  var deviceWidth = window.screen.width;
  console.log(deviceWidth);

  if (deviceWidth > 860) {
    document.getElementById("view").setAttribute('content', 'user-scalable=yes, width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=3');
  } else {
    document.getElementById("view").setAttribute('content', 'user-scalable=yes, width=device-width, minimum-scale=0.41, initial-scale=0.41, maximum-scale=3');
  }
}
