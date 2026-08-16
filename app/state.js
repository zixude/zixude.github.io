(function () {
  var doc = document;
  var head = doc.head || doc.getElementsByTagName("head")[0];
  var currentScript =
    doc.currentScript || doc.getElementsByTagName("script")[0] || null;

  function resolveAppAsset(filename) {
    var scriptSrc = currentScript && currentScript.getAttribute("src");

    if (!scriptSrc) {
      return "app/" + filename;
    }

    return scriptSrc.replace(/[^/]+$/, filename);
  }

  function ensureMetaCharset() {
    if (doc.querySelector("meta[charset]")) {
      return;
    }

    var meta = doc.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
  }

  function ensureViewport() {
    if (doc.querySelector('meta[name="viewport"]')) {
      return;
    }

    var meta = doc.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(meta);
  }

  function ensureTitle() {
    if (doc.title) {
      return;
    }

    var titleSource = doc.querySelector("h1, h4");
    var titleText = titleSource ? titleSource.textContent.trim() : "";

    doc.title = titleText || "璞成";
  }

  function ensureStylesheet() {
    var stylesheetHref = resolveAppAsset("styles.css");
    var stylesheets = doc.querySelectorAll('link[rel="stylesheet"]');
    var index;

    for (index = 0; index < stylesheets.length; index += 1) {
      if (stylesheets[index].getAttribute("href") === stylesheetHref) {
        return;
      }
    }

    var link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = stylesheetHref;
    head.appendChild(link);
  }

  if (!doc.documentElement.lang) {
    doc.documentElement.lang = "zh-CN";
  }

  ensureMetaCharset();
  ensureViewport();
  ensureTitle();
  ensureStylesheet();
})();
