

// 片段一：给页面添加mata UTF-8的声明

// 创建 meta 元素
var metaTag = document.createElement('meta');

// 设置 meta 元素的属性
metaTag.setAttribute('charset', 'UTF-8');

// 获取 head 元素
var headTag = document.getElementsByTagName('head')[0];

// 将 meta 元素添加到 head 元素中
headTag.appendChild(metaTag);




// 片段二：给页面添加mata title的声明

// 创建 title 元素
var titleTag = document.createElement('title');

// 设置 title 元素的文本内容
titleTag.textContent = '自序｜璞成';

// 获取 head 元素
var headTag = document.getElementsByTagName('head')[0];

// 将 title 元素添加到 head 元素中
headTag.appendChild(titleTag);




// 片段三：给页面添加支持按设备的宽度显示样式的代码

// 创建 meta 元素
var metaTag = document.createElement('meta');

// 设置 meta 元素的属性
metaTag.setAttribute('name', 'viewport');
metaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');

// 获取 head 元素
var headTag = document.getElementsByTagName('head')[0];

// 将 meta 元素添加到 head 元素中
headTag.appendChild(metaTag);



// 片段四：给网站添加一个favicon图标

// 创建 link 元素
var linkTag = document.createElement('link');

// 设置 link 元素的属性
linkTag.setAttribute('rel', 'icon');
linkTag.setAttribute('href', '../app/favicon_cloud.png');
linkTag.setAttribute('type', 'image/x-icon');
linkTag.setAttribute('sizes', '1x1'); 

// 获取 head 元素
var headTag = document.getElementsByTagName('head')[0];

// 将 link 元素添加到 head 元素中
headTag.appendChild(linkTag);




// 片段五：给页面添加指向统一的css文件

// 创建<link>标签并设置属性
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../app/styles.css";

// 将创建的元素添加到<head>标签中
var head = document.head || document.getElementsByTagName("head")[0];
head.appendChild(link);
head.appendChild(meta);

