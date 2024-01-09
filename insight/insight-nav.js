/////////////////////////////////////////////////////////////////////////////////

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "insight-catalogs";

// 创建链接数组
var links = [
  { text: "一辑", url: "../insight/一辑.html" },
  { text: "二辑", url: "../insight/二辑.html" },
  { text: "三辑", url: "../insight/三辑.html" },
  { text: "四辑", url: "../insight/四辑.html" },
  { text: "五辑", url: "../insight/五辑.html" },
  { text: "六辑", url: "../insight/六辑.html" },
  { text: "七辑", url: "../insight/七辑.html" },
  { text: "八辑", url: "../insight/八辑.html" },
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

