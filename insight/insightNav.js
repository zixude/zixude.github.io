/////////////////////////////////////////////////////////////////////////////////

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "insight-catalogs";


// 创建链接数组
var links = [
  { text: "一则", url: "../insight/一则.html" },
  { text: "二则", url: "../insight/二则.html" },
  { text: "三则", url: "../insight/三则.html" },
  { text: "四则", url: "../insight/四则.html" },
  { text: "五则", url: "../insight/五则.html" },
  { text: "六则", url: "../insight/六则.html" },
  { text: "七则", url: "../insight/七则.html" },
  { text: "八则", url: "../insight/八则.html" },
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

