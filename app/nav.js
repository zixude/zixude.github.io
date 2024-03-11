

/////////////////////////////////////////////////////////////////////////////////

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "catalogs-container";

// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "Catalogs";

// 创建链接数组
var links = [
  { text: "散 集", url: "../essay/essay.html" },
  { text: "断 想", url: "../insight/insight.html" },
  { text: "微 博", url: "../weibo/weibo2024.html" },
  { text: "文 字", url: "../writing/writing.html" },
  { text: "设 计", url: "https://design-9la.pages.dev" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
});

// 将标题和链接内容添加到容器元素中
container.innerHTML = `<h4>${h4Title.textContent}</h4>${linksHTML}`;

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);

/////////////////////////////////////////////////////////////////////////////////