
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
  { text: "纳瓦尔思想", url: "纳瓦尔思想.html" },
  { text: "认知构建", url: "认知构建.html" },
  { text: "信息管理", url: "信息管理.html" },
  { text: "文学写作要则", url: "文学写作要则.html" },
  { text: "英语的思维", url: "乞讨.html" },
  { text: "互动叙事研究", url: "乞讨.html" },
  { text: "写作技巧", url: "乞讨.html" },
  { text: "电影表达方式研究", url: "乞讨.html" },
  { text: "信息管理", url: "乞讨.html" },
  { text: "自动化系统", url: "乞讨.html" },
  { text: "自我", url: "乞讨.html" },
  { text: "科技对现代政治的围猎", url: "乞讨.html" },
  { text: "保卫人性", url: "乞讨.html" },
  { text: "雪中故事", url: "乞讨.html" },
  { text: "生活的乞讨", url: "乞讨.html" },
  { text: "论光速不变性", url: "乞讨.html" },
  { text: "AI使幻想暗淡无光", url: "乞讨.html" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a><br>`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;

/////////////////////////////////////////////////////////////////////////////////
