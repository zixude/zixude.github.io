
/////////////////////////////////////////////////////////////////////////////////

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
  { text: "自我的和解" },
  { text: "中英思维浅析" },
  { text: "博客哲学" },
  { text: "从信息传递窥个体时代" },
  { text: "互动叙事的曙光" },
  { text: "代理平衡" },
  { text: "何以解忧" },
  { text: "AI杂谈" },
  { text: "天童是风" },
  { text: "孤山" },
  { text: "我在兰亭" },
  { text: "故宫有垫脚石" },
  { text: "平台资本主义下的个体" },
  { text: "企慕情境" },
  { text: "所见木心" },
  { text: "黄金时代" },
  { text: "思想的陷阱" },
  { text: "通感移植" },
  { text: "认知原则" },
  { text: "信息管理" },
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
