
/////////////////////////////////////////////////////////////////////////////////

// 创建标题元素
var h4Title = document.createElement("h1");
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
  { text: "博客哲学" },
  { text: "自我的和解" },
  { text: "中英思维浅析" },
  { text: "英语语境" },
  { text: "原则" },
  { text: "从信息传递窥个体时代" },
  { text: "互动叙事的曙光" },
  { text: "代理平衡" },
  { text: "人工智能杂谈" },
  { text: "信息管理" },
  { text: "禅修要点" },
  { text: "思想的陷阱" },
  { text: "平台资本主义下的个体" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  var url = link.text.replace(/ /g, "-").toLowerCase() + ".html";
  linksHTML += `<a href="${url}">${link.text}</a><br>`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;



/////////////////////////////////////////////////////////////////////////////////