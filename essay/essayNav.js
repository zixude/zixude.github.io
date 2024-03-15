

//一辑：散集页/////////////////////////////////////////////////////////////////////////////////////////////

// 创建标题元素
var h4Title = document.createElement("h1");
h4Title.textContent = "一\u00A0\u00A0\u00A0\u00A0辑";
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

//二辑：诗事页/////////////////////////////////////////////////////////////////////////////////////////////

// 创建标题元素
var h4Title = document.createElement("h1");
h4Title.textContent = "二\u00A0\u00A0\u00A0\u00A0辑";
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
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  var url = link.text.replace(/ /g, "-").toLowerCase() + ".html";
  linksHTML += `<a href="${url}">${link.text}</a><br>`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;


//三辑：断想页/////////////////////////////////////////////////////////////////////////////////////////////

// 创建标题元素
var h4Title = document.createElement("h1");
h4Title.textContent = "三\u00A0\u00A0\u00A0\u00A0辑";
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
  { text: "〇一" },
  { text: "〇二" },
  { text: "〇三" },
  { text: "〇四" },
  { text: "〇五" },
  { text: "〇六" },
  { text: "〇七" },
  { text: "〇八" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  var url = link.text.replace(/ /g, "-").toLowerCase() + ".html";
  linksHTML += `<a href="${url}">${link.text}</a><br>`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;