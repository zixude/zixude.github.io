

/////////////////////////////////////////////////////////////////////////////////

// 创建容器元素并设置其ID
var container = document.createElement("div");
container.id = "catalogs-container";

// 创建标题元素
var h4Title = document.createElement("h4");
h4Title.textContent = "Catalogs";

// 创建链接数组
var links = [
  { text: "散集 essay", url: "../essay/essay-home.html" },
  { text: "断想 insight", url: "../insight/insight-home.html" },
  { text: "思考 think", url: "../think/think-home.html" },
];

var linksHTML = ""; // 存储链接元素的 HTML 字符串

// 生成链接元素的 HTML 字符串
links.forEach(function(link) {
  linksHTML += `<a href="${link.url}">${link.text}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
});

// 将标题和链接内容添加到容器元素中
container.innerHTML = `<h4>${h4Title.textContent}</h4>${linksHTML}`;

// 将容器元素添加到文档中的适当位置
document.body.appendChild(container);

/////////////////////////////////////////////////////////////////////////////////

// 创建<link>标签并设置属性
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../styles.css";


// 将创建的元素添加到<head>标签中
var head = document.head || document.getElementsByTagName("head")[0];
head.appendChild(link);
head.appendChild(meta);

/////////////////////////////////////////////////////////////////////////////////

