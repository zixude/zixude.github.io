// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "Posts";
console.log(h4Title);

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "posts-container";

// 将标题元素添加到文档中的适当位置
document.body.appendChild(h4Title);

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);

// 创建链接数组
var links = [

  // 诗
  { text: "九月" },
  { text: "风景" },
  { text: "桃花" },
  { text: "补丁" },
  { text: "黑暗" },
  { text: "梦境" },
  { text: "人淡如菊" },
  { text: "藏着" },
  { text: "神性" },
  { text: "朝暮" },
  { text: "履迹" },
  { text: "即兴判断" },
  { text: "厌食症" },
  { text: "原则与飞" },
  { text: "轻轻判断" },
  { text: "雨霖铃·月令飞红" },
  { text: "困意" },
  { text: "十一月" },
  { text: "我还在这儿" },
  { text: "毒药" },

  // 集
  { text: "" },
  { text: "分身" },
  { text: "印象" },
  { text: "虚荣" },
  { text: "焰火" },
  { text: "乞讨" },
  { text: "观念世界" },
  { text: "轮盘" },
  { text: "平庸" },
  { text: "意思" },
  { text: "杭州城" },
  { text: "霓虹灯" },
  { text: "预感" },
  { text: "潘达斯奈基" },
  { text: "烟火" },
  { text: "物是" },
  { text: "真实" },
  { text: "科幻复兴" },
  { text: "米修与木心" },
  { text: "罗生门评" },
  { text: "能与愿" },
  { text: "妖猫传评" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  var url = link.text.replace(/ /g, "-").toLowerCase() + ".html";
  linksHTML += `<a href="${url}">${link.text}</a><br>`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;

////////////////////////////////////////////////////////////////////////////////

// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "About";
console.log(h4Title);

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "about-container";

// 将标题元素添加到文档中的适当位置
document.body.appendChild(h4Title);

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);

// 创建链接数组
var links = [
  { text: "微博", url: "https://weibo.com/u/6525198720" },
  { text: "About me", url: "aboutMe.html" },
  { text: "About this site", url: "aboutThisSite.html" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a><br>`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;

/////////////////////////////////////////////////////////////////////////////////



// 创建一个新的script元素
var script = document.createElement('script');

// 设置脚本文件的src属性
script.src = '../app/nav.js';

// 将script元素添加到文档的头部或者身体部分
document.head.appendChild(script);