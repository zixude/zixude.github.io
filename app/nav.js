

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "catalogs-container";
container.style.display = "grid";  // 设置为 Grid 布局
container.style.gridTemplateRows = "auto 1fr";  // 定义两行，第一行自动高度，第二行填充剩余空间
container.style.gridTemplateColumns = "repeat(auto-fit, 1fr)";  // 根据内容项数自动填充所在行的空间，每列均分


// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "Catalogs";
h4Title.style.gridColumn = "1 / -1";  // 标题跨越所有列

// 将标题元素添加到容器中
container.appendChild(h4Title);

// 创建链接数组
var links = [
  { text: "散 集", url: "../essay/index.html" },
  { text: "微 博", url: "../weibo/weibo2024.html" },
  { text: "文 字", url: "../writing/writing.html" },
  { text: "设 计", url: "https://design-9la.pages.dev" },
];

// 生成链接元素并直接添加到容器中
links.forEach(function(link) {
  var linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.textContent = link.text;

  linkElement.style.gridRow = "2";  // 指定所有链接元素都位于第二行
  linkElement.style.gridColumn = "auto / span 1";  // 每个链接元素占据一列
  linkElement.style.textAlign = "left";  // 文本居中
  
  container.appendChild(linkElement);
});

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);