

/////////////////////////////////////////////////////////////////////////////////

// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "Catalogs";
console.log(h4Title);

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "catalogs-container";

// 将标题元素添加到文档中的适当位置
document.body.appendChild(h4Title);

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);

// 创建链接数组
var links = [
  { text: "散文", url: "../essay/essay-home.html" },
  { text: "断想", url: "../insight/insight-home.html" },
  { text: "思考", url: "../think/think-home.html" },
  { text: "画廊", url: "gallery-home.html" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
});

// 将链接元素的 HTML 字符串添加到容器元素中
container.innerHTML = linksHTML;

/////////////////////////////////////////////////////////////////////////////////

// 创建<link>标签并设置属性
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../styles.css";


// 将创建的元素添加到<head>标签中
var head = document.head || document.getElementsByTagName("head")[0];
head.appendChild(link);
head.appendChild(meta);