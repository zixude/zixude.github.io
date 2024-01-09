

/////////////////////////////////////////////////////////////////////////////////


    // 创建 meta 元素
    var metaTag = document.createElement('meta');
  
    // 设置 meta 元素的属性
    metaTag.setAttribute('charset', 'UTF-8');
  
    // 获取 head 元素
    var headTag = document.getElementsByTagName('head')[0];
  
    // 将 meta 元素添加到 head 元素中
    headTag.appendChild(metaTag);


/////////////////////////////////////////////////////////////////////////////////

// 创建 meta 元素
var metaTag = document.createElement('meta');

// 设置 meta 元素的属性
metaTag.setAttribute('name', 'viewport');
metaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');

// 获取 head 元素
var headTag = document.getElementsByTagName('head')[0];

// 将 meta 元素添加到 head 元素中
headTag.appendChild(metaTag);


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