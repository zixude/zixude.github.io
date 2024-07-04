// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "catalogs-container";
container.style.display = "flex";  // 使用 Flex 布局
container.style.flexDirection = "column";  // 列方向布局

// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "Catalogs";
h4Title.style.width = "100%";  // 标题宽度占满整行

// 将标题元素添加到容器中
container.appendChild(h4Title);

// 创建链接容器
var linksContainer = document.createElement("div");
linksContainer.style.display = "flex";  // 使用 Flex 布局
linksContainer.style.justifyContent = "space-between";  // 链接文本均匀分布且左右两端对齐

// 创建链接数组
var links = [
  { text: "散 集", url: "../essay/index.html" },
  //  { text: "微 博", url: "../weibo/weibo2024.html" },   目前隐藏
  { text: "文 字", url: "../writing/writing.html" },
  { text: "专 项", url: "../works/index.html" },
  { text: "设 计", url: "https://design-9la.pages.dev" },
];

// 生成链接元素并直接添加到链接容器中
links.forEach(function(link) {
  var linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.textContent = link.text;

  linksContainer.appendChild(linkElement);
});

// 将链接容器添加到主容器中
container.appendChild(linksContainer);

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);