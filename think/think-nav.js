
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
  { text: "文学写作要则" },
  { text: "博客哲学" },
  { text: "极简主义" },
  { text: "认知构建" },
  { text: "信息的启发与关联" },
  { text: "信息管理" },
  { text: "Navalism" },
  { text: "减肥要点" },
  // 其他链接...
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
