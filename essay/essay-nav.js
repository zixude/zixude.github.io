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
  { text: "九月", url: "九月.html" },
  { text: "乞讨", url: "乞讨.html" },
  { text: "人淡如菊", url: "人淡如菊.html" },
  { text: "何以解忧", url: "何以解忧.html" },
  { text: "分身", url: "分身.html" },
  { text: "印象", url: "印象.html" },
  { text: "即兴判断", url: "即兴判断.html" },
  { text: "厌食症", url: "厌食症.html" },
  { text: "原则与飞", url: "原则与飞.html" },
  { text: "困意", url: "困意.html" },
  { text: "天童是风", url: "天童是风.html" },
  { text: "孤山", url: "孤山.html" },
  { text: "履迹", url: "履迹.html" },
  { text: "平庸", url: "平庸.html" },
  { text: "意思", url: "意思.html" },
  { text: "我在兰亭", url: "我在兰亭.html" },
  { text: "故宫有垫脚石", url: "故宫有垫脚石.html" },
  { text: "朝暮", url: "朝暮.html" },
  { text: "杭州城", url: "杭州城.html" },
  { text: "桃花", url: "桃花.html" },
  { text: "梦境", url: "梦境.html" },
  { text: "毒药", url: "毒药.html" },
  { text: "潘达斯奈基", url: "潘达斯奈基.html" },
  { text: "烟火", url: "烟火.html" },
  { text: "物是", url: "物是.html" },
  { text: "真实", url: "真实.html" },
  { text: "神性", url: "神性.html" },
  { text: "科幻复兴", url: "科幻复兴.html" },
  { text: "米修与木心", url: "米修与木心.html" },
  { text: "罗生门评", url: "罗生门评.html" },
  { text: "能与愿", url: "能与愿.html" },
  { text: "藏着", url: "藏着.html" },
  { text: "虚荣", url: "虚荣.html" },
  { text: "补丁", url: "补丁.html" },
  { text: "观念世界", url: "观念世界.html" },
  { text: "轮盘", url: "轮盘.html" },
  { text: "轻轻判断", url: "轻轻判断.html" },
  { text: "雨霖铃·月令飞红", url: "雨霖铃·月令飞红.html" },
  { text: "霓虹灯", url: "霓虹灯.html" },
  { text: "预感", url: "预感.html" },
  { text: "风景", url: "风景.html" },
  { text: "十一月", url: "十一月.html" },
  { text: "我还在这儿", url: "我还在这儿.html" },
  { text: "黑暗", url: "黑暗.html" },
  { text: "企慕情境", url: "企慕情境.html" },
  { text: "妖猫传评", url: "妖猫传评.html" },
  { text: "所见木心", url: "所见木心.html" },
  { text: "黄金时代", url: "黄金时代.html" },
  { text: "梦中木心", url: "梦中木心.html" },
  { text: "思想的陷阱", url: "思想的陷阱.html" },
  { text: "通感移植", url: "通感移植.html" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a><br>`;
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
  { text: "豆瓣", url: "https://m.douban.com/people/208635743/" },
  { text: "About me", url: "about-me.html" },
  { text: "About this site", url: "about-this-site.html" },
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
script.src = '../nav.js';

// 将script元素添加到文档的头部或者身体部分
document.head.appendChild(script);