/////////////////////////////////////////////////////////////////////////////////

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "insight-catalogs";

// 创建链接数组
var links = [
  { text: "#记忆碎片", url: "../insight/记忆碎片.html" },
  { text: "#乐之本事", url: "../insight/乐之本事.html" },
  { text: "#梦之演绎", url: "../insight/梦之演绎.html" },
  { text: "#时间之伤", url: "../insight/时间之伤.html" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a><br>`;
});

// 将标题和链接内容添加到容器元素中
container.innerHTML = `${linksHTML}`;

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);

/////////////////////////////////////////////////////////////////////////////////

