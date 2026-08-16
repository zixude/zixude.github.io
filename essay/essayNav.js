var essaySections = [
  {
    title: "一\u00A0\u00A0辑",
    items: [
      { text: "分身" },
      { text: "印象" },
      { text: "虚荣" },
      { text: "焰火" },
      { text: "乞讨" },
      { text: "观念世界" },
      { text: "轮盘" },
      { text: "平庸" },
      { text: "意思" },
      { text: "杭州城" },
      { text: "霓虹灯" },
      { text: "预感" },
      { text: "潘达斯奈基" },
      { text: "烟火" },
      { text: "物是" },
      { text: "真实" },
      { text: "科幻复兴" },
      { text: "米修与木心" },
      { text: "罗生门评" },
      { text: "能与愿" },
      { text: "妖猫传评" },
      { text: "企慕情境" },
      { text: "何以解忧" },
      { text: "天童是风" },
      { text: "孤山" },
      { text: "我在兰亭" },
      { text: "故宫有垫脚石" }
    ]
  },
  {
    title: "二\u00A0\u00A0辑",
    items: [
      { text: "九月" },
      { text: "风景" },
      { text: "桃花" },
      { text: "补丁" },
      { text: "黑暗" },
      { text: "梦境" },
      { text: "人淡如菊" },
      { text: "藏着" },
      { text: "神性" },
      { text: "朝暮" },
      { text: "履迹" },
      { text: "即兴判断" },
      { text: "厌食症" },
      { text: "原则与飞" },
      { text: "轻轻判断" },
      { text: "雨霖铃·月令飞红" },
      { text: "困意" },
      { text: "十一月" },
      { text: "我还在这儿" },
      { text: "毒药" }
    ]
  },
  {
    title: "三\u00A0\u00A0辑",
    items: [
      { text: "〇一" },
      { text: "〇二" },
      { text: "〇三" },
      { text: "〇四" },
      { text: "〇五" },
      { text: "〇六" },
      { text: "〇七" },
      { text: "〇八" },
      { text: "〇九" },
      { text: "十〇" }
    ]
  }
];

essaySections.forEach(function (section) {
  var title = document.createElement("h1");
  var container = document.createElement("div");

  title.textContent = section.title;
  container.className = "posts-container";

  section.items.forEach(function (item) {
    var link = document.createElement("a");
    link.href = item.text.replace(/ /g, "-").toLowerCase() + ".html";
    link.textContent = item.text;
    container.appendChild(link);
    container.appendChild(document.createElement("br"));
  });

  document.body.appendChild(title);
  document.body.appendChild(container);
});
